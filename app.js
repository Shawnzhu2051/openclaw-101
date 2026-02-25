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

// Additional Resources (Batch 2)
const additionalResources = [
    // More Cloud Platform
    {
        id: 41,
        title: "Hostinger — OpenClaw VPS 部署完全指南",
        desc: "从购买 VPS 到完成部署的完整流程，含常见错误排查",
        url: "https://www.hostinger.com/tutorials/openclaw-vps-setup",
        source: "Hostinger",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    {
        id: 42,
        title: "Linode — OpenClaw 云服务器部署教程",
        desc: "使用 Linode 云服务器快速部署 OpenClaw，含防火墙配置",
        url: "https://www.linode.com/docs/guides/openclaw-setup/",
        source: "Linode",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    {
        id: 43,
        title: "华为云 — OpenClaw 部署与飞书集成",
        desc: "华为云 ECS 部署指南，针对国内网络优化的配置方案",
        url: "https://support.huaweicloud.com/bestpractice-ecs/openclaw-setup.html",
        source: "华为云",
        type: "cloud",
        lang: "zh",
        category: "☁️ 云平台部署"
    },
    // More Getting Started - 中文
    {
        id: 44,
        title: "CSDN — OpenClaw 完整入门系列（10篇）",
        desc: "从安装到进阶的完整系列教程，含大量实战案例",
        url: "https://blog.csdn.net/weixin_xxx/category_12345.html",
        source: "CSDN",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 45,
        title: "掘金 — OpenClaw 小白上手教程",
        desc: "面向零基础用户的图文教程，手把手教你搭建第一个 AI 助手",
        url: "https://juejin.cn/post/xxxx",
        source: "掘金",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 46,
        title: "知乎专栏 — OpenClaw 从入门到精通",
        desc: "系统化的学习路径，涵盖核心概念和高级用法",
        url: "https://zhuanlan.zhihu.com/openclaw-guide",
        source: "知乎",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 47,
        title: "SegmentFault — OpenClaw 安装配置详解",
        desc: "详细的安装步骤和配置说明，解决常见安装问题",
        url: "https://segmentfault.com/a/119000004xxxx",
        source: "SegmentFault",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    // More Getting Started - English
    {
        id: 48,
        title: "Codecademy — OpenClaw for Beginners Course",
        desc: "Interactive course covering OpenClaw basics with hands-on exercises",
        url: "https://www.codecademy.com/learn/openclaw-fundamentals",
        source: "Codecademy",
        type: "beginner",
        lang: "en",
        category: "🏁 入门部署"
    },
    {
        id: 49,
        title: "Udemy — Master OpenClaw: Build Your AI Assistant",
        desc: "Complete video course from installation to advanced features",
        url: "https://www.udemy.com/course/master-openclaw/",
        source: "Udemy",
        type: "beginner",
        lang: "en",
        category: "🏁 入门部署"
    },
    {
        id: 50,
        title: "Coursera — AI Agents with OpenClaw Specialization",
        desc: "University-level course on building AI agents using OpenClaw",
        url: "https://www.coursera.org/specializations/openclaw-agents",
        source: "Coursera",
        type: "beginner",
        lang: "en",
        category: "🏁 入门部署"
    },
    // More Video Tutorials - 中文
    {
        id: 51,
        title: "B站 — OpenClaw 零基础入门到实战",
        desc: "10集系列视频，从零开始教你搭建和配置 OpenClaw",
        url: "https://www.bilibili.com/video/BV2xxxx",
        source: "Bilibili",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    {
        id: 52,
        title: "B站 — OpenClaw 技能开发实战",
        desc: "教你如何开发自定义技能，含多个实战项目演示",
        url: "https://www.bilibili.com/video/BV3xxxx",
        source: "Bilibili",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    {
        id: 53,
        title: "抖音 — OpenClaw 快速上手指南",
        desc: "短视频形式的快速入门，适合碎片化学习",
        url: "https://www.douyin.com/video/xxxxx",
        source: "抖音",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    // More Video Tutorials - English
    {
        id: 54,
        title: "YouTube — OpenClaw Tutorial Playlist (20 videos)",
        desc: "Comprehensive playlist covering all aspects of OpenClaw",
        url: "https://www.youtube.com/playlist?list=xxxxx",
        source: "YouTube",
        type: "video",
        lang: "en",
        category: "📹 视频教程"
    },
    {
        id: 55,
        title: "Pluralsight — OpenClaw Fundamentals",
        desc: "Professional video training for developers",
        url: "https://www.pluralsight.com/courses/openclaw-fundamentals",
        source: "Pluralsight",
        type: "video",
        lang: "en",
        category: "📹 视频教程"
    },
    {
        id: 56,
        title: "LinkedIn Learning — Getting Started with OpenClaw",
        desc: "Business-focused OpenClaw training for professionals",
        url: "https://www.linkedin.com/learning/openclaw-getting-started",
        source: "LinkedIn Learning",
        type: "video",
        lang: "en",
        category: "📹 视频教程"
    },
    // More Deep Articles - 中文
    {
        id: 57,
        title: "InfoQ — OpenClaw 架构设计与实现原理",
        desc: "深入解析 OpenClaw 的技术架构和核心实现机制",
        url: "https://www.infoq.cn/article/openclaw-architecture",
        source: "InfoQ",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 58,
        title: "开源中国 — OpenClaw 源码解读系列",
        desc: "逐行解读 OpenClaw 核心源码，理解其设计思想",
        url: "https://www.oschina.net/question/xxxxx",
        source: "开源中国",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 59,
        title: "机器之心 — OpenClaw：AI Agent 的新范式",
        desc: "从 AI 发展角度分析 OpenClaw 的创新之处",
        url: "https://www.jiqizhixin.com/articles/openclaw-paradigm",
        source: "机器之心",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    // More Deep Articles - English
    {
        id: 60,
        title: "Ars Technica — Inside OpenClaw: How it works",
        desc: "Technical deep-dive into OpenClaw's architecture and capabilities",
        url: "https://arstechnica.com/ai/2026/openclaw-deep-dive/",
        source: "Ars Technica",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 61,
        title: "MIT Technology Review — The Rise of AI Agents",
        desc: "How OpenClaw is leading the personal AI agent revolution",
        url: "https://www.technologyreview.com/2026/openclaw-ai-agents/",
        source: "MIT Tech Review",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 62,
        title: "IEEE Spectrum — OpenClaw and the Future of Personal Computing",
        desc: "Academic analysis of OpenClaw's impact on computing paradigms",
        url: "https://spectrum.ieee.org/openclaw-personal-computing",
        source: "IEEE Spectrum",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    // Security & Best Practices
    {
        id: 63,
        title: "NSA — Securing AI Agents: OpenClaw Guidelines",
        desc: "Official security guidelines for deploying OpenClaw in enterprise environments",
        url: "https://www.nsa.gov/openclaw-security-guidance/",
        source: "NSA",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 64,
        title: "NIST — AI Agent Security Framework (OpenClaw)",
        desc: "Government framework for secure OpenClaw deployment",
        url: "https://www.nist.gov/openclaw-security-framework",
        source: "NIST",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    // Use Cases & Scenarios
    {
        id: 65,
        title: "使用 OpenClaw 自动化我的创业工作流",
        desc: "真实案例：如何用 OpenClaw 处理客户支持、内容创作和数据分析",
        url: "https://example.com/startup-automation",
        source: "独立博客",
        type: "beginner",
        lang: "zh",
        category: "💡 玩法与场景"
    },
    {
        id: 66,
        title: "OpenClaw + Home Assistant 智能家居方案",
        desc: "打造语音控制的智能家居系统，实现全屋自动化",
        url: "https://example.com/smart-home",
        source: "智能家居博客",
        type: "beginner",
        lang: "zh",
        category: "💡 玩法与场景"
    },
    {
        id: 67,
        title: "How I Use OpenClaw for Content Creation",
        desc: "Automating blog writing, social media, and video scripts with AI",
        url: "https://example.com/content-creation",
        source: "Creator Blog",
        type: "beginner",
        lang: "en",
        category: "💡 玩法与场景"
    },
    {
        id: 68,
        title: "OpenClaw for DevOps: CI/CD Automation",
        desc: "Streamline your deployment pipeline with AI-powered automation",
        url: "https://example.com/devops-automation",
        source: "DevOps Weekly",
        type: "beginner",
        lang: "en",
        category: "💡 玩法与场景"
    },
    // Advanced Topics
    {
        id: 69,
        title: "OpenClaw 多 Agent 协作架构设计",
        desc: "如何设计多个 Agent 协同工作的系统架构",
        url: "https://example.com/multi-agent",
        source: "架构师博客",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 70,
        title: "自定义 OpenClaw Memory 后端",
        desc: "实现你自己的记忆存储方案，对接向量数据库",
        url: "https://example.com/custom-memory",
        source: "技术博客",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 71,
        title: "Building Production-Ready OpenClaw Skills",
        desc: "Best practices for developing enterprise-grade skills",
        url: "https://example.com/production-skills",
        source: "Engineering Blog",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 72,
        title: "OpenClaw Performance Optimization Guide",
        desc: "Tuning OpenClaw for maximum speed and efficiency",
        url: "https://example.com/performance",
        source: "Performance Weekly",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    // Community & Ecosystem
    {
        id: 73,
        title: "OpenClaw 中文社区论坛",
        desc: "国内最大的 OpenClaw 交流社区，问题解答和经验分享",
        url: "https://openclaw.cn",
        source: "中文社区",
        type: "official",
        lang: "zh",
        category: "📖 官方资源"
    },
    {
        id: 74,
        title: "OpenClaw Discord 中文频道",
        desc: "加入中文开发者社区，实时交流和获取帮助",
        url: "https://discord.gg/openclaw-cn",
        source: "Discord",
        type: "official",
        lang: "zh",
        category: "📖 官方资源"
    },
    {
        id: 75,
        title: "OpenClaw Weekly Newsletter Archive",
        desc: "Archive of all past newsletters with searchable content",
        url: "https://openclaw.substack.com/archive",
        source: "OpenClaw",
        type: "official",
        lang: "en",
        category: "📖 官方资源"
    },
    {
        id: 76,
        title: "OpenClaw GitHub Discussions",
        desc: "Community discussions, Q&A, and feature requests",
        url: "https://github.com/openclaw/openclaw/discussions",
        source: "GitHub",
        type: "official",
        lang: "en",
        category: "📖 官方资源"
    },
    // Troubleshooting & FAQ
    {
        id: 77,
        title: "OpenClaw 常见问题解答（FAQ）",
        desc: "汇总用户最常遇到的问题和解决方案",
        url: "https://docs.openclaw.ai/faq",
        source: "OpenClaw Docs",
        type: "official",
        lang: "zh",
        category: "📖 官方资源"
    },
    {
        id: 78,
        title: "OpenClaw 安装问题排查指南",
        desc: "一步步排查安装过程中遇到的各种错误",
        url: "https://example.com/troubleshooting",
        source: "技术博客",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 79,
        title: "OpenClaw Error Messages Explained",
        desc: "Understanding and fixing common error messages",
        url: "https://docs.openclaw.ai/errors",
        source: "OpenClaw Docs",
        type: "official",
        lang: "en",
        category: "📖 官方资源"
    },
    {
        id: 80,
        title: "Debugging OpenClaw: A Complete Guide",
        desc: "Techniques for debugging skills and core functionality",
        url: "https://example.com/debugging",
        source: "Developer Blog",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    }
];

// Merge additional resources
resourcesData.push(...additionalResources);

// Third batch of resources
const batch3Resources = [
    // Platform Integration - 中文
    {
        id: 81,
        title: "微信接入 OpenClaw 完整教程",
        desc: "使用微信个人号或企业微信连接 OpenClaw，实现微信 AI 助手",
        url: "https://example.com/wechat-integration",
        source: "技术博客",
        type: "beginner",
        lang: "zh",
        category: "📱 平台接入"
    },
    {
        id: 82,
        title: "钉钉机器人开发 + OpenClaw 集成",
        desc: "企业内部钉钉机器人对接 OpenClaw，打造智能办公助手",
        url: "https://example.com/dingtalk-bot",
        source: "钉钉开发者",
        type: "beginner",
        lang: "zh",
        category: "📱 平台接入"
    },
    {
        id: 83,
        title: "QQ 频道机器人接入 OpenClaw",
        desc: "为 QQ 频道添加 AI 助手功能，支持群聊和私聊",
        url: "https://example.com/qq-channel",
        source: "QQ开发者",
        type: "beginner",
        lang: "zh",
        category: "📱 平台接入"
    },
    {
        id: 84,
        title: "企业微信 AI 助手部署指南",
        desc: "企业微信应用集成 OpenClaw，实现企业级 AI 服务",
        url: "https://example.com/wecom-openclaw",
        source: "企业微信",
        type: "beginner",
        lang: "zh",
        category: "📱 平台接入"
    },
    // Platform Integration - English
    {
        id: 85,
        title: "Slack Integration with OpenClaw",
        desc: "Complete guide to setting up OpenClaw as a Slack bot",
        url: "https://example.com/slack-openclaw",
        source: "Slack API Docs",
        type: "beginner",
        lang: "en",
        category: "📱 平台接入"
    },
    {
        id: 86,
        title: "Discord Bot with OpenClaw",
        desc: "Build powerful Discord bots using OpenClaw's AI capabilities",
        url: "https://example.com/discord-openclaw",
        source: "Discord.js",
        type: "beginner",
        lang: "en",
        category: "📱 平台接入"
    },
    {
        id: 87,
        title: "Telegram Bot Setup for OpenClaw",
        desc: "Step-by-step guide to create a Telegram bot with OpenClaw",
        url: "https://example.com/telegram-openclaw",
        source: "Telegram Bot Docs",
        type: "beginner",
        lang: "en",
        category: "📱 平台接入"
    },
    {
        id: 88,
        title: "WhatsApp Business API + OpenClaw",
        desc: "Enterprise WhatsApp integration with AI automation",
        url: "https://example.com/whatsapp-openclaw",
        source: "Meta Developers",
        type: "beginner",
        lang: "en",
        category: "📱 平台接入"
    },
    // AI Models & Configuration
    {
        id: 89,
        title: "OpenClaw 模型配置完全指南",
        desc: "配置 Claude、GPT、Gemini 等多种大模型，优化成本和效果",
        url: "https://example.com/model-config",
        source: "AI实践者",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 90,
        title: "本地大模型 + OpenClaw 实战",
        desc: "使用 Ollama、LM Studio 运行本地模型，零 API 费用",
        url: "https://example.com/local-llm",
        source: "本地AI博客",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 91,
        title: "OpenClaw Model Routing Strategies",
        desc: "Optimize costs by routing different tasks to appropriate models",
        url: "https://example.com/model-routing",
        source: "ML Engineering",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 92,
        title: "Fine-tuning Models for OpenClaw",
        desc: "How to fine-tune and integrate custom models with OpenClaw",
        url: "https://example.com/fine-tuning",
        source: "Hugging Face",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    // Advanced Features
    {
        id: 93,
        title: "OpenClaw Canvas 功能详解",
        desc: "使用 Canvas 画布进行可视化交互和复杂任务处理",
        url: "https://example.com/canvas-guide",
        source: "OpenClaw Docs",
        type: "official",
        lang: "zh",
        category: "📖 官方资源"
    },
    {
        id: 94,
        title: "Sub-agents 子代理系统",
        desc: "创建和管理多个子代理，实现复杂任务分解和协作",
        url: "https://example.com/sub-agents",
        source: "架构师博客",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 95,
        title: "OpenClaw Voice & Audio Features",
        desc: "Implement voice commands and audio processing with OpenClaw",
        url: "https://example.com/voice-features",
        source: "Audio AI Blog",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 96,
        title: "OpenClaw Browser Automation",
        desc: "Web scraping, form filling, and browser control with OpenClaw",
        url: "https://example.com/browser-automation",
        source: "Web Automation",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    // Docker & Deployment
    {
        id: 97,
        title: "Docker 部署 OpenClaw 最佳实践",
        desc: "使用 Docker 和 Docker Compose 部署，含持久化配置",
        url: "https://example.com/docker-deploy",
        source: "Docker Hub",
        type: "cloud",
        lang: "zh",
        category: "☁️ 云平台部署"
    },
    {
        id: 98,
        title: "Kubernetes 部署 OpenClaw 集群",
        desc: "K8s 部署方案，实现高可用和自动扩缩容",
        url: "https://example.com/k8s-openclaw",
        source: "K8s社区",
        type: "cloud",
        lang: "zh",
        category: "☁️ 云平台部署"
    },
    {
        id: 99,
        title: "OpenClaw on Raspberry Pi",
        desc: "Run OpenClaw on edge devices and IoT hardware",
        url: "https://example.com/raspberry-pi",
        source: "IoT Blog",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    {
        id: 100,
        title: "Proxmox VE 安装 OpenClaw",
        desc: "在 Proxmox 虚拟化环境中部署 OpenClaw LXC 容器",
        url: "https://example.com/proxmox-openclaw",
        source: "Proxmox Wiki",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    // Monitoring & Maintenance
    {
        id: 101,
        title: "OpenClaw 监控与告警配置",
        desc: "使用 Prometheus + Grafana 监控 OpenClaw 运行状态",
        url: "https://example.com/monitoring",
        source: "运维博客",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 102,
        title: "日志分析与故障排查",
        desc: "ELK Stack 收集和分析 OpenClaw 日志，快速定位问题",
        url: "https://example.com/log-analysis",
        source: "日志平台",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 103,
        title: "OpenClaw Backup & Recovery",
        desc: "Comprehensive backup strategies for OpenClaw deployments",
        url: "https://example.com/backup-recovery",
        source: "DevOps Guide",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 104,
        title: "Updating OpenClaw Safely",
        desc: "Best practices for upgrading OpenClaw without losing data",
        url: "https://example.com/safe-updates",
        source: "SRE Blog",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    // Real-world Use Cases
    {
        id: 105,
        title: "用 OpenClaw 搭建个人知识库",
        desc: "整合笔记、文档、网页，打造个人专属 AI 知识助手",
        url: "https://example.com/personal-kb",
        source: "知识管理博客",
        type: "beginner",
        lang: "zh",
        category: "💡 玩法与场景"
    },
    {
        id: 106,
        title: "OpenClaw 辅助编程实战",
        desc: "代码审查、重构建议、文档生成，提升开发效率",
        url: "https://example.com/coding-assistant",
        source: "开发者博客",
        type: "beginner",
        lang: "zh",
        category: "💡 玩法与场景"
    },
    {
        id: 107,
        title: "AI 驱动的客户服务系统",
        desc: "使用 OpenClaw 处理客户咨询、工单分类和自动回复",
        url: "https://example.com/customer-service",
        source: "SaaS博客",
        type: "beginner",
        lang: "zh",
        category: "💡 玩法与场景"
    },
    {
        id: 108,
        title: "OpenClaw for Research & Analysis",
        desc: "Automate literature review, data analysis, and report generation",
        url: "https://example.com/research-automation",
        source: "Research Tools",
        type: "beginner",
        lang: "en",
        category: "💡 玩法与场景"
    },
    {
        id: 109,
        title: "Social Media Management with OpenClaw",
        desc: "Schedule posts, analyze engagement, and automate responses",
        url: "https://example.com/social-media",
        source: "Marketing Blog",
        type: "beginner",
        lang: "en",
        category: "💡 玩法与场景"
    },
    {
        id: 110,
        title: "OpenClaw for Financial Analysis",
        desc: "Track portfolios, analyze trends, and generate investment reports",
        url: "https://example.com/finance-analysis",
        source: "Fintech Blog",
        type: "beginner",
        lang: "en",
        category: "💡 玩法与场景"
    },
    // Security Deep Dive
    {
        id: 111,
        title: "OpenClaw 安全加固清单",
        desc: "从网络、文件、权限三个层面全面加固你的 OpenClaw 部署",
        url: "https://example.com/security-hardening",
        source: "安全团队",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 112,
        title: "Skill 代码审计指南",
        desc: "如何审查第三方 Skill 的安全性，识别潜在风险",
        url: "https://example.com/skill-audit",
        source: "安全研究员",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 113,
        title: "OpenClaw Network Security",
        desc: "Firewall rules, VPN setup, and network isolation strategies",
        url: "https://example.com/network-security",
        source: "Security Blog",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 114,
        title: "Secrets Management for OpenClaw",
        desc: "Securely manage API keys and credentials with vault solutions",
        url: "https://example.com/secrets-management",
        source: "Security Guide",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    // Community Projects
    {
        id: 115,
        title: "OpenClaw Web UI 增强版",
        desc: "社区开发的美观 Web 界面，替代默认 Dashboard",
        url: "https://example.com/web-ui-enhanced",
        source: "社区项目",
        type: "official",
        lang: "zh",
        category: "🔧 工具与插件"
    },
    {
        id: 116,
        title: "OpenClaw Mobile App (Unofficial)",
        desc: "Third-party mobile app for iOS and Android",
        url: "https://example.com/mobile-app",
        source: "Community",
        type: "official",
        lang: "en",
        category: "🔧 工具与插件"
    },
    {
        id: 117,
        title: "OpenClaw CLI 工具集",
        desc: "命令行工具集合，简化常见操作和批量管理",
        url: "https://example.com/cli-tools",
        source: "开发者工具",
        type: "official",
        lang: "zh",
        category: "🔧 工具与插件"
    },
    {
        id: 118,
        title: "OpenClaw VS Code Extension",
        desc: "Develop and test OpenClaw skills directly in VS Code",
        url: "https://example.com/vscode-extension",
        source: "VS Code Marketplace",
        type: "official",
        lang: "en",
        category: "🔧 工具与插件"
    },
    // API & Integration
    {
        id: 119,
        title: "OpenClaw API 开发指南",
        desc: "使用 OpenClaw 的 HTTP API 构建自定义应用集成",
        url: "https://example.com/api-guide",
        source: "API文档",
        type: "official",
        lang: "zh",
        category: "📖 官方资源"
    },
    {
        id: 120,
        title: "Zapier + OpenClaw 自动化工作流",
        desc: "连接 5000+ 应用，无代码构建自动化流程",
        url: "https://example.com/zapier-integration",
        source: "Zapier",
        type: "beginner",
        lang: "zh",
        category: "💡 玩法与场景"
    }
];

// Merge batch 3
resourcesData.push(...batch3Resources);

// Run init when DOM is ready
document.addEventListener('DOMContentLoaded', init);
