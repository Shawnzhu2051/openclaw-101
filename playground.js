// Playground JavaScript

// Demo chat messages
const demoMessages = [
    {
        type: 'assistant',
        content: '你好！我是 OpenClaw，你的 AI 私人助理。我可以帮你：\n\n• 搜索网络信息\n• 编写和审查代码\n• 管理文件和数据\n• 自动化任务\n\n点击右侧的能力卡片，或输入消息来体验演示！',
        time: '刚刚'
    }
];

// Capability cards data
const capabilities = [
    {
        id: 'search',
        icon: '🔍',
        title: '智能搜索',
        description: '搜索最新信息并总结',
        demoQuery: '搜索 OpenClaw 最新更新',
        demoResponse: '🔍 正在搜索 OpenClaw 最新更新...\n\n根据搜索结果，OpenClaw 最近的重要更新包括：\n\n1. **v2.1.0 发布** - 新增 Canvas 可视化功能\n2. **性能优化** - 启动速度提升 40%\n3. **安全增强** - 新增 Skill 沙箱机制\n4. **新平台支持** - 新增飞书、钉钉集成'
    },
    {
        id: 'code',
        icon: '💻',
        title: '代码助手',
        description: '编写、解释和优化代码',
        demoQuery: '写一个 Python 快速排序',
        demoResponse: '```python\ndef quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + middle + quicksort(right)\n\n# 示例\nprint(quicksort([3, 6, 8, 10, 1, 2, 1]))\n# 输出: [1, 1, 2, 3, 6, 8, 10]\n```\n\n这个实现使用了列表推导式，简洁高效。时间复杂度平均为 O(n log n)。'
    },
    {
        id: 'weather',
        icon: '🌤️',
        title: '天气查询',
        description: '获取实时天气信息',
        demoQuery: '北京今天天气怎么样？',
        demoResponse: '🌤️ 北京今日天气\n\n• 温度：18°C - 26°C\n• 天气：多云转晴\n• 湿度：45%\n• 风速：3级 东南风\n• 空气质量：良 (AQI 75)\n\n💡 建议：天气舒适，适合户外活动。记得涂防晒霜！'
    },
    {
        id: 'file',
        icon: '📁',
        title: '文件管理',
        description: '读取和分析文件内容',
        demoQuery: '分析这个 CSV 文件的数据',
        demoResponse: '📊 CSV 数据分析结果\n\n文件包含 1,250 行数据，3 列：\n\n| 列名 | 类型 | 统计 |\n|------|------|------|\n| date | 日期 | 2024-01 至 2024-12 |\n| sales | 数值 | 总计: ¥2.5M |\n| region | 文本 | 5 个地区 |\n\n📈 关键发现：\n• Q4 销售额最高，占全年 35%\n• 华东地区贡献最大 (40%)\n• 12月同比增长 23%'
    },
    {
        id: 'browser',
        icon: '🌐',
        title: '浏览器控制',
        description: '自动化网页操作',
        demoQuery: '打开 GitHub  trending',
        demoResponse: '🌐 正在访问 github.com/trending...\n\n今日热门仓库 (Python):\n\n1. **openclaw/openclaw** ⭐ 196k\n   AI 助理平台，支持多平台接入\n\n2. **microsoft/terminal** ⭐ 95k\n   Windows 终端应用\n\n3. **python/cpython** ⭐ 62k\n   Python 编程语言源码\n\n已截图保存到 ~/screenshots/github_trending.png'
    }
];

// DOM Elements
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const capabilityCards = document.getElementById('capabilityCards');
const demoTabs = document.getElementById('demoTabs');

// Initialize
function init() {
    renderMessages();
    renderCapabilities();
    setupEventListeners();
    setupNavbar();
    setupBackToTop();
}

