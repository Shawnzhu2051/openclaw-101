// skills-browser.js - Skills Browser Functionality

// DOM Elements
const skillsGrid = document.getElementById('skillsGrid');
const skillSearchInput = document.getElementById('skillSearchInput');
const categoryFilters = document.getElementById('categoryFilters');
const skillsEmpty = document.getElementById('skillsEmpty');
const skillModal = document.getElementById('skillModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const backToTop = document.getElementById('backToTop');
const toast = document.getElementById('toast');

// State
let currentCategory = 'all';
let searchQuery = '';
let displayedSkills = [];

// Initialize
function init() {
    renderCategories();
    renderSkills();
    setupEventListeners();
    setupBackToTop();
}

// Render Categories
function renderCategories() {
    const categories = [
        { id: 'all', name: '全部', icon: '📦' },
        { id: 'ai', name: 'AI & LLM', icon: '🧠' },
        { id: 'web', name: '网页 & 前端', icon: '🌐' },
        { id: 'devops', name: 'DevOps & 云', icon: '☁️' },
        { id: 'search', name: '搜索 & 研究', icon: '🔍' },
        { id: 'marketing', name: '营销 & 销售', icon: '📈' },
        { id: 'smart-home', name: '智能家居', icon: '🏠' },
        { id: 'voice', name: '语音 & 音频', icon: '🗣️' },
        { id: 'communication', name: '通讯集成', icon: '💬' },
        { id: 'health', name: '健康 & 健身', icon: '🏋️' },
        { id: 'notes', name: '笔记 & 知识', icon: '📝' },
        { id: 'gaming', name: '游戏', icon: '🎮' }
    ];
    
    categoryFilters.innerHTML = categories.map(cat => `
        <button class="category-filter ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
            <span>${cat.icon}</span>
            <span>${cat.name}</span>
        </button>
    `).join('');
}

// Render Skills
function renderSkills() {
    const filtered = filterSkills();
    displayedSkills = filtered;
    
    if (filtered.length === 0) {
        skillsGrid.style.display = 'none';
        skillsEmpty.style.display = 'block';
    } else {
        skillsGrid.style.display = 'grid';
        skillsEmpty.style.display = 'none';
        skillsGrid.innerHTML = filtered.map(skill => createSkillCard(skill)).join('');
    }
}

// Filter Skills
function filterSkills() {
    return skillsData.filter(skill => {
        // Category filter
        if (currentCategory !== 'all' && skill.category !== currentCategory) {
            return false;
        }
        
        // Search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const matchName = skill.name.toLowerCase().includes(query);
            const matchDesc = skill.description.toLowerCase().includes(query);
            const matchTags = skill.tags.some(tag => tag.toLowerCase().includes(query));
            return matchName || matchDesc || matchTags;
        }
        
        return true;
    });
}

// Create Skill Card HTML
function createSkillCard(skill) {
    return `
        <div class="skill-card" data-id="${skill.id}" onclick="openSkillModal('${skill.id}')">
            <div class="skill-card-header">
                <div class="skill-icon">${skill.icon}</div>
                <div class="skill-info">
                    <h3>${skill.name}</h3>
                    <span class="skill-author">@${skill.author}</span>
                </div>
            </div>
            <p class="skill-description">${skill.description}</p>
            <div class="skill-tags">
                ${skill.tags.slice(0, 3).map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
            </div>
            <div class="skill-stats">
                <span class="skill-stat">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                    </svg>
                    ${skill.stars}
                </span>
                <span class="skill-stat">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"/>
                    </svg>
                    ${skill.downloads}
                </span>
            </div>
        </div>
    `;
}

// Open Skill Modal
function openSkillModal(skillId) {
    const skill = skillsData.find(s => s.id === skillId);
    if (!skill) return;
    
    modalContent.innerHTML = `
        <div class="skill-modal-header">
            <div class="skill-modal-icon">${skill.icon}</div>
            <div class="skill-modal-title">
                <h2>${skill.name}</h2>
                <span class="skill-modal-author">@${skill.author}</span>
            </div>
        </div>
        <p class="skill-modal-description">${skill.description}</p>
        <div class="skill-modal-tags">
            ${skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
        </div>
        <div class="skill-modal-install">
            <code>npx clawhub@latest install ${skill.package}</code>
            <button class="btn btn-primary install-btn" onclick="copyInstallCommand('${skill.package}')">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M4 1.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1Zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1Z"/>
                </svg>
                复制安装命令
            </button>
        </div>
    `;
    
    skillModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeSkillModal() {
    skillModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Copy Install Command
function copyInstallCommand(packageName) {
    const command = `npx clawhub@latest install ${packageName}`;
    navigator.clipboard.writeText(command).then(() => {
        showToast('安装命令已复制');
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

// Setup Event Listeners
function setupEventListeners() {
    // Search
    skillSearchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderSkills();
    });
    
    // Category filters
    categoryFilters.addEventListener('click', (e) => {
        const filter = e.target.closest('.category-filter');
        if (!filter) return;
        
        document.querySelectorAll('.category-filter').forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        currentCategory = filter.dataset.category;
        renderSkills();
    });
    
    // Modal close
    closeModal.addEventListener('click', closeSkillModal);
    skillModal.addEventListener('click', (e) => {
        if (e.target === skillModal) closeSkillModal();
    });
    
    // ESC to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeSkillModal();
    });
}

// Setup Back to Top
function setupBackToTop() {
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
