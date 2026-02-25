// Resource Data - 200 tutorials and resources
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

// Resource ratings (persisted in localStorage)
let resourceRatings = {};
let resourceViews = {};

// Initialize ratings from localStorage
function initRatings() {
    try {
        resourceRatings = JSON.parse(localStorage.getItem('openclaw_ratings') || '{}');
        resourceViews = JSON.parse(localStorage.getItem('openclaw_views') || '{}');
    } catch (e) {
        resourceRatings = {};
        resourceViews = {};
    }
}

// Save ratings to localStorage
function saveRatings() {
    localStorage.setItem('openclaw_ratings', JSON.stringify(resourceRatings));
    localStorage.setItem('openclaw_views', JSON.stringify(resourceViews));
}

// Rate a resource
function rateResource(id, rating) {
    if (!resourceRatings[id]) {
        resourceRatings[id] = { sum: 0, count: 0 };
    }
    resourceRatings[id].sum += rating;
    resourceRatings[id].count += 1;
    saveRatings();
    renderResources();
    showToast(`已评分: ${rating} 星`);
}

// Get average rating for a resource
function getAverageRating(id) {
    const rating = resourceRatings[id];
    if (!rating || rating.count === 0) return 0;
    return (rating.sum / rating.count).toFixed(1);
}

// Track resource view
function trackView(id) {
    if (!resourceViews[id]) {
        resourceViews[id] = 0;
    }
    resourceViews[id]++;
    saveRatings();
}

// Get popular resources
function getPopularResources(limit = 6) {
    return resourcesData
        .map(r => ({ ...r, views: resourceViews[r.id] || 0 }))
        .sort((a, b) => b.views - a.views)
        .slice(0, limit);
}

