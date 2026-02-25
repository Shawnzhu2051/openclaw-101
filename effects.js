// Three.js Particle Background
class ParticleBackground {
    constructor() {
        this.container = document.querySelector('.hero-bg');
        if (!this.container) return;
        
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;
        
        this.init();
    }
    
    init() {
        // 创建场景
        this.scene = new THREE.Scene();
        
        // 创建相机
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            2000
        );
        this.camera.position.z = 500;
        
        // 创建渲染器
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);
        
        // 创建粒子
        this.createParticles();
        
        // 绑定事件
        this.bindEvents();
        
        // 开始动画
        this.animate();
    }
    
    createParticles() {
        const particleCount = 100;
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];
        const sizes = [];
        
        const colorPalette = [
            new THREE.Color(0x6366f1), // Indigo
            new THREE.Color(0x22d3ee), // Cyan
            new THREE.Color(0xf472b6), // Pink
            new THREE.Color(0xa855f7), // Purple
        ];
        
        for (let i = 0; i < particleCount; i++) {
            // 位置
            positions.push(
                (Math.random() - 0.5) * 2000,
                (Math.random() - 0.5) * 2000,
                (Math.random() - 0.5) * 1000
            );
            
            // 颜色
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors.push(color.r, color.g, color.b);
            
            // 大小
            sizes.push(Math.random() * 20 + 10);
        }
        
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
        
        // 创建自定义着色器材质
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                pixelRatio: { value: window.devicePixelRatio }
            },
            vertexShader: `
                attribute float size;
                attribute vec3 color;
                varying vec3 vColor;
                uniform float time;
                
                void main() {
                    vColor = color;
                    
                    vec3 pos = position;
                    pos.y += sin(time * 0.5 + position.x * 0.01) * 20.0;
                    pos.x += cos(time * 0.3 + position.y * 0.01) * 20.0;
                    
                    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                    gl_PointSize = size * (300.0 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                varying vec3 vColor;
                
                void main() {
                    float dist = length(gl_PointCoord - vec2(0.5));
                    if (dist > 0.5) discard;
                    
                    float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
                    gl_FragColor = vec4(vColor, alpha * 0.6);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        
        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
        
        // 添加连接线
        this.createConnections();
    }
    
    createConnections() {
        const lineGeometry = new THREE.BufferGeometry();
        const linePositions = [];
        const lineColors = [];
        
        const positions = this.particles.geometry.attributes.position.array;
        const particleCount = positions.length / 3;
        
        for (let i = 0; i < particleCount; i++) {
            for (let j = i + 1; j < particleCount; j++) {
                const dx = positions[i * 3] - positions[j * 3];
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                
                if (dist < 300) {
                    linePositions.push(
                        positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                        positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
                    );
                    
                    const alpha = 1 - dist / 300;
                    lineColors.push(0.4 * alpha, 0.4 * alpha, 1 * alpha);
                    lineColors.push(0.4 * alpha, 0.4 * alpha, 1 * alpha);
                }
            }
        }
        
        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
        
        const lineMaterial = new THREE.LineBasicMaterial({
            vertexColors: true,
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending
        });
        
        this.lines = new THREE.LineSegments(lineGeometry, lineMaterial);
        this.scene.add(this.lines);
    }
    
    bindEvents() {
        // 鼠标移动
        document.addEventListener('mousemove', (event) => {
            this.mouseX = (event.clientX - this.windowHalfX) * 0.05;
            this.mouseY = (event.clientY - this.windowHalfY) * 0.05;
        });
        
        // 窗口调整
        window.addEventListener('resize', () => {
            this.windowHalfX = window.innerWidth / 2;
            this.windowHalfY = window.innerHeight / 2;
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        const time = Date.now() * 0.001;
        
        // 更新粒子材质
        if (this.particles && this.particles.material.uniforms) {
            this.particles.material.uniforms.time.value = time;
        }
        
        // 旋转粒子系统
        if (this.particles) {
            this.particles.rotation.y = time * 0.05;
            this.particles.rotation.x = Math.sin(time * 0.1) * 0.1;
        }
        
        // 相机跟随鼠标
        this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
        this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05;
        this.camera.lookAt(this.scene.position);
        
        this.renderer.render(this.scene, this.camera);
    }
}

// 滚动视差效果
class ParallaxEffect {
    constructor() {
        this.elements = document.querySelectorAll('[data-parallax]');
        this.bindEvents();
    }
    
    bindEvents() {
        window.addEventListener('scroll', () => {
            requestAnimationFrame(() => this.update());
        });
    }
    
    update() {
        const scrollY = window.scrollY;
        
        this.elements.forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0.5;
            const yPos = -(scrollY * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    }
}

// 霓虹光效
class NeonEffects {
    constructor() {
        this.initGlowEffects();
        this.initGradientAnimation();
    }
    
    initGlowEffects() {
        // 为按钮和卡片添加霓虹光效
        const glowElements = document.querySelectorAll('.btn-primary, .feature-card:hover, .category-card:hover');
        
        glowElements.forEach(el => {
            el.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.3)';
        });
    }
    
    initGradientAnimation() {
        // 创建动态渐变背景
        const style = document.createElement('style');
        style.textContent = `
            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            
            .gradient-animated {
                background-size: 200% 200%;
                animation: gradientShift 8s ease infinite;
            }
            
            @keyframes neonPulse {
                0%, 100% { 
                    box-shadow: 0 0 5px rgba(99, 102, 241, 0.5),
                                0 0 10px rgba(99, 102, 241, 0.3),
                                0 0 20px rgba(99, 102, 241, 0.2);
                }
                50% { 
                    box-shadow: 0 0 10px rgba(99, 102, 241, 0.8),
                                0 0 20px rgba(99, 102, 241, 0.5),
                                0 0 40px rgba(99, 102, 241, 0.3);
                }
            }
            
            .neon-glow {
                animation: neonPulse 2s ease-in-out infinite;
            }
            
            @keyframes borderGlow {
                0%, 100% { border-color: rgba(99, 102, 241, 0.3); }
                50% { border-color: rgba(99, 102, 241, 0.8); }
            }
            
            .border-glow {
                animation: borderGlow 3s ease-in-out infinite;
            }
            
            /* 玻璃拟态效果 */
            .glass {
                background: rgba(30, 30, 46, 0.6);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            [data-theme="light"] .glass {
                background: rgba(255, 255, 255, 0.7);
                border: 1px solid rgba(0, 0, 0, 0.1);
            }
            
            /* 文字发光效果 */
            .text-glow {
                text-shadow: 0 0 10px rgba(99, 102, 241, 0.5),
                             0 0 20px rgba(99, 102, 241, 0.3),
                             0 0 30px rgba(99, 102, 241, 0.2);
            }
            
            /* 鼠标跟随光效 */
            .cursor-glow {
                position: fixed;
                width: 300px;
                height: 300px;
                background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                z-index: 0;
                transform: translate(-50%, -50%);
                transition: opacity 0.3s;
            }
        `;
        document.head.appendChild(style);
    }
}

// 鼠标跟随光效
class CursorGlow {
    constructor() {
        this.glow = document.createElement('div');
        this.glow.className = 'cursor-glow';
        document.body.appendChild(this.glow);
        
        this.bindEvents();
    }
    
    bindEvents() {
        document.addEventListener('mousemove', (e) => {
            this.glow.style.left = e.clientX + 'px';
            this.glow.style.top = e.clientY + 'px';
        });
        
        // 在移动设备上隐藏
        if (window.matchMedia('(pointer: coarse)').matches) {
            this.glow.style.display = 'none';
        }
    }
}

// 滚动显示动画
class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('.feature-card, .timeline-item, .category-card, .resource-card');
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        this.elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// 语音朗读功能
class TextToSpeech {
    constructor() {
        this.synth = window.speechSynthesis;
        this.utterance = null;
        this.isPlaying = false;
        this.rate = 1;
        this.init();
    }
    
    init() {
        // 创建朗读控制按钮
        this.createControls();
    }
    
    createControls() {
        const style = document.createElement('style');
        style.textContent = `
            .tts-controls {
                position: fixed;
                bottom: 24px;
                left: 24px;
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 12px 16px;
                background: var(--bg-card);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-lg);
                box-shadow: var(--shadow-lg);
                z-index: 997;
                opacity: 0;
                visibility: hidden;
                transform: translateY(20px);
                transition: var(--transition-normal);
            }
            
            .tts-controls.visible {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            
            .tts-btn {
                width: 40px;
                height: 40px;
                background: var(--bg-tertiary);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-md);
                color: var(--text-secondary);
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: var(--transition-fast);
            }
            
            .tts-btn:hover {
                background: var(--accent-primary);
                border-color: var(--accent-primary);
                color: white;
            }
            
            .tts-rate {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 0.875rem;
                color: var(--text-secondary);
            }
            
            .tts-rate input {
                width: 80px;
            }
        `;
        document.head.appendChild(style);
        
        const controls = document.createElement('div');
        controls.className = 'tts-controls';
        controls.id = 'ttsControls';
        controls.innerHTML = `
            <button class="tts-btn" id="ttsPlay">▶️</button>
            <button class="tts-btn" id="ttsPause">⏸️</button>
            <button class="tts-btn" id="ttsStop">⏹️</button>
            <div class="tts-rate">
                <span>语速</span>
                <input type="range" id="ttsRate" min="0.5" max="2" step="0.1" value="1">
            </div>
        `;
        document.body.appendChild(controls);
        
        // 绑定事件
        document.getElementById('ttsPlay').addEventListener('click', () => this.play());
        document.getElementById('ttsPause').addEventListener('click', () => this.pause());
        document.getElementById('ttsStop').addEventListener('click', () => this.stop());
        document.getElementById('ttsRate').addEventListener('input', (e) => {
            this.rate = parseFloat(e.target.value);
        });
        
        // 选中文本时显示控制
        document.addEventListener('mouseup', () => {
            const selection = window.getSelection().toString().trim();
            if (selection.length > 0) {
                controls.classList.add('visible');
            }
        });
    }
    
    play() {
        const selection = window.getSelection().toString().trim();
        if (!selection) return;
        
        if (this.isPlaying) {
            this.synth.resume();
        } else {
            this.utterance = new SpeechSynthesisUtterance(selection);
            this.utterance.lang = 'zh-CN';
            this.utterance.rate = this.rate;
            
            this.utterance.onend = () => {
                this.isPlaying = false;
            };
            
            this.synth.speak(this.utterance);
            this.isPlaying = true;
        }
    }
    
    pause() {
        if (this.synth.speaking) {
            this.synth.pause();
        }
    }
    
    stop() {
        this.synth.cancel();
        this.isPlaying = false;
        document.getElementById('ttsControls').classList.remove('visible');
    }
}

// 实时时钟
class LiveClock {
    constructor() {
        this.init();
    }
    
    init() {
        // 创建时钟元素
        const clock = document.createElement('div');
        clock.className = 'live-clock';
        clock.id = 'liveClock';
        
        const style = document.createElement('style');
        style.textContent = `
            .live-clock {
                position: fixed;
                top: 80px;
                right: 24px;
                padding: 12px 20px;
                background: var(--bg-card);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-lg);
                font-family: 'SF Mono', Monaco, monospace;
                font-size: 1.25rem;
                font-weight: 600;
                color: var(--accent-primary);
                z-index: 998;
                box-shadow: var(--shadow-md);
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4px;
            }
            
            .live-clock .date {
                font-size: 0.75rem;
                color: var(--text-secondary);
                font-weight: 400;
            }
            
            @media (max-width: 768px) {
                .live-clock {
                    display: none;
                }
            }
        `;
        document.head.appendChild(style);
        
        clock.innerHTML = `
            <span class="time">00:00:00</span>
            <span class="date">--月--日 星期-</span>
        `;
        document.body.appendChild(clock);
        
        this.update();
        setInterval(() => this.update(), 1000);
    }
    
    update() {
        const now = new Date();
        const timeEl = document.querySelector('#liveClock .time');
        const dateEl = document.querySelector('#liveClock .date');
        
        if (timeEl) {
            timeEl.textContent = now.toLocaleTimeString('zh-CN', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        }
        
        if (dateEl) {
            const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
            dateEl.textContent = `${now.getMonth() + 1}月${now.getDate()}日 星期${weekdays[now.getDay()]}`;
        }
    }
}

// 初始化所有效果
document.addEventListener('DOMContentLoaded', () => {
    // 检查是否支持 Three.js
    if (typeof THREE !== 'undefined' && !window.matchMedia('(pointer: coarse)').matches) {
        // 桌面端启用 Three.js
        new ParticleBackground();
    }
    
    // 其他效果
    new ParallaxEffect();
    new NeonEffects();
    new CursorGlow();
    new ScrollReveal();
    
    // 语音朗读（如果支持）
    if ('speechSynthesis' in window) {
        new TextToSpeech();
    }
    
    // 实时时钟
    new LiveClock();
});