// Render chat messages
function renderMessages() {
    chatMessages.innerHTML = demoMessages.map(msg => `
        <div class="demo-message ${msg.type}">
            <div class="demo-message-avatar">
                ${msg.type === 'assistant' ? '🦞' : '👤'}
            </div>
            <div>
                <div class="demo-message-content">
                    ${formatMessage(msg.content)}
                </div>
                <div class="demo-message-time">${msg.time}</div>
            </div>
        </div>
    `).join('');
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Format message content (handle code blocks, etc.)
function formatMessage(content) {
    // Convert newlines to <br>
    let formatted = content.replace(/\n/g, '<br>');
    
    // Handle code blocks
    formatted = formatted.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre style="background: var(--bg-primary); padding: 12px; border-radius: 6px; overflow-x: auto; margin: 8px 0;"><code>$2</code></pre>');
    
    // Handle inline code
    formatted = formatted.replace(/`([^`]+)`/g, '<code style="background: var(--bg-primary); padding: 2px 6px; border-radius: 4px; font-family: monospace;">$1</code>');
    
    return formatted;
}

// Render capability cards
function renderCapabilities() {
    capabilityCards.innerHTML = capabilities.map((cap, index) => `
        <div class="capability-card ${index === 0 ? 'active' : ''}" data-capability="${cap.id}">
            <div class="capability-icon">${cap.icon}</div>
            <div class="capability-content">
                <h3>${cap.title}</h3>
                <p>${cap.description}</p>
            </div>
        </div>
    `).join('');
}

// Add a message to the chat
function addMessage(type, content) {
    const time = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    demoMessages.push({ type, content, time });
    renderMessages();
}

// Simulate assistant response
function simulateResponse(capabilityId) {
    const cap = capabilities.find(c => c.id === capabilityId);
    if (!cap) return;
    
    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'demo-message assistant typing';
    typingDiv.innerHTML = `
        <div class="demo-message-avatar">🦞</div>
        <div class="demo-message-content" style="display: flex; gap: 4px; align-items: center;">
            <span style="animation: bounce 0.6s infinite;">●</span>
            <span style="animation: bounce 0.6s infinite 0.2s;">●</span>
            <span style="animation: bounce 0.6s infinite 0.4s;">●</span>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Remove typing and add response after delay
    setTimeout(() => {
        typingDiv.remove();
        addMessage('assistant', cap.demoResponse);
    }, 1500);
}

// Setup event listeners
function setupEventListeners() {
    // Send button
    sendBtn.addEventListener('click', handleSend);
    
    // Enter key
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    });
    
    // Capability card clicks
    capabilityCards.addEventListener('click', (e) => {
        const card = e.target.closest('.capability-card');
        if (card) {
            // Update active state
            document.querySelectorAll('.capability-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            // Get capability and trigger demo
            const capId = card.dataset.capability;
            const cap = capabilities.find(c => c.id === capId);
            if (cap) {
                addMessage('user', cap.demoQuery);
                simulateResponse(capId);
            }
        }
    });
    
    // Demo tabs
    demoTabs.addEventListener('click', (e) => {
        const tab = e.target.closest('.demo-tab');
        if (tab) {
            // Update active tab
            document.querySelectorAll('.demo-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding panel
            const tabId = tab.dataset.tab;
            document.querySelectorAll('.demo-panel').forEach(p => p.classList.remove('active'));
            document.getElementById(`${tabId}-panel`).classList.add('active');
        }
    });
}

// Handle send message
function handleSend() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    addMessage('user', message);
    chatInput.value = '';
    
    // Simulate generic response
    setTimeout(() => {
        addMessage('assistant', `🦞 我收到了你的消息："${message}"\n\n这是一个演示界面。在实际部署的 OpenClaw 中，我会：\n\n1. 理解你的意图\n2. 调用相应的工具\n3. 执行必要的操作\n4. 返回有用的结果\n\n点击右侧的能力卡片，体验更多功能演示！`);
    }, 1000);
}

// Setup navbar
function setupNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Setup back to top button
function setupBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Run init when DOM is ready
document.addEventListener('DOMContentLoaded', init);