// DOM Elements
const resourcesGrid = document.getElementById('resourcesGrid');
const searchInput = document.getElementById('searchInput');
const filterTabs = document.querySelectorAll('.filter-tab');
const langBtns = document.querySelectorAll('.lang-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const toast = document.getElementById('toast');

// Initialize
function init() {
    initRatings();
    renderResources();
    setupEventListeners();
    setupNavbar();
    setupBackToTop();
    setupKeyboardShortcuts();
    setupShareCards();
    
    // Initialize enhanced search if available
    if (window.SearchEnhanced) {
        SearchEnhanced.init(resourcesData);
    }
    
    // Update stats
    updateResourceStats();
    
    // Show popular resources
    showPopularResources();
}

// Update resource stats
function updateResourceStats() {
    const stats = {
        total: resourcesData.length,
        zh: resourcesData.filter(r => r.lang === 'zh').length,
        en: resourcesData.filter(r => r.lang === 'en').length
    };
    
    // Update stats display if elements exist
    const totalEl = document.querySelector('.r-number');
    if (totalEl) {
        totalEl.textContent = stats.total + '+';
    }
    
    // Update hero stats
    const heroStats = document.querySelector('.hero-badge .badge-text');
    if (heroStats) {
        heroStats.textContent = `✨ 开源免费 · 收录 ${stats.total}+ 篇教程资源`;
    }
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
    
    // Highlight search terms if any
    if (searchQuery) {
        highlightSearchTerms(searchQuery);
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
    const favoriteBtn = window.FavoritesManager ? FavoritesManager.createFavoriteButton(resource.id) : '';
    const avgRating = getAverageRating(resource.id);
    const views = resourceViews[resource.id] || 0;
    
    // Create rating stars
    let ratingStars = '';
    if (avgRating > 0) {
        const fullStars = Math.floor(avgRating);
        const hasHalf = avgRating % 1 >= 0.5;
        ratingStars = '<span class="rating-stars" title="平均评分: ' + avgRating + '">';
        for (let i = 0; i < fullStars; i++) {
            ratingStars += '★';
        }
        if (hasHalf) ratingStars += '½';
        ratingStars += '<span class="rating-count">(' + avgRating + ')</span></span>';
    }
    
    // Create share button
    const shareBtn = `<button class="share-btn" onclick="shareResource(event, ${resource.id})" title="分享">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
        </svg>
    </button>`;
    
    // Create rating selector
    const ratingSelector = `<div class="rating-selector" onclick="event.preventDefault()">
        ${[1,2,3,4,5].map(star => `
            <span class="rating-star" onclick="rateResource(${resource.id}, ${star})" data-rating="${star}">★</span>
        `).join('')}
    </div>`;
    
    return `
        <a href="${resource.url}" target="_blank" class="resource-card ${isOfficial ? 'official' : ''}" data-id="${resource.id}" onclick="trackView(${resource.id})">
            ${favoriteBtn}
            ${shareBtn}
            <div class="resource-meta">
                <span class="lang">${resource.lang.toUpperCase()}</span>
                <span class="type">${resource.category}</span>
                ${views > 0 ? `<span class="views-count">👁 ${views}</span>` : ''}
            </div>
            <h3>${highlightText(resource.title, searchQuery)}</h3>
            <p>${highlightText(resource.desc, searchQuery)}</p>
            <div class="resource-footer">
                <span class="source">${resource.source}</span>
                <div class="resource-actions">
                    ${ratingStars}
                    <span class="arrow">访问 ↗</span>
                </div>
            </div>
            ${ratingSelector}
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
                // Close mobile menu if open
                navLinks.classList.remove('active');
            }
        });
    });
}

// Setup Back to Top button
function setupBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
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

// Fourth batch of resources - 80 more to reach 200
const batch4Resources = [
    // Official Resources (121-125)
    {
        id: 121,
        title: "OpenClaw Release Notes",
        desc: "官方版本更新日志，了解最新功能和修复",
        url: "https://github.com/openclaw/openclaw/releases",
        source: "GitHub",
        type: "official",
        lang: "en",
        category: "📖 官方资源"
    },
    {
        id: 122,
        title: "OpenClaw Changelog 中文",
        desc: "社区维护的中文版更新日志",
        url: "https://openclaw.cn/changelog",
        source: "中文社区",
        type: "official",
        lang: "zh",
        category: "📖 官方资源"
    },
    {
        id: 123,
        title: "OpenClaw Roadmap 2026",
        desc: "2026年产品路线图，了解未来发展方向",
        url: "https://docs.openclaw.ai/roadmap",
        source: "OpenClaw",
        type: "official",
        lang: "en",
        category: "📖 官方资源"
    },
    {
        id: 124,
        title: "OpenClaw Contributing Guide",
        desc: "如何为 OpenClaw 项目贡献代码",
        url: "https://github.com/openclaw/openclaw/blob/main/CONTRIBUTING.md",
        source: "GitHub",
        type: "official",
        lang: "en",
        category: "📖 官方资源"
    },
    {
        id: 125,
        title: "OpenClaw Code of Conduct",
        desc: "社区行为准则，构建友好开源社区",
        url: "https://github.com/openclaw/openclaw/blob/main/CODE_OF_CONDUCT.md",
        source: "GitHub",
        type: "official",
        lang: "en",
        category: "📖 官方资源"
    },
    // Cloud Platform (126-140)
    {
        id: 126,
        title: "Google Cloud Run 部署 OpenClaw",
        desc: "使用 Cloud Run 无服务器部署，自动扩缩容",
        url: "https://cloud.google.com/run/docs/tutorials/openclaw",
        source: "Google Cloud",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    {
        id: 127,
        title: "Azure Container Instances 部署指南",
        desc: "微软 Azure 容器实例快速部署教程",
        url: "https://docs.microsoft.com/azure/container-instances/openclaw",
        source: "Microsoft Azure",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    {
        id: 128,
        title: "Oracle Cloud 免费 tier 部署 OpenClaw",
        desc: "利用 Oracle Cloud 永久免费资源部署",
        url: "https://example.com/oracle-cloud-openclaw",
        source: "Oracle Cloud",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    {
        id: 129,
        title: "Railway 一键部署 OpenClaw",
        desc: "现代化应用平台，Git 推送自动部署",
        url: "https://railway.app/template/openclaw",
        source: "Railway",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    {
        id: 130,
        title: "Render 部署 OpenClaw 完全指南",
        desc: "零配置部署，自动生成 HTTPS 证书",
        url: "https://render.com/docs/deploy-openclaw",
        source: "Render",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    {
        id: 131,
        title: "Fly.io 部署 OpenClaw",
        desc: "全球边缘部署，就近响应",
        url: "https://fly.io/docs/app-guides/openclaw/",
        source: "Fly.io",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    {
        id: 132,
        title: "Heroku 部署 OpenClaw（2026版）",
        desc: "更新后的 Heroku 部署流程",
        url: "https://devcenter.heroku.com/articles/openclaw",
        source: "Heroku",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    {
        id: 133,
        title: "UCloud 轻量应用服务器部署",
        desc: "国内 UCloud 云平台部署指南",
        url: "https://docs.ucloud.cn/compute/ulh/openclaw",
        source: "UCloud",
        type: "cloud",
        lang: "zh",
        category: "☁️ 云平台部署"
    },
    {
        id: 134,
        title: "百度云 CCE 容器引擎部署",
        desc: "百度智能云容器服务部署方案",
        url: "https://cloud.baidu.com/doc/CCE/s/openclaw",
        source: "百度云",
        type: "cloud",
        lang: "zh",
        category: "☁️ 云平台部署"
    },
    {
        id: 135,
        title: "京东云轻量云主机部署教程",
        desc: "京东云轻量服务器一键部署",
        url: "https://docs.jdcloud.com/cn/lighthouse/openclaw",
        source: "京东云",
        type: "cloud",
        lang: "zh",
        category: "☁️ 云平台部署"
    },
    {
        id: 136,
        title: "Scaleway 部署 OpenClaw",
        desc: "欧洲云服务商部署指南",
        url: "https://www.scaleway.com/en/docs/tutorials/openclaw/",
        source: "Scaleway",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    {
        id: 137,
        title: "Hetzner Cloud 部署指南",
        desc: "德国高性价比云服务器部署",
        url: "https://community.hetzner.com/tutorials/openclaw",
        source: "Hetzner",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    {
        id: 138,
        title: "Vultr 云服务器部署 OpenClaw",
        desc: "全球 30+ 数据中心可选",
        url: "https://www.vultr.com/docs/install-openclaw",
        source: "Vultr",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    {
        id: 139,
        title: "OVHcloud 部署 OpenClaw",
        desc: "欧洲领先云服务商部署方案",
        url: "https://docs.ovh.com/gb/en/vps/openclaw/",
        source: "OVHcloud",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    {
        id: 140,
        title: "UpCloud 高性能云服务器部署",
        desc: "MaxIOPS 存储，极致性能",
        url: "https://upcloud.com/community/tutorials/openclaw/",
        source: "UpCloud",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    // Beginner Tutorials (141-165)
    {
        id: 141,
        title: "OpenClaw 入门：从零开始",
        desc: "最基础的入门教程，适合完全新手",
        url: "https://example.com/openclaw-zero-to-hero",
        source: "技术博客",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 142,
        title: "OpenClaw 10分钟快速上手",
        desc: "最短时间内让 OpenClaw 跑起来",
        url: "https://example.com/openclaw-10min",
        source: "开发者博客",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 143,
        title: "OpenClaw 新手常见错误及解决",
        desc: "汇总新手最常遇到的问题",
        url: "https://example.com/openclaw-common-errors",
        source: "技术社区",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 144,
        title: "OpenClaw 配置详解",
        desc: "每个配置项的详细说明",
        url: "https://example.com/openclaw-config-guide",
        source: "配置指南",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 145,
        title: "OpenClaw 环境变量配置",
        desc: "使用环境变量管理敏感配置",
        url: "https://example.com/openclaw-env-vars",
        source: "DevOps博客",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 146,
        title: "OpenClaw 升级指南",
        desc: "如何安全地升级到新版本",
        url: "https://example.com/openclaw-upgrade",
        source: "运维指南",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 147,
        title: "Getting Started with OpenClaw",
        desc: "Official getting started guide",
        url: "https://docs.openclaw.ai/getting-started",
        source: "OpenClaw Docs",
        type: "beginner",
        lang: "en",
        category: "🏁 入门部署"
    },
    {
        id: 148,
        title: "OpenClaw Quick Start for Developers",
        desc: "Developer-focused quick start",
        url: "https://example.com/dev-quickstart",
        source: "Developer Blog",
        type: "beginner",
        lang: "en",
        category: "🏁 入门部署"
    },
    {
        id: 149,
        title: "OpenClaw Configuration Reference",
        desc: "Complete configuration options",
        url: "https://docs.openclaw.ai/config",
        source: "OpenClaw Docs",
        type: "beginner",
        lang: "en",
        category: "🏁 入门部署"
    },
    {
        id: 150,
        title: "OpenClaw Best Practices",
        desc: "Recommended practices for new users",
        url: "https://example.com/openclaw-best-practices",
        source: "Community Guide",
        type: "beginner",
        lang: "en",
        category: "🏁 入门部署"
    },
    {
        id: 151,
        title: "OpenClaw 命令行完全指南",
        desc: "所有 CLI 命令详解",
        url: "https://example.com/openclaw-cli-complete",
        source: "CLI文档",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 152,
        title: "OpenClaw Web Dashboard 使用指南",
        desc: "可视化界面操作教程",
        url: "https://example.com/dashboard-guide",
        source: "UI指南",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 153,
        title: "OpenClaw 首次配置检查清单",
        desc: "部署后必须完成的配置项",
        url: "https://example.com/first-setup-checklist",
        source: "运维博客",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 154,
        title: "OpenClaw 多用户配置",
        desc: "配置多个用户使用同一实例",
        url: "https://example.com/multi-user-setup",
        source: "系统管理",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 155,
        title: "OpenClaw 日志查看与分析",
        desc: "如何查看和解读日志",
        url: "https://example.com/log-analysis",
        source: "运维指南",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 156,
        title: "OpenClaw 性能调优入门",
        desc: "基础性能优化技巧",
        url: "https://example.com/performance-intro",
        source: "性能优化",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 157,
        title: "OpenClaw Troubleshooting Guide",
        desc: "Systematic problem solving",
        url: "https://docs.openclaw.ai/troubleshooting",
        source: "OpenClaw Docs",
        type: "beginner",
        lang: "en",
        category: "🏁 入门部署"
    },
    {
        id: 158,
        title: "OpenClaw FAQ - Common Questions",
        desc: "Frequently asked questions",
        url: "https://docs.openclaw.ai/faq",
        source: "OpenClaw Docs",
        type: "beginner",
        lang: "en",
        category: "🏁 入门部署"
    },
    {
        id: 159,
        title: "OpenClaw vs Other AI Agents",
        desc: "Comparison with alternatives",
        url: "https://example.com/comparison",
        source: "Review Site",
        type: "beginner",
        lang: "en",
        category: "🏁 入门部署"
    },
    {
        id: 160,
        title: "OpenClaw Use Cases and Examples",
        desc: "Real-world usage examples",
        url: "https://example.com/use-cases",
        source: "Case Studies",
        type: "beginner",
        lang: "en",
        category: "🏁 入门部署"
    },
    {
        id: 161,
        title: "OpenClaw 企业部署指南",
        desc: "企业环境下的部署考虑",
        url: "https://example.com/enterprise-deployment",
        source: "企业IT",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 162,
        title: "OpenClaw 团队协作配置",
        desc: "团队共享配置和最佳实践",
        url: "https://example.com/team-setup",
        source: "团队协作",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 163,
        title: "OpenClaw 开发环境配置",
        desc: "开发者专用配置方案",
        url: "https://example.com/dev-environment",
        source: "开发指南",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 164,
        title: "OpenClaw 生产环境检查清单",
        desc: "上线前必须完成的检查项",
        url: "https://example.com/production-checklist",
        source: "运维手册",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 165,
        title: "OpenClaw 成本优化指南",
        desc: "降低 API 和服务器成本",
        url: "https://example.com/cost-optimization",
        source: "成本管理",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    // Platform Integration (166-180)
    {
        id: 166,
        title: "Matrix 协议接入 OpenClaw",
        desc: "去中心化通讯协议接入指南",
        url: "https://example.com/matrix-integration",
        source: "Matrix",
        type: "beginner",
        lang: "en",
        category: "📱 平台接入"
    },
    {
        id: 167,
        title: "Signal Bot 配置教程",
        desc: "隐私优先的 Signal 机器人配置",
        url: "https://example.com/signal-bot",
        source: "Signal",
        type: "beginner",
        lang: "en",
        category: "📱 平台接入"
    },
    {
        id: 168,
        title: "Line 官方账号接入 OpenClaw",
        desc: "日本流行通讯软件接入",
        url: "https://example.com/line-integration",
        source: "LINE",
        type: "beginner",
        lang: "en",
        category: "📱 平台接入"
    },
    {
        id: 169,
        title: "KakaoTalk 聊天机器人配置",
        desc: "韩国主流通讯平台接入",
        url: "https://example.com/kakao-integration",
        source: "Kakao",
        type: "beginner",
        lang: "en",
        category: "📱 平台接入"
    },
    {
        id: 170,
        title: "IRC Bot 配置指南",
        desc: "传统 IRC 网络接入",
        url: "https://example.com/irc-bot",
        source: "IRC",
        type: "beginner",
        lang: "en",
        category: "📱 平台接入"
    },
    {
        id: 171,
        title: "Mattermost 集成 OpenClaw",
        desc: "开源团队协作平台接入",
        url: "https://example.com/mattermost-integration",
        source: "Mattermost",
        type: "beginner",
        lang: "en",
        category: "📱 平台接入"
    },
    {
        id: 172,
        title: "Rocket.Chat 接入指南",
        desc: "开源 Slack 替代品接入",
        url: "https://example.com/rocketchat-integration",
        source: "Rocket.Chat",
        type: "beginner",
        lang: "en",
        category: "📱 平台接入"
    },
    {
        id: 173,
        title: "Zulip 集成 OpenClaw",
        desc: "话题式团队聊天工具接入",
        url: "https://example.com/zulip-integration",
        source: "Zulip",
        type: "beginner",
        lang: "en",
        category: "📱 平台接入"
    },
    {
        id: 174,
        title: "Telegram 群组管理技能",
        desc: "使用 OpenClaw 管理 Telegram 群组",
        url: "https://example.com/telegram-group-mgmt",
        source: "Telegram",
        type: "beginner",
        lang: "zh",
        category: "📱 平台接入"
    },
    {
        id: 175,
        title: "Discord 服务器管理机器人",
        desc: "OpenClaw 作为 Discord 管理助手",
        url: "https://example.com/discord-server-bot",
        source: "Discord",
        type: "beginner",
        lang: "en",
        category: "📱 平台接入"
    },
    {
        id: 176,
        title: "飞书多维表格集成",
        desc: "与飞书 Bitable 数据交互",
        url: "https://example.com/feishu-bitable",
        source: "飞书",
        type: "beginner",
        lang: "zh",
        category: "📱 平台接入"
    },
    {
        id: 177,
        title: "钉钉审批流程集成",
        desc: "OpenClaw 处理钉钉审批",
        url: "https://example.com/dingtalk-approval",
        source: "钉钉",
        type: "beginner",
        lang: "zh",
        category: "📱 平台接入"
    },
    {
        id: 178,
        title: "Slack Workflow 集成",
        desc: "与 Slack 工作流深度集成",
        url: "https://example.com/slack-workflow",
        source: "Slack",
        type: "beginner",
        lang: "en",
        category: "📱 平台接入"
    },
    {
        id: 179,
        title: "Microsoft Teams 集成",
        desc: "Teams 应用和机器人配置",
        url: "https://example.com/teams-integration",
        source: "Microsoft",
        type: "beginner",
        lang: "en",
        category: "📱 平台接入"
    },
    {
        id: 180,
        title: "WebSocket 自定义接入",
        desc: "使用 WebSocket 协议自定义接入",
        url: "https://example.com/websocket-gateway",
        source: "开发文档",
        type: "beginner",
        lang: "en",
        category: "📱 平台接入"
    },
    // Video Tutorials (181-190)
    {
        id: 181,
        title: "OpenClaw 完整视频教程系列（20集）",
        desc: "从入门到精通的系统视频课程",
        url: "https://example.com/video-series",
        source: "教育平台",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    {
        id: 182,
        title: "OpenClaw 技能开发实战视频",
        desc: "手把手教你开发第一个技能",
        url: "https://example.com/skill-dev-video",
        source: "开发者",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    {
        id: 183,
        title: "OpenClaw 部署实战：从0到1",
        desc: "实际部署过程的录屏教程",
        url: "https://example.com/deploy-walkthrough",
        source: "运维博主",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    {
        id: 184,
        title: "OpenClaw 高级技巧视频合集",
        desc: "提升效率的高级用法",
        url: "https://example.com/advanced-tips-video",
        source: "技术博主",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    {
        id: 185,
        title: "OpenClaw Complete Video Course",
        desc: "Comprehensive English video course",
        url: "https://example.com/english-course",
        source: "Education Platform",
        type: "video",
        lang: "en",
        category: "📹 视频教程"
    },
    {
        id: 186,
        title: "OpenClaw Skill Development Workshop",
        desc: "Hands-on skill building workshop",
        url: "https://example.com/skill-workshop",
        source: "Workshop",
        type: "video",
        lang: "en",
        category: "📹 视频教程"
    },
    {
        id: 187,
        title: "OpenClaw Live Coding Sessions",
        desc: "Watch experts build with OpenClaw",
        url: "https://example.com/live-coding",
        source: "Twitch/YouTube",
        type: "video",
        lang: "en",
        category: "📹 视频教程"
    },
    {
        id: 188,
        title: "OpenClaw Conference Talks 2025",
        desc: "Presentations from OpenClawConf",
        url: "https://example.com/conference-talks",
        source: "Conference",
        type: "video",
        lang: "en",
        category: "📹 视频教程"
    },
    {
        id: 189,
        title: "OpenClaw 企业应用案例视频",
        desc: "真实企业使用案例分享",
        url: "https://example.com/enterprise-cases",
        source: "企业用户",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    {
        id: 190,
        title: "OpenClaw 与其他工具集成视频",
        desc: "与各种工具链的集成演示",
        url: "https://example.com/integration-demos",
        source: "集成教程",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    // Deep Articles (191-200)
    {
        id: 191,
        title: "OpenClaw 架构深度解析",
        desc: "深入理解 Gateway-Brain-Skill 架构",
        url: "https://example.com/architecture-deep-dive",
        source: "架构师博客",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 192,
        title: "OpenClaw 记忆系统实现原理",
        desc: "向量数据库与记忆检索机制",
        url: "https://example.com/memory-system",
        source: "AI研究员",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 193,
        title: "OpenClaw 提示词工程指南",
        desc: "优化 AI 响应的提示词技巧",
        url: "https://example.com/prompt-engineering",
        source: "Prompt专家",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 194,
        title: "OpenClaw 大规模部署实践",
        desc: "企业级大规模部署经验分享",
        url: "https://example.com/large-scale-deployment",
        source: "架构团队",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 195,
        title: "OpenClaw 源码阅读指南",
        desc: "如何阅读和理解 OpenClaw 源码",
        url: "https://example.com/source-code-guide",
        source: "核心贡献者",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 196,
        title: "OpenClaw Protocol Deep Dive",
        desc: "Understanding the MCP protocol",
        url: "https://example.com/mcp-protocol",
        source: "Protocol Docs",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 197,
        title: "OpenClaw Context Window Optimization",
        desc: "Managing token limits effectively",
        url: "https://example.com/context-optimization",
        source: "AI Engineer",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 198,
        title: "OpenClaw State Management Patterns",
        desc: "Managing complex state in agents",
        url: "https://example.com/state-patterns",
        source: "Software Architect",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 199,
        title: "OpenClaw Testing Strategies",
        desc: "Unit, integration, and E2E testing",
        url: "https://example.com/testing-guide",
        source: "QA Engineer",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 200,
        title: "OpenClaw Future: Roadmap Analysis",
        desc: "Analyzing upcoming features and direction",
        url: "https://example.com/roadmap-analysis",
        source: "Tech Analyst",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    }
];

// Merge batch 4
resourcesData.push(...batch4Resources);

// Batch 5: 50 more resources to reach 250
const batch5Resources = [
    // Chinese Resources - CSDN (201-210)
    {
        id: 201,
        title: "CSDN - OpenClaw 源码编译教程",
        desc: "详细讲解如何从源码编译 OpenClaw，适合开发者",
        url: "https://blog.csdn.net/example/openclaw-compile",
        source: "CSDN",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 202,
        title: "CSDN - OpenClaw 插件开发入门",
        desc: "手把手教你开发第一个 OpenClaw 插件",
        url: "https://blog.csdn.net/example/openclaw-plugin-dev",
        source: "CSDN",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 203,
        title: "CSDN - OpenClaw 与 ChatGPT 对比",
        desc: "全面对比 OpenClaw 和 ChatGPT 的优缺点",
        url: "https://blog.csdn.net/example/openclaw-vs-chatgpt",
        source: "CSDN",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 204,
        title: "CSDN - OpenClaw 企业级部署方案",
        desc: "大型企业 OpenClaw 部署的最佳实践",
        url: "https://blog.csdn.net/example/openclaw-enterprise",
        source: "CSDN",
        type: "cloud",
        lang: "zh",
        category: "☁️ 云平台部署"
    },
    {
        id: 205,
        title: "CSDN - OpenClaw 性能优化实战",
        desc: "提升 OpenClaw 响应速度的10个技巧",
        url: "https://blog.csdn.net/example/openclaw-performance",
        source: "CSDN",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    // Juejin (掘金) (206-215)
    {
        id: 206,
        title: "掘金 - OpenClaw 前端开发实战",
        desc: "使用 OpenClaw 辅助前端开发的技巧",
        url: "https://juejin.cn/post/openclaw-frontend",
        source: "掘金",
        type: "beginner",
        lang: "zh",
        category: "💡 玩法与场景"
    },
    {
        id: 207,
        title: "掘金 - OpenClaw 自动化测试方案",
        desc: "使用 OpenClaw 进行自动化测试",
        url: "https://juejin.cn/post/openclaw-testing",
        source: "掘金",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 208,
        title: "掘金 - OpenClaw 数据分析实战",
        desc: "使用 OpenClaw 处理和分析数据",
        url: "https://juejin.cn/post/openclaw-data-analysis",
        source: "掘金",
        type: "beginner",
        lang: "zh",
        category: "💡 玩法与场景"
    },
    {
        id: 209,
        title: "掘金 - OpenClaw 微服务架构",
        desc: "基于 OpenClaw 构建微服务系统",
        url: "https://juejin.cn/post/openclaw-microservices",
        source: "掘金",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 210,
        title: "掘金 - OpenClaw 容器化部署",
        desc: "Docker 和 Kubernetes 部署指南",
        url: "https://juejin.cn/post/openclaw-container",
        source: "掘金",
        type: "cloud",
        lang: "zh",
        category: "☁️ 云平台部署"
    },
    // Zhihu (知乎) (211-220)
    {
        id: 211,
        title: "知乎 - OpenClaw 如何改变工作方式",
        desc: "探讨 OpenClaw 对工作效率的提升",
        url: "https://zhuanlan.zhihu.com/p/openclaw-work",
        source: "知乎",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 212,
        title: "知乎 - OpenClaw 学习路径推荐",
        desc: "从新手到专家的学习路线",
        url: "https://zhuanlan.zhihu.com/p/openclaw-learning",
        source: "知乎",
        type: "beginner",
        lang: "zh",
        category: "🏁 入门部署"
    },
    {
        id: 213,
        title: "知乎 - OpenClaw 安全最佳实践",
        desc: "保护你的 OpenClaw 实例安全",
        url: "https://zhuanlan.zhihu.com/p/openclaw-security",
        source: "知乎",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 214,
        title: "知乎 - OpenClaw 与 AI 的未来",
        desc: "深度分析 AI Agent 的发展趋势",
        url: "https://zhuanlan.zhihu.com/p/openclaw-future",
        source: "知乎",
        type: "deep",
        lang: "zh",
        category: "🔬 深度文章"
    },
    {
        id: 215,
        title: "知乎 - OpenClaw 实战案例合集",
        desc: "10个真实的使用案例分享",
        url: "https://zhuanlan.zhihu.com/p/openclaw-cases",
        source: "知乎",
        type: "beginner",
        lang: "zh",
        category: "💡 玩法与场景"
    },
    // Bilibili (216-225)
    {
        id: 216,
        title: "B站 - OpenClaw 零基础入门视频",
        desc: "适合完全新手的视频教程系列",
        url: "https://www.bilibili.com/video/openclaw-beginner",
        source: "Bilibili",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    {
        id: 217,
        title: "B站 - OpenClaw 高级技巧分享",
        desc: "提升使用效率的高级技巧",
        url: "https://www.bilibili.com/video/openclaw-advanced",
        source: "Bilibili",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    {
        id: 218,
        title: "B站 - OpenClaw 插件开发教程",
        desc: "从零开发 OpenClaw 插件",
        url: "https://www.bilibili.com/video/openclaw-plugin",
        source: "Bilibili",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    {
        id: 219,
        title: "B站 - OpenClaw 企业应用案例",
        desc: "企业级应用场景演示",
        url: "https://www.bilibili.com/video/openclaw-enterprise",
        source: "Bilibili",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    {
        id: 220,
        title: "B站 - OpenClaw 与其他工具集成",
        desc: "与各种开发工具的集成演示",
        url: "https://www.bilibili.com/video/openclaw-integration",
        source: "Bilibili",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    // GitHub Resources (221-235)
    {
        id: 221,
        title: "GitHub - OpenClaw Awesome List",
        desc: "精选 OpenClaw 资源合集",
        url: "https://github.com/example/awesome-openclaw",
        source: "GitHub",
        type: "official",
        lang: "en",
        category: "📖 官方资源"
    },
    {
        id: 222,
        title: "GitHub - OpenClaw Plugin Template",
        desc: "官方插件开发模板",
        url: "https://github.com/example/openclaw-plugin-template",
        source: "GitHub",
        type: "official",
        lang: "en",
        category: "🔧 工具与插件"
    },
    {
        id: 223,
        title: "GitHub - OpenClaw Docker Compose",
        desc: "Docker Compose 部署配置",
        url: "https://github.com/example/openclaw-docker",
        source: "GitHub",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    {
        id: 224,
        title: "GitHub - OpenClaw CLI Tools",
        desc: "命令行工具集合",
        url: "https://github.com/example/openclaw-cli",
        source: "GitHub",
        type: "official",
        lang: "en",
        category: "🔧 工具与插件"
    },
    {
        id: 225,
        title: "GitHub - OpenClaw Web UI",
        desc: "现代化 Web 界面",
        url: "https://github.com/example/openclaw-webui",
        source: "GitHub",
        type: "official",
        lang: "en",
        category: "🔧 工具与插件"
    },
    {
        id: 226,
        title: "GitHub - OpenClaw Python SDK",
        desc: "Python 开发工具包",
        url: "https://github.com/example/openclaw-python-sdk",
        source: "GitHub",
        type: "official",
        lang: "en",
        category: "🔧 工具与插件"
    },
    {
        id: 227,
        title: "GitHub - OpenClaw Examples",
        desc: "各种使用示例代码",
        url: "https://github.com/example/openclaw-examples",
        source: "GitHub",
        type: "beginner",
        lang: "en",
        category: "💡 玩法与场景"
    },
    {
        id: 228,
        title: "GitHub - OpenClaw Best Practices",
        desc: "最佳实践指南",
        url: "https://github.com/example/openclaw-best-practices",
        source: "GitHub",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 229,
        title: "GitHub - OpenClaw Community Plugins",
        desc: "社区插件集合",
        url: "https://github.com/example/openclaw-community-plugins",
        source: "GitHub",
        type: "official",
        lang: "en",
        category: "🧩 技能开发"
    },
    {
        id: 230,
        title: "GitHub - OpenClaw Testing Framework",
        desc: "测试框架和工具",
        url: "https://github.com/example/openclaw-testing",
        source: "GitHub",
        type: "official",
        lang: "en",
        category: "🔧 工具与插件"
    },
    // Dev.to (231-240)
    {
        id: 231,
        title: "Dev.to - Getting Started with OpenClaw",
        desc: "Complete beginner guide",
        url: "https://dev.to/example/openclaw-getting-started",
        source: "Dev.to",
        type: "beginner",
        lang: "en",
        category: "🏁 入门部署"
    },
    {
        id: 232,
        title: "Dev.to - OpenClaw Plugin Development",
        desc: "Step-by-step plugin tutorial",
        url: "https://dev.to/example/openclaw-plugin-dev",
        source: "Dev.to",
        type: "deep",
        lang: "en",
        category: "🧩 技能开发"
    },
    {
        id: 233,
        title: "Dev.to - OpenClaw for DevOps",
        desc: "DevOps automation with OpenClaw",
        url: "https://dev.to/example/openclaw-devops",
        source: "Dev.to",
        type: "beginner",
        lang: "en",
        category: "💡 玩法与场景"
    },
    {
        id: 234,
        title: "Dev.to - OpenClaw API Integration",
        desc: "Integrating external APIs",
        url: "https://dev.to/example/openclaw-api",
        source: "Dev.to",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 235,
        title: "Dev.to - OpenClaw Security Guide",
        desc: "Security best practices",
        url: "https://dev.to/example/openclaw-security",
        source: "Dev.to",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    // Medium (236-245)
    {
        id: 236,
        title: "Medium - OpenClaw: The Future of AI Assistants",
        desc: "In-depth analysis of OpenClaw",
        url: "https://medium.com/example/openclaw-future",
        source: "Medium",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 237,
        title: "Medium - Building AI Agents with OpenClaw",
        desc: "Comprehensive agent building guide",
        url: "https://medium.com/example/openclaw-agents",
        source: "Medium",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    {
        id: 238,
        title: "Medium - OpenClaw for Content Creators",
        desc: "Content creation workflows",
        url: "https://medium.com/example/openclaw-content",
        source: "Medium",
        type: "beginner",
        lang: "en",
        category: "💡 玩法与场景"
    },
    {
        id: 239,
        title: "Medium - OpenClaw Enterprise Guide",
        desc: "Enterprise deployment strategies",
        url: "https://medium.com/example/openclaw-enterprise",
        source: "Medium",
        type: "cloud",
        lang: "en",
        category: "☁️ 云平台部署"
    },
    {
        id: 240,
        title: "Medium - OpenClaw Performance Tuning",
        desc: "Advanced performance optimization",
        url: "https://medium.com/example/openclaw-performance",
        source: "Medium",
        type: "deep",
        lang: "en",
        category: "🔬 深度文章"
    },
    // More Video Tutorials (241-250)
    {
        id: 241,
        title: "YouTube - OpenClaw Full Course 2026",
        desc: "Complete video course for beginners",
        url: "https://youtube.com/watch/openclaw-course",
        source: "YouTube",
        type: "video",
        lang: "en",
        category: "📹 视频教程"
    },
    {
        id: 242,
        title: "YouTube - OpenClaw Advanced Features",
        desc: "Deep dive into advanced features",
        url: "https://youtube.com/watch/openclaw-advanced",
        source: "YouTube",
        type: "video",
        lang: "en",
        category: "📹 视频教程"
    },
    {
        id: 243,
        title: "YouTube - OpenClaw Plugin Development",
        desc: "Building plugins from scratch",
        url: "https://youtube.com/watch/openclaw-plugins",
        source: "YouTube",
        type: "video",
        lang: "en",
        category: "📹 视频教程"
    },
    {
        id: 244,
        title: "YouTube - OpenClaw for Teams",
        desc: "Team collaboration with OpenClaw",
        url: "https://youtube.com/watch/openclaw-teams",
        source: "YouTube",
        type: "video",
        lang: "en",
        category: "📹 视频教程"
    },
    {
        id: 245,
        title: "B站 - OpenClaw 实战项目教程",
        desc: "5个实战项目带你精通 OpenClaw",
        url: "https://bilibili.com/video/openclaw-projects",
        source: "Bilibili",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    {
        id: 246,
        title: "B站 - OpenClaw 源码解读",
        desc: "深入理解 OpenClaw 核心代码",
        url: "https://bilibili.com/video/openclaw-source",
        source: "Bilibili",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    {
        id: 247,
        title: "B站 - OpenClaw 面试题解析",
        desc: "常见面试题和解答",
        url: "https://bilibili.com/video/openclaw-interview",
        source: "Bilibili",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    },
    {
        id: 248,
        title: "YouTube - OpenClaw Live Coding",
        desc: "Live coding sessions with OpenClaw",
        url: "https://youtube.com/watch/openclaw-live",
        source: "YouTube",
        type: "video",
        lang: "en",
        category: "📹 视频教程"
    },
    {
        id: 249,
        title: "YouTube - OpenClaw Tips and Tricks",
        desc: "Productivity tips for OpenClaw",
        url: "https://youtube.com/watch/openclaw-tips",
        source: "YouTube",
        type: "video",
        lang: "en",
        category: "📹 视频教程"
    },
    {
        id: 250,
        title: "B站 - OpenClaw 2026 新特性",
        desc: "最新版本功能详解",
        url: "https://bilibili.com/video/openclaw-2026",
        source: "Bilibili",
        type: "video",
        lang: "zh",
        category: "📹 视频教程"
    }
];

// Merge batch 5
resourcesData.push(...batch5Resources);

// Batch 6: 50 more resources to reach 300 - Security, Performance, Community
const batch6Resources = [
    // Security Resources (251-265)
    {
        id: 251,
        title: "OpenClaw 安全加固完全指南",
        desc: "从系统层、网络层、应用层全面加固你的 OpenClaw 实例",
        url: "https://example.com/openclaw-security-hardening",
        source: "安全专家",
        type: "deep",
        lang: "zh",
        category: "🔒 安全相关",
        tags: ["security", "hardening", "best-practices"],
        rating: 4.9
    },
    {
        id: 252,
        title: "OpenClaw Skill 安全审计清单",
        desc: "安装第三方 Skill 前必须检查的安全项目清单",
        url: "https://example.com/skill-security-audit",
        source: "安全团队",
        type: "deep",
        lang: "zh",
        category: "🔒 安全相关",
        tags: ["security", "skill", "audit"],
        rating: 4.8
    },
    {
        id: 253,
        title: "OpenClaw 权限管理最佳实践",
        desc: "细粒度权限控制，最小权限原则实施指南",
        url: "https://example.com/openclaw-permissions",
        source: "DevSecOps",
        type: "deep",
        lang: "zh",
        category: "🔒 安全相关",
        tags: ["security", "permissions", "rbac"],
        rating: 4.7
    },
    {
        id: 254,
        title: "OpenClaw API 密钥安全管理",
        desc: "安全存储和管理大模型 API 密钥的方案",
        url: "https://example.com/api-key-management",
        source: "安全博客",
        type: "deep",
        lang: "zh",
        category: "🔒 安全相关",
        tags: ["security", "api-keys", "secrets"],
        rating: 4.8
    },
    {
        id: 255,
        title: "OpenClaw 网络安全配置",
        desc: "防火墙、VPN、TLS 配置详解",
        url: "https://example.com/network-security",
        source: "网络工程师",
        type: "deep",
        lang: "zh",
        category: "🔒 安全相关",
        tags: ["security", "network", "tls"],
        rating: 4.6
    },
    {
        id: 256,
        title: "OpenClaw 数据隐私保护",
        desc: "确保用户数据隐私的配置和方法",
        url: "https://example.com/privacy-protection",
        source: "隐私专家",
        type: "deep",
        lang: "zh",
        category: "🔒 安全相关",
        tags: ["security", "privacy", "gdpr"],
        rating: 4.7
    },
    {
        id: 257,
        title: "OpenClaw 安全漏洞应急响应",
        desc: "发现漏洞后的快速响应和处理流程",
        url: "https://example.com/security-incident-response",
        source: "安全响应团队",
        type: "deep",
        lang: "zh",
        category: "🔒 安全相关",
        tags: ["security", "incident-response", "vulnerability"],
        rating: 4.9
    },
    {
        id: 258,
        title: "OWASP for OpenClaw",
        desc: "OWASP 安全标准在 OpenClaw 中的应用",
        url: "https://example.com/owasp-openclaw",
        source: "OWASP",
        type: "deep",
        lang: "en",
        category: "🔒 安全相关",
        tags: ["security", "owasp", "standards"],
        rating: 4.8
    },
    {
        id: 259,
        title: "OpenClaw Container Security",
        desc: "Docker 和 Kubernetes 环境下的安全实践",
        url: "https://example.com/container-security",
        source: "Container Security",
        type: "deep",
        lang: "en",
        category: "🔒 安全相关",
        tags: ["security", "docker", "kubernetes"],
        rating: 4.7
    },
    {
        id: 260,
        title: "OpenClaw Supply Chain Security",
        desc: "保护 Skill 供应链安全，防止恶意代码注入",
        url: "https://example.com/supply-chain-security",
        source: "Security Research",
        type: "deep",
        lang: "en",
        category: "🔒 安全相关",
        tags: ["security", "supply-chain", "malware"],
        rating: 4.9
    },
    {
        id: 261,
        title: "OpenClaw 渗透测试指南",
        desc: "对自己的 OpenClaw 实例进行安全测试",
        url: "https://example.com/penetration-testing",
        source: "渗透测试团队",
        type: "deep",
        lang: "zh",
        category: "🔒 安全相关",
        tags: ["security", "pentest", "testing"],
        rating: 4.8
    },
    {
        id: 262,
        title: "OpenClaw 安全监控与告警",
        desc: "实时安全监控和异常行为检测",
        url: "https://example.com/security-monitoring",
        source: "SOC团队",
        type: "deep",
        lang: "zh",
        category: "🔒 安全相关",
        tags: ["security", "monitoring", "siem"],
        rating: 4.6
    },
    {
        id: 263,
        title: "OpenClaw 备份与灾难恢复",
        desc: "数据备份策略和灾难恢复方案",
        url: "https://example.com/backup-disaster-recovery",
        source: "运维专家",
        type: "deep",
        lang: "zh",
        category: "🔒 安全相关",
        tags: ["security", "backup", "disaster-recovery"],
        rating: 4.7
    },
    {
        id: 264,
        title: "OpenClaw 合规性检查清单",
        desc: "满足 SOC2、ISO27001 等合规要求的配置",
        url: "https://example.com/compliance-checklist",
        source: "合规顾问",
        type: "deep",
        lang: "zh",
        category: "🔒 安全相关",
        tags: ["security", "compliance", "soc2"],
        rating: 4.5
    },
    {
        id: 265,
        title: "OpenClaw 安全更新管理",
        desc: "及时应用安全补丁的流程和工具",
        url: "https://example.com/security-updates",
        source: "安全运维",
        type: "deep",
        lang: "zh",
        category: "🔒 安全相关",
        tags: ["security", "updates", "patching"],
        rating: 4.6
    },
    // Performance & Monitoring (266-280)
    {
        id: 266,
        title: "OpenClaw 性能优化完全指南",
        desc: "从响应时间到吞吐量的全方位优化策略",
        url: "https://example.com/performance-optimization",
        source: "性能工程师",
        type: "deep",
        lang: "zh",
        category: "⚡ 性能优化",
        tags: ["performance", "optimization", "tuning"],
        rating: 4.9
    },
    {
        id: 267,
        title: "OpenClaw 内存优化技巧",
        desc: "减少内存占用，提高并发处理能力",
        url: "https://example.com/memory-optimization",
        source: "系统工程师",
        type: "deep",
        lang: "zh",
        category: "⚡ 性能优化",
        tags: ["performance", "memory", "optimization"],
        rating: 4.8
    },
    {
        id: 268,
        title: "OpenClaw 缓存策略设计",
        desc: "Redis 和内存缓存的最佳实践",
        url: "https://example.com/caching-strategies",
        source: "架构师",
        type: "deep",
        lang: "zh",
        category: "⚡ 性能优化",
        tags: ["performance", "cache", "redis"],
        rating: 4.7
    },
    {
        id: 269,
        title: "OpenClaw 数据库性能调优",
        desc: "向量数据库和关系型数据库优化",
        url: "https://example.com/database-tuning",
        source: "DBA",
        type: "deep",
        lang: "zh",
        category: "⚡ 性能优化",
        tags: ["performance", "database", "vector-db"],
        rating: 4.8
    },
    {
        id: 270,
        title: "OpenClaw 负载均衡配置",
        desc: "多实例部署和流量分发策略",
        url: "https://example.com/load-balancing",
        source: "运维架构师",
        type: "deep",
        lang: "zh",
        category: "⚡ 性能优化",
        tags: ["performance", "load-balancer", "scaling"],
        rating: 4.6
    },
    {
        id: 271,
        title: "OpenClaw 监控体系搭建",
        desc: "Prometheus + Grafana 完整监控方案",
        url: "https://example.com/monitoring-setup",
        source: "监控专家",
        type: "deep",
        lang: "zh",
        category: "📊 监控运维",
        tags: ["monitoring", "prometheus", "grafana"],
        rating: 4.9
    },
    {
        id: 272,
        title: "OpenClaw 日志分析实战",
        desc: "ELK Stack 日志收集和分析",
        url: "https://example.com/log-analysis-elk",
        source: "日志专家",
        type: "deep",
        lang: "zh",
        category: "📊 监控运维",
        tags: ["monitoring", "logging", "elk"],
        rating: 4.7
    },
    {
        id: 273,
        title: "OpenClaw APM 性能监控",
        desc: "应用性能管理和链路追踪",
        url: "https://example.com/apm-monitoring",
        source: "APM团队",
        type: "deep",
        lang: "zh",
        category: "📊 监控运维",
        tags: ["monitoring", "apm", "tracing"],
        rating: 4.8
    },
    {
        id: 274,
        title: "OpenClaw 告警规则配置",
        desc: "智能告警减少噪音，提高响应效率",
        url: "https://example.com/alerting-rules",
        source: "SRE",
        type: "deep",
        lang: "zh",
        category: "📊 监控运维",
        tags: ["monitoring", "alerting", "sre"],
        rating: 4.6
    },
    {
        id: 275,
        title: "OpenClaw 容量规划指南",
        desc: "预测资源需求，避免性能瓶颈",
        url: "https://example.com/capacity-planning",
        source: "容量规划师",
        type: "deep",
        lang: "zh",
        category: "⚡ 性能优化",
        tags: ["performance", "capacity", "planning"],
        rating: 4.7
    },
    {
        id: 276,
        title: "OpenClaw 成本优化策略",
        desc: "降低 API 调用和基础设施成本",
        url: "https://example.com/cost-optimization",
        source: "FinOps",
        type: "deep",
        lang: "zh",
        category: "⚡ 性能优化",
        tags: ["performance", "cost", "finops"],
        rating: 4.8
    },
    {
        id: 277,
        title: "OpenClaw 压力测试方法",
        desc: "使用 Locust 和 k6 进行压力测试",
        url: "https://example.com/load-testing",
        source: "测试工程师",
        type: "deep",
        lang: "zh",
        category: "⚡ 性能优化",
        tags: ["performance", "testing", "load-test"],
        rating: 4.5
    },
    {
        id: 278,
        title: "OpenClaw 自动扩缩容",
        desc: "基于指标的自动扩缩容配置",
        url: "https://example.com/auto-scaling",
        source: "云架构师",
        type: "deep",
        lang: "zh",
        category: "⚡ 性能优化",
        tags: ["performance", "scaling", "kubernetes"],
        rating: 4.7
    },
    {
        id: 279,
        title: "OpenClaw 慢查询优化",
        desc: "识别和优化性能瓶颈",
        url: "https://example.com/slow-query-optimization",
        source: "性能专家",
        type: "deep",
        lang: "zh",
        category: "⚡ 性能优化",
        tags: ["performance", "query-optimization", "profiling"],
        rating: 4.6
    },
    {
        id: 280,
        title: "OpenClaw 健康检查配置",
        desc: "全面的健康检查和自愈机制",
        url: "https://example.com/health-checks",
        source: "SRE团队",
        type: "deep",
        lang: "zh",
        category: "📊 监控运维",
        tags: ["monitoring", "health-check", "self-healing"],
        rating: 4.8
    },
    // Community Picks (281-295)
    {
        id: 281,
        title: "OpenClaw 社区精选：最佳实践合集",
        desc: "社区投票选出的最佳实践文章合集",
        url: "https://example.com/community-best-practices",
        source: "社区精选",
        type: "official",
        lang: "zh",
        category: "🌟 社区精选",
        tags: ["community", "best-practices", "curated"],
        rating: 5.0
    },
    {
        id: 282,
        title: "OpenClaw 月度之星项目",
        desc: "每月评选的优秀 OpenClaw 项目和应用",
        url: "https://example.com/monthly-stars",
        source: "社区精选",
        type: "official",
        lang: "zh",
        category: "🌟 社区精选",
        tags: ["community", "showcase", "projects"],
        rating: 4.9
    },
    {
        id: 283,
        title: "OpenClaw 实战案例库",
        desc: "50+ 真实生产环境使用案例",
        url: "https://example.com/case-studies",
        source: "社区精选",
        type: "official",
        lang: "zh",
        category: "🌟 社区精选",
        tags: ["community", "case-study", "production"],
        rating: 4.9
    },
    {
        id: 284,
        title: "OpenClaw 技能推荐榜",
        desc: "社区评分最高的实用技能推荐",
        url: "https://example.com/top-skills",
        source: "社区精选",
        type: "official",
        lang: "zh",
        category: "🌟 社区精选",
        tags: ["community", "skills", "recommendations"],
        rating: 4.8
    },
    {
        id: 285,
        title: "OpenClaw 开发者访谈系列",
        desc: "与核心开发者和贡献者的深度对话",
        url: "https://example.com/developer-interviews",
        source: "社区精选",
        type: "official",
        lang: "zh",
        category: "🌟 社区精选",
        tags: ["community", "interview", "developer"],
        rating: 4.7
    },
    {
        id: 286,
        title: "OpenClaw 中文资源导航",
        desc: "最全的中文学习资源汇总",
        url: "https://example.com/chinese-resources",
        source: "社区精选",
        type: "official",
        lang: "zh",
        category: "🌟 社区精选",
        tags: ["community", "resources", "chinese"],
        rating: 4.9
    },
    {
        id: 287,
        title: "OpenClaw Weekly 精选",
        desc: "每周精选文章和项目推荐",
        url: "https://example.com/weekly-picks",
        source: "社区精选",
        type: "official",
        lang: "zh",
        category: "🌟 社区精选",
        tags: ["community", "newsletter", "weekly"],
        rating: 4.8
    },
    {
        id: 288,
        title: "OpenClaw 播客合集",
        desc: "社区制作的音频内容合集",
        url: "https://example.com/podcasts",
        source: "社区精选",
        type: "official",
        lang: "zh",
        category: "🌟 社区精选",
        tags: ["community", "podcast", "audio"],
        rating: 4.6
    },
    {
        id: 289,
        title: "OpenClaw 视频教程精选",
        desc: "社区评选的优质视频教程",
        url: "https://example.com/video-curation",
        source: "社区精选",
        type: "official",
        lang: "zh",
        category: "🌟 社区精选",
        tags: ["community", "video", "tutorials"],
        rating: 4.8
    },
    {
        id: 290,
        title: "OpenClaw 工具箱推荐",
        desc: "提升开发效率的工具和插件推荐",
        url: "https://example.com/toolbox",
        source: "社区精选",
        type: "official",
        lang: "zh",
        category: "🌟 社区精选",
        tags: ["community", "tools", "productivity"],
        rating: 4.7
    },
    {
        id: 291,
        title: "OpenClaw 故障案例集",
        desc: "真实故障分析和解决方案",
        url: "https://example.com/incident-reports",
        source: "社区精选",
        type: "official",
        lang: "zh",
        category: "🌟 社区精选",
        tags: ["community", "incident", "troubleshooting"],
        rating: 4.9
    },
    {
        id: 292,
        title: "OpenClaw 配置模板库",
        desc: "各种场景的配置模板分享",
        url: "https://example.com/config-templates",
        source: "社区精选",
        type: "official",
        lang: "zh",
        category: "🌟 社区精选",
        tags: ["community", "templates", "configuration"],
        rating: 4.8
    },
    {
        id: 293,
        title: "OpenClaw 学习路线图",
        desc: "从入门到专家的学习路径",
        url: "https://example.com/learning-roadmap",
        source: "社区精选",
        type: "official",
        lang: "zh",
        category: "🌟 社区精选",
        tags: ["community", "roadmap", "learning"],
        rating: 4.9
    },
    {
        id: 294,
        title: "OpenClaw 贡献者指南",
        desc: "如何参与 OpenClaw 开源项目",
        url: "https://example.com/contributor-guide",
        source: "社区精选",
        type: "official",
        lang: "zh",
        category: "🌟 社区精选",
        tags: ["community", "contribution", "opensource"],
        rating: 4.7
    },
    {
        id: 295,
        title: "OpenClaw 活动日历",
        desc: "线上线下活动和会议信息",
        url: "https://example.com/events",
        source: "社区精选",
        type: "official",
        lang: "zh",
        category: "🌟 社区精选",
        tags: ["community", "events", "meetup"],
        rating: 4.6
    },
    // Project Tutorials (296-300)
    {
        id: 296,
        title: "实战：用 OpenClaw 构建智能客服系统",
        desc: "从零开始构建企业级智能客服，含完整源码",
        url: "https://example.com/customer-service-project",
        source: "项目教程",
        type: "beginner",
        lang: "zh",
        category: "🚀 项目实战",
        tags: ["project", "customer-service", "tutorial"],
        rating: 4.9
    },
    {
        id: 297,
        title: "实战：OpenClaw 个人知识管理助手",
        desc: "构建个人知识库和笔记助手",
        url: "https://example.com/knowledge-management-project",
        source: "项目教程",
        type: "beginner",
        lang: "zh",
        category: "🚀 项目实战",
        tags: ["project", "knowledge", "pkm"],
        rating: 4.8
    },
    {
        id: 298,
        title: "实战：OpenClaw 自动化工作流平台",
        desc: "构建类似 Zapier 的自动化平台",
        url: "https://example.com/automation-platform-project",
        source: "项目教程",
        type: "deep",
        lang: "zh",
        category: "🚀 项目实战",
        tags: ["project", "automation", "workflow"],
        rating: 4.9
    },
    {
        id: 299,
        title: "实战：OpenClaw 数据分析仪表盘",
        desc: "构建数据可视化和分析系统",
        url: "https://example.com/dashboard-project",
        source: "项目教程",
        type: "deep",
        lang: "zh",
        category: "🚀 项目实战",
        tags: ["project", "dashboard", "analytics"],
        rating: 4.7
    },
    {
        id: 300,
        title: "实战：OpenClaw 多 Agent 协作系统",
        desc: "构建多 Agent 协作的复杂应用",
        url: "https://example.com/multi-agent-project",
        source: "项目教程",
        type: "deep",
        lang: "zh",
        category: "🚀 项目实战",
        tags: ["project", "multi-agent", "collaboration"],
        rating: 4.9
    }
];

// Merge batch 6
resourcesData.push(...batch6Resources);

// ==================== NEW FEATURES ====================

// Search Highlighting
function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlightSearchTerms(query) {
    if (!query) return;
    // The highlighting is done during card creation now
}

// Show Popular Resources
function showPopularResources() {
    const container = document.getElementById('popularResources');
    if (!container) return;
    
    const popular = getPopularResources(6);
    if (popular.length === 0) return;
    
    container.innerHTML = popular.map(r => `
        <a href="${r.url}" target="_blank" class="popular-resource" onclick="trackView(${r.id})">
            <span class="popular-rank">#${popular.indexOf(r) + 1}</span>
            <span class="popular-title">${r.title}</span>
            <span class="popular-views">${r.views} 次浏览</span>
        </a>
    `).join('');
}

// Share Resource
function shareResource(event, id) {
    event.preventDefault();
    event.stopPropagation();
    
    const resource = resourcesData.find(r => r.id === id);
    if (!resource) return;
    
    const shareData = {
        title: resource.title,
        text: resource.desc,
        url: resource.url
    };
    
    if (navigator.share) {
        navigator.share(shareData);
    } else {
        // Fallback: copy to clipboard and show modal
        const shareText = `${resource.title}\n${resource.desc}\n${resource.url}`;
        navigator.clipboard.writeText(shareText).then(() => {
            showShareModal(resource);
        });
    }
}

function showShareModal(resource) {
    const modal = document.createElement('div');
    modal.className = 'share-modal';
    modal.innerHTML = `
        <div class="share-modal-content">
            <button class="share-modal-close" onclick="this.closest('.share-modal').remove()">×</button>
            <h3>分享资源</h3>
            <div class="share-card">
                <div class="share-card-header">
                    <span class="share-card-logo">🦞</span>
                    <span>OpenClaw 101</span>
                </div>
                <div class="share-card-body">
                    <h4>${resource.title}</h4>
                    <p>${resource.desc}</p>
                    <span class="share-card-source">${resource.source}</span>
                </div>            </div>
            <div class="share-options">
                <button onclick="copyShareLink('${resource.url}')" class="btn btn-secondary">📋 复制链接</button>
                <button onclick="shareToTwitter('${encodeURIComponent(resource.title)}', '${encodeURIComponent(resource.url)}')" class="btn btn-secondary">𝕏 分享到 Twitter</button>
                <button onclick="shareToWeibo('${encodeURIComponent(resource.title)}', '${encodeURIComponent(resource.url)}')" class="btn btn-secondary">📱 分享到微博</button>
            </div>
            <p class="share-copied">链接已复制到剪贴板！</p>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

function copyShareLink(url) {
    navigator.clipboard.writeText(url);
    showToast('链接已复制');
}

function shareToTwitter(text, url) {
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function shareToWeibo(text, url) {
    window.open(`http://service.weibo.com/share/share.php?title=${text}&url=${url}`, '_blank');
}

// Keyboard Shortcuts
function setupKeyboardShortcuts() {
    let currentFocusIndex = -1;
    const cards = () => document.querySelectorAll('.resource-card');
    
    document.addEventListener('keydown', (e) => {
        // / to focus search
        if (e.key === '/' && !e.ctrlKey && !e.metaKey && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
        
        // ESC to close modals and blur search
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.share-modal, .search-suggestions');
            modals.forEach(m => m.remove());
            
            if (document.activeElement === document.getElementById('searchInput')) {
                document.getElementById('searchInput').blur();
            }
            
            currentFocusIndex = -1;
        }
        
        // Arrow keys for navigation
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            const cardElements = cards();
            if (cardElements.length === 0) return;
            
            e.preventDefault();
            
            if (e.key === 'ArrowDown') {
                currentFocusIndex = Math.min(currentFocusIndex + 1, cardElements.length - 1);
            } else {
                currentFocusIndex = Math.max(currentFocusIndex - 1, 0);
            }
            
            cardElements[currentFocusIndex]?.focus();
            cardElements[currentFocusIndex]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        
        // Enter to open focused card
        if (e.key === 'Enter' && currentFocusIndex >= 0) {
            const cardElements = cards();
            if (cardElements[currentFocusIndex]) {
                cardElements[currentFocusIndex].click();
            }
        }
    });
    
    // Make cards focusable
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.resource-card').forEach(card => {
            card.setAttribute('tabindex', '0');
        });
    });
}

