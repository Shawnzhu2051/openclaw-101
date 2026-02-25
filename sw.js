// Service Worker for OpenClaw 101 PWA
const CACHE_NAME = 'openclaw-101-v1';
const STATIC_CACHE = 'openclaw-101-static-v1';
const DYNAMIC_CACHE = 'openclaw-101-dynamic-v1';
const IMAGE_CACHE = 'openclaw-101-images-v1';

// 需要预缓存的核心资源
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/theme.js',
  '/app.js',
  '/favorites.js',
  '/search-enhanced.js',
  '/skills-data.js',
  '/skills-browser.js',
  '/playground.js',
  '/manifest.json',
  '/ai-assistant.html',
  '/checkin.html',
  '/cheatsheet.html',
  '/compare.html',
  '/playground.html',
  '/roadmap.html',
  '/skills-browser.html',
  '/tools.html'
];

// 安装事件 - 预缓存核心资源
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Pre-caching static assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => {
        console.log('[SW] Pre-caching complete');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Pre-caching failed:', error);
      })
  );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (
              cacheName !== STATIC_CACHE &&
              cacheName !== DYNAMIC_CACHE &&
              cacheName !== IMAGE_CACHE
            ) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Activation complete');
        return self.clients.claim();
      })
  );
});

// 判断请求是否为图片
function isImageRequest(request) {
  return request.destination === 'image' || 
         /\.(jpg|jpeg|png|gif|webp|svg|ico)$/i.test(request.url);
}

// 判断请求是否为字体
function isFontRequest(request) {
  return request.destination === 'font' ||
         /\.(woff2?|ttf|otf|eot)$/i.test(request.url);
}

// 判断请求是否为API
function isAPIRequest(request) {
  return request.url.includes('/api/') || 
         request.url.includes('openclaw') && request.method !== 'GET';
}

// 网络优先策略
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// 缓存优先策略
async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // 返回离线页面
    if (request.mode === 'navigate') {
      return caches.match('/offline.html');
    }
    throw error;
  }
}

// 过时再验证策略
async function staleWhileRevalidate(request, cacheName) {
  const cachedResponse = await caches.match(request);
  
  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        const cache = caches.open(cacheName);
        cache.then(c => c.put(request, networkResponse.clone()));
      }
      return networkResponse;
    })
    .catch(() => cachedResponse);
  
  return cachedResponse || fetchPromise;
}

// 仅网络策略
async function networkOnly(request) {
  return fetch(request);
}

// 获取策略
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // 跳过非GET请求和chrome扩展
  if (request.method !== 'GET' || url.protocol === 'chrome-extension:') {
    return;
  }
  
  // API请求 - 网络优先
  if (isAPIRequest(request)) {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
    return;
  }
  
  // 图片请求 - 缓存优先
  if (isImageRequest(request)) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE));
    return;
  }
  
  // 字体请求 - 缓存优先
  if (isFontRequest(request)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }
  
  // 导航请求 - 过时再验证
  if (request.mode === 'navigate') {
    event.respondWith(
      staleWhileRevalidate(request, STATIC_CACHE)
        .catch(() => caches.match('/index.html'))
    );
    return;
  }
  
  // 静态资源 - 缓存优先
  if (
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'document'
  ) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }
  
  // 其他请求 - 过时再验证
  event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE));
});

// 后台同步
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-checkins') {
    event.waitUntil(syncCheckins());
  }
});

async function syncCheckins() {
  // 同步打卡数据
  const db = await openDB('openclaw-101', 1);
  const pendingCheckins = await db.getAll('pendingCheckins');
  
  for (const checkin of pendingCheckins) {
    try {
      // 这里可以发送到服务器
      await fetch('/api/checkin', {
        method: 'POST',
        body: JSON.stringify(checkin),
        headers: { 'Content-Type': 'application/json' }
      });
      await db.delete('pendingCheckins', checkin.id);
    } catch (error) {
      console.error('[SW] Failed to sync checkin:', error);
    }
  }
}

// 推送通知
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    tag: data.tag || 'default',
    requireInteraction: data.requireInteraction || false,
    actions: data.actions || [],
    data: data.data || {}
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// 通知点击
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  const notificationData = event.notification.data;
  let url = '/';
  
  if (notificationData && notificationData.url) {
    url = notificationData.url;
  }
  
  event.waitUntil(
    clients.matchAll({ type: 'window' })
      .then((clientList) => {
        // 如果已有窗口打开，聚焦它
        for (const client of clientList) {
          if (client.url === url && 'focus' in client) {
            return client.focus();
          }
        }
        // 否则打开新窗口
        if (clients.openWindow) {
          return clients.openWindow(url);
        }
      })
  );
});

// 消息处理（来自主线程）
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
  
  if (event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(DYNAMIC_CACHE)
        .then((cache) => cache.addAll(event.data.urls))
    );
  }
});

// IndexedDB 辅助函数
function openDB(name, version) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(name, version);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('pendingCheckins')) {
        db.createObjectStore('pendingCheckins', { keyPath: 'id' });
      }
    };
  });
}