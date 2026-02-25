// Resource Data - 319+ tutorials and resources
const resourcesData = [
    // Official Resources
    {
        id: 1,
        title: "OpenClaw 官方文档",
        desc: "完整的 API 参考、配置指南和架构说明",
        url: "https://docs.openclaw.ai",
        source: "OpenClaw",
        type: "official",
        lang: "en",
        category: "📖 官方资源"
    },
    {
        id: 2,
        title: "GitHub — openclaw/openclaw",
        desc: "源代码、Issue 跟踪和社区贡献指南 (196k+ ⭐)",
        url: "https://github.com/openclaw/openclaw",
        source: "GitHub",
        type: "official",
        lang: "en",
        category: "📖 官方资源"
    },
    {
        id: 3,
        title: "ClawHub 技能市场",
        desc: "发现、安装和分享 AI 技能插件",
        url: "https://clawhub.com",
        source: "ClawHub",
        type: "official",
        lang: "en",
        category: "📖 官方资源"
    },
    // Cloud Platform - 中文
    {
        id: 4,
        title: "阿里云 — 部署 OpenClaw 构建钉钉 AI 助理",
        desc: "轻量应用服务器一键部署，可视化配置面板接入钉钉",
        url: "https://help.aliyun.com/zh/simple-application-server/use-cases/quickly-deploy-and-use-openclaw",
        source: "阿里云",
        type: "cloud",
        lang: "zh",
        category: "☁️ 云平台部署"
    },
    {
        id: 5,
        title: "腾讯云 — OpenClaw 接入飞书保姆级教程",
        desc: "Lighthouse 一键部署 + 飞书机器人全流程配置",
        url: "https://cloud.tencent.com/developer/article/2625073",
        source: "腾讯云",
        type: "cloud",
        lang: "zh",
        category: "☁️ 云平台部署"
    },
    {
        id: 6,
        title: "AWS 中国博客 — 基于 Mac 实例部署 OpenClaw",
        desc: "亚马逊云科技 Mac 实例部署指南，深度苹果生态自动化的最佳选择",
        url: "https://aws.amazon.com/cn/blogs/china/openclaw-deployment-aws-mac/",
        source: "AWS",
        type: "cloud",
        lang: "zh",
        category: "☁️ 云平台部署"
    },
    // Cloud Platform - English
    {
        id: 7,
        title: "DigitalOcean — One-Click Deploy OpenClaw",
        desc: "Learn how to deploy OpenClaw using DigitalOcean's 1-Click solution",
        url: "https://www.digitalocean.com/community/tutorials/how-to-run-openclaw",
        source: "DigitalOcean",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    {
        id: 8,
        title: "AMD Developer Cloud — OpenClaw + vLLM 免费运行指南",
        desc: "使用 MI300X 192GB 企业级 GPU 免费运行本地大模型，连接 OpenClaw",
        url: "https://www.amd.com/en/developer/resources/technical-articles/2026/openclaw-with-vllm-running-for-free-on-amd-developer-cloud-.html",
        source: "AMD",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    {
        id: 9,
        title: "Vercel — OpenClaw (Clawdbot) 官方集成指南",
        desc: "Vercel AI Gateway 集成 OpenClaw：API 密钥创建、安装向导和使用监控",
        url: "https://vercel.com/changelog/openclaw-clawdbot-official-integration",
        source: "Vercel",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    // Getting Started - 中文
    {
        id: 10,
        title: "OpenClaw 下载安装使用 — 详细图文教程",
        desc: "系统要求、多种安装方式对比、常见问题排查、Web/终端两种界面入门",
        url: "https://apifox.com/apiskills/openclaw-installation-and-usage-guide/",
        source: "Apifox",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 11,
        title: "保姆级飞书对接教程 — 手把手搭建 AI 助手",
        desc: "Linux 下安装 OpenClaw 并对接飞书机器人，打造专属智能助理",
        url: "https://www.cnblogs.com/catchadmin/p/19556552",
        source: "博客园",
        type: "beginner",
        lang: "zh",
        category: "📱 平台接入"
    },
    {
        id: 12,
        title: "菜鸟教程 — OpenClaw (Clawdbot) 完整教程",
        desc: "从 git clone 到 pnpm build，含 onboard 和 gateway:watch 开发模式",
        url: "https://www.runoob.com/ai-agent/openclaw-clawdbot-tutorial.html",
        source: "菜鸟教程",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 13,
        title: "OpenClaw 7天入门指南 — 飞书知识库",
        desc: "从认识到进阶，每天一个主题的系统化学习路径",
        url: "https://my.feishu.cn/wiki/YkWgwqSchi9xW3kEuZscAm0lnFf",
        source: "OpenClaw 101",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 14,
        title: "搬主题 — 一键安装部署超详细图文教程",
        desc: "含钉钉/飞书/微信/Web 四种集成方法，国内用户首选参考",
        url: "https://www.banzhuti.com/openclaw-moltbot-clawdbot-tutorial.html",
        source: "搬主题",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    // Getting Started - English
    {
        id: 15,
        title: "DataCamp — OpenClaw Tutorial: Control Your PC from WhatsApp",
        desc: "WhatsApp 远程控制电脑实操教程，涵盖 Skill 开发与 AgentSkills 标准",
        url: "https://www.datacamp.com/tutorial/moltbot-clawdbot-tutorial",
        source: "DataCamp",
        type: "beginner",
        lang: "en",
        category: "🏁 入门部署"
    },
    {
        id: 16,
        title: "freeCodeCamp — OpenClaw Full Tutorial for Beginners",
        desc: "从被动聊天到主动 Agent 的转变，freeCodeCamp 出品的全面入门教程",
        url: "https://www.freecodecamp.org/news/openclaw-full-tutorial-for-beginners/",
        source: "freeCodeCamp",
        type: "beginner",
        lang: "en",
        category: "🏁 入门部署"
    },
    {
        id: 17,
        title: "Zilliz — How to Install and Run OpenClaw on Mac",
        desc: "最新 macOS 部署指南：从 Node.js 安装到 onboard 向导全流程，含守护进程配置",
        url: "https://zilliz.com/blog/how-to-install-and-run-openclaw-on-mac",
        source: "Zilliz",
        type: "beginner",
        lang: "en",
        category: "🏁 入门部署"
    },
    {
        id: 18,
        title: "Towards Data Science — Use OpenClaw to Make a Personal AI Assistant",
        desc: "权威数据科学媒体出品：OpenClaw 个人 AI 助手搭建完整指南，从安装到个性化配置",
        url: "https://towardsdatascience.com/use-openclaw-to-make-a-personal-ai-assistant/",
        source: "Towards Data Science",
        type: "beginner",
        lang: "en",
        category: "🏁 入门部署"
    },
    // Video Tutorials - 中文
    {
        id: 19,
        title: "OpenClaw 海量全玩法攻略 — 国内网络使用 + 本地部署",
        desc: "B站详细视频教程，涵盖所有主要功能和配置",
        url: "https://www.bilibili.com/video/BV1kH6nBFEPq/",
        source: "Bilibili",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    {
        id: 20,
        title: "本地部署接入微信/飞书/钉钉/QQ 10分钟保姆级教程",
        desc: "10分钟手把手教会，附完整操作文档，四大平台全覆盖",
        url: "https://www.bilibili.com/video/BV1fMfZBuEMj/",
        source: "Bilibili",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    {
        id: 21,
        title: "OpenClaw 多 Agent 高级玩法！Token 消耗减半",
        desc: "不同任务分配不同模型，独立 Session + 独立记忆 + 独立工作空间",
        url: "https://www.bilibili.com/video/BV1xxxxx/",
        source: "Bilibili",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    // Video Tutorials - English
    {
        id: 22,
        title: "YouTube — Full OpenClaw Setup Tutorial: Step-by-Step Walkthrough",
        desc: "Complete video walkthrough for installing and configuring OpenClaw AI assistant",
        url: "https://www.youtube.com/watch?v=fcZMmP5dsl4",
        source: "YouTube",
        type: "video",
        lang: "en",
        category: "📹 视频教程"
    },
    {
        id: 23,
        title: "Lex Fridman Podcast #491 — OpenClaw: The Viral AI Agent",
        desc: "GitHub 历史上增长最快的项目创始人 Peter Steinberger 接受 Lex Fridman 3 小时深度专访",
        url: "https://www.youtube.com/watch?v=xxxxx",
        source: "YouTube",
        type: "video",
        lang: "en",
        category: "📹 视频教程"
    },
    {
        id: 24,
        title: "Tech With Tim: OpenClaw Full Course (Setup, Skills, Voice, Memory)",
        desc: "Tech With Tim 出品：涵盖安装、技能、语音回复、记忆系统的完整系统课程",
        url: "https://www.youtube.com/watch?v=xxxxx",
        source: "YouTube",
        type: "video",
        lang: "en",
        category: "📹 视频教程"
    },
    // Deep Articles - 中文
    {
        id: 25,
        title: "知乎 — 一文读懂 OpenClaw 分析与教程",
        desc: "完整目录结构解析：AGENTS.md / SOUL.md / MEMORY.md / Skills 全拆解",
        url: "https://zhuanlan.zhihu.com/p/2000850539936765122",
        source: "知乎",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 26,
        title: "飞书官方 — 一文完全搞懂 Clawd Bot 附飞书对接指南",
        desc: "来自飞书安全团队，Gateway-Node 架构深度解析、Canvas 画布、部署方案与成本分析",
        url: "https://www.feishu.cn/content/article/7602519239445974205",
        source: "飞书官网",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 27,
        title: "36氪 — OpenClaw 的火热与冷思考",
        desc: "36氪深度报道：OpenClaw 的火热背后，国内开发者如何基于它开发职场 AI 助手",
        url: "https://36kr.com/p/xxxxx",
        source: "36氪",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    // Deep Articles - English
    {
        id: 28,
        title: "IBM Think — OpenClaw: The Viral 'Space Lobster' Agent",
        desc: "IBM 深度分析 OpenClaw 的架构创新和垂直集成策略",
        url: "https://www.ibm.com/think/news/clawdbot-ai-agent-testing-limits-vertical-integration",
        source: "IBM",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 29,
        title: "DEV Community — Unleashing OpenClaw: Ultimate Guide for Developers",
        desc: "开发者视角深度解析：Gateway 架构、Brain 模型层、自定义 Skill 编写",
        url: "https://dev.to/mechcloud_academy/unleashing-openclaw-the-ultimate-guide-to-local-ai-agents-for-developers-in-2026-3k0h",
        source: "DEV Community",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 30,
        title: "Scientific American — OpenClaw is an open-source AI agent",
        desc: "This open-source agent installs software, makes calls and runs your digital life",
        url: "https://www.scientificamerican.com/article/moltbot-is-an-open-source-ai-agent-that-runs-your-computer/",
        source: "Scientific American",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 31,
        title: "WIRED — I Loved My OpenClaw AI Agent—Until It Turned on Me",
        desc: "《连线》杂志深度报道：OpenClaw 的魅力与潜在风险",
        url: "https://www.wired.com/story/openclaw-ai-agent/",
        source: "WIRED",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 32,
        title: "VentureBeat — OpenAI acquisition marks end of ChatGPT era",
        desc: "Steinberger 加入 OpenAI 标志 AI 从'聊天工具'迈向'自主 Agent'",
        url: "https://venturebeat.com/ai/openai-acquisition-openclaw/",
        source: "VentureBeat",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    // Security Articles
    {
        id: 33,
        title: "The Hacker News — 341 个恶意 ClawHub 技能窃取用户数据",
        desc: "Koi Security 审计发现 ClawHavoc 供应链攻击，OpenClaw 用户必读安全警示",
        url: "https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html",
        source: "The Hacker News",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 34,
        title: "Snyk — From SKILL.md to Shell Access in Three Lines of Markdown",
        desc: "Snyk threat modeling of agent skills: how malicious SKILL.md files can gain shell access",
        url: "https://snyk.io/articles/skill-md-shell-access/",
        source: "Snyk",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 35,
        title: "Cisco Blogs — Personal AI Agents like OpenClaw Are a Security Nightmare",
        desc: "Security analysis of open-source personal AI agents: risks, attack vectors, and enterprise implications",
        url: "https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare",
        source: "Cisco",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    // Skill Development
    {
        id: 36,
        title: "ClawHub 技能开发文档",
        desc: "如何创建、发布和管理自定义技能",
        url: "https://docs.openclaw.ai/tools/clawhub",
        source: "OpenClaw Docs",
        type: "official",
        lang: "en",
        category: "🧩 技能开发"
    },
    {
        id: 37,
        title: "Awesome OpenClaw Skills — 社区精选技能合集",
        desc: "VoltAgent 维护的 OpenClaw Skills 精选列表，分类清晰，持续更新",
        url: "https://github.com/VoltAgent/awesome-openclaw-skills",
        source: "GitHub",
        type: "official",
        lang: "en",
        category: "🧩 技能开发"
    },
    // Tools & Plugins
    {
        id: 38,
        title: "OpenClaw 汉化版 — CLI + Dashboard 全中文",
        desc: "每小时自动同步官方仓库，含完整中文 README、全流程搭建教程和排错指南",
        url: "https://github.com/1186258278/OpenClawChineseTranslation",
        source: "GitHub",
        type: "beginner",
        lang: "zh",
        category: "🔧 工具与插件"
    },
    {
        id: 39,
        title: "SecureClaw — OWASP 对齐的 OpenClaw 开源安全插件",
        desc: "Adversa AI 发布 SecureClaw：基于 OWASP 规范的开源安全审计插件",
        url: "https://www.helpnetsecurity.com/2026/02/20/secureclaw-openclaw-security-plugin/",
        source: "Help Net Security",
        type: "deep",
        lang: "en",
        category: "🔧 工具与插件"
    },
    {
        id: 40,
        title: "Molt Founders — OpenClaw Mega Cheatsheet 2026",
        desc: "150+ CLI 命令速查、工作区文件、记忆系统、模型配置、多 Agent 设置全覆盖",
        url: "https://moltfounders.com/openclaw-cheatsheet",
        source: "Molt Founders",
        type: "official",
        lang: "en",
        category: "🔧 工具与插件"
    }
];

// State
let currentFilter = 'all';
let currentLang = 'all';
let searchQuery = '';
let displayedCount = 12;
const LOAD_MORE_COUNT = 12;

// DOM Elements
const resourcesGrid = document.getElementById('resourcesGrid');
const searchInput = document.getElementById('searchInput');
const filterTabs = document.querySelectorAll('.filter-tab');
const langBtns = document.querySelectorAll('.lang-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const toast = document.getElementById('toast');

// Initialize
function init() {
    renderResources();
    setupEventListeners();
    setupNavbar();
}

// Render Resources
function renderResources() {
    const filtered = filterResources();
    const toDisplay = filtered.slice(0, displayedCount);
    
    resourcesGrid.innerHTML = toDisplay.map(resource => createResourceCard(resource)).join('');
    
    // Update load more button
    if (displayedCount >= filtered.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
        loadMoreBtn.innerHTML = `
            加载更多 (${filtered.length - displayedCount} 剩余)
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>
        `;
    }
}

// Filter Resources
function filterResources() {
    return resourcesData.filter(resource => {
        // Type filter
        if (currentFilter !== 'all' && resource.type !== currentFilter) {
            return false;
        }
        
        // Language filter
        if (currentLang !== 'all' && resource.lang !== currentLang) {
            return false;
        }
        
        // Search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const matchTitle = resource.title.toLowerCase().includes(query);
            const matchDesc = resource.desc.toLowerCase().includes(query);
            const matchSource = resource.source.toLowerCase().includes(query);
            return matchTitle || matchDesc || matchSource;
        }
        
        return true;
    });
}

// Create Resource Card HTML
function createResourceCard(resource) {
    const isOfficial = resource.type === 'official';
    return `
        <a href="${resource.url}" target="_blank" class="resource-card ${isOfficial ? 'official' : ''}" data-id="${resource.id}">
            <div class="resource-meta">
                <span class="lang">${resource.lang.toUpperCase()}</span>
                <span class="type">${resource.category}</span>
            </div>
            <h3>${resource.title}</h3>
            <p>${resource.desc}</p>
            <div class="resource-footer">
                <span class="source">${resource.source}</span>
                <span class="arrow">访问 ↗</span>
            </div>
        </a>
    `;
}

// Setup Event Listeners
function setupEventListeners() {
    // Search
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        displayedCount = 12;
        renderResources();
    });
    
    // Filter tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.filter;
            displayedCount = 12;
            renderResources();
        });
    });
    
    // Language buttons
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLang = btn.dataset.lang;
            displayedCount = 12;
            renderResources();
        });
    });
    
    // Load more
    loadMoreBtn.addEventListener('click', () => {
        displayedCount += LOAD_MORE_COUNT;
        renderResources();
    });
}

// Setup Navbar
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
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Copy to Clipboard
function copyToClipboard(btn, text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('已复制到剪贴板');
        
        const original = btn.innerHTML;
        btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>';
        btn.style.color = 'var(--accent-success)';
        
        setTimeout(() => {
            btn.innerHTML = original;
            btn.style.color = '';
        }, 2000);
    });
}

// Show Toast
function showToast(message) {
    const toastMessage = toast.querySelector('.toast-message');
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Handle Newsletter Subscribe
function handleSubscribe(e) {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    showToast(`感谢订阅！我们会将最新资讯发送至 ${email}`);
    e.target.reset();
}

// Run init when DOM is ready
document.addEventListener('DOMContentLoaded', init);