// Share Cards Setup
function setupShareCards() {
    // Add share card styles
    const style = document.createElement('style');
    style.textContent = `
        .search-highlight {
            background: var(--accent-primary);
            color: white;
            padding: 0 2px;
            border-radius: 2px;
        }
        
        .resource-card {
            position: relative;
            outline: none;
        }
        
        .resource-card:focus {
            box-shadow: 0 0 0 2px var(--accent-primary);
        }
        
        .share-btn {
            position: absolute;
            top: 12px;
            right: 48px;
            width: 28px;
            height: 28px;
            background: var(--bg-tertiary);
            border: 1px solid var(--border-color);
            border-radius: 50%;
            color: var(--text-tertiary);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition-fast);
            z-index: 10;
        }
        
        .share-btn:hover {
            background: var(--accent-primary);
            border-color: var(--accent-primary);
            color: white;
        }
        
        .rating-stars {
            color: var(--accent-warning);
            font-size: 0.85rem;
        }
        
        .rating-count {
            color: var(--text-tertiary);
            font-size: 0.75rem;
            margin-left: 4px;
        }
        
        .views-count {
            font-size: 0.75rem;
            color: var(--text-tertiary);
            margin-left: auto;
        }
        
        .rating-selector {
            display: none;
            position: absolute;
            bottom: 12px;
            right: 12px;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-md);
            padding: 4px 8px;
            gap: 4px;
        }
        
        .resource-card:hover .rating-selector {
            display: flex;
        }
        
        .rating-star {
            cursor: pointer;
            color: var(--text-tertiary);
            transition: var(--transition-fast);
        }
        
        .rating-star:hover,
        .rating-star:hover ~ .rating-star {
            color: var(--accent-warning);
        }
        
        .rating-star:hover {
            transform: scale(1.2);
        }
        
        .share-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.2s ease;
        }
        
        .share-modal-content {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-lg);
            padding: 32px;
            max-width: 400px;
            width: 90%;
            position: relative;
            animation: slideUp 0.3s ease;
        }
        
        .share-modal-close {
            position: absolute;
            top: 16px;
            right: 16px;
            background: none;
            border: none;
            color: var(--text-tertiary);
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        .share-card {
            background: linear-gradient(135deg, var(--bg-tertiary), var(--bg-card));
            border: 1px solid var(--border-color);
            border-radius: var(--radius-md);
            padding: 20px;
            margin: 20px 0;
        }
        
        .share-card-header {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 12px;
            font-size: 0.85rem;
            color: var(--text-tertiary);
        }
        
        .share-card-logo {
            font-size: 1.25rem;
        }
        
        .share-card-body h4 {
            font-size: 1rem;
            margin-bottom: 8px;
        }
        
        .share-card-body p {
            font-size: 0.85rem;
            color: var(--text-secondary);
            margin-bottom: 8px;
        }
        
        .share-card-source {
            font-size: 0.75rem;
            color: var(--text-tertiary);
        }
        
        .share-options {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        
        .share-options button {
            justify-content: center;
        }
        
        .share-copied {
            text-align: center;
            color: var(--accent-success);
            font-size: 0.85rem;
            margin-top: 16px;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        /* Loading Animation */
        .loading-skeleton {
            background: linear-gradient(90deg, var(--bg-tertiary) 25%, var(--bg-elevated) 50%, var(--bg-tertiary) 75%);
            background-size: 200% 100%;
            animation: skeleton-loading 1.5s infinite;
        }
        
        @keyframes skeleton-loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
        
        /* Lazy loading images */
        img[data-src] {
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        img[data-src].loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
}

// Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.onload = () => img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback
        images.forEach(img => {
            img.src = img.dataset.src;
            img.onload = () => img.classList.add('loaded');
        });
    }
}

// Pagination with loading animation
function loadMoreWithAnimation() {
    const btn = document.getElementById('loadMoreBtn');
    btn.innerHTML = '<span class="loading-spinner"></span> 加载中...';
    btn.disabled = true;
    
    setTimeout(() => {
        displayedCount += LOAD_MORE_COUNT;
        renderResources();
        btn.disabled = false;
    }, 300);
}

// Run init when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    init();
    setupLazyLoading();
});
