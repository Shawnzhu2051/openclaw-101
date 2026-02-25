// Skills Browser JavaScript
let currentCategory = 'all';
let searchQuery = '';
let selectedSkill = null;

// DOM Elements
const skillsGrid = document.getElementById('skillsGrid');
const categoryFilters = document.getElementById('categoryFilters');
const skillSearchInput = document.getElementById('skillSearchInput');
const skillsEmpty = document.getElementById('skillsEmpty');
const skillModal = document.getElementById('skillModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

// Initialize
function init() {
    renderCategories();
    renderSkills();
    setupEventListeners();
    setupNavbar();
}

// Render category filters
function renderCategories() {
    categoryFilters.innerHTML = skillCategories.map(cat => `
        <button class="category-filter ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
            <span>${cat.icon}</span>
            <span>${cat.name}</span>
        </button>
    `).join('');
}

// Render skills grid
function renderSkills() {
    const filtered = filterSkills();
    
    if (filtered.length === 0) {
        skillsGrid.style.display = 'none';
        skillsEmpty.style.display = 'block';
    } else {
        skillsGrid.style.display = 'grid';
        skillsEmpty.style.display = 'none';
        
        skillsGrid.innerHTML = filtered.map(skill => createSkillCard(skill)).join('');
        
        // Add click handlers
        document.querySelectorAll('.skill-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.install-btn')) {
                    const skillId = card.dataset.skillId;
                    openSkillModal(skillId);
                }
            });
        });
        
        // Add install button handlers
        document.querySelectorAll('.install-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const command = btn.dataset.command;
                copyToClipboard(command, btn);
            });
        });
    }
}

// Filter skills
function filterSkills() {
    return skillsData.filter(skill => {
        // Category filter
        if (currentCategory !== 'all' && skill.category !== currentCategory) {
            return false;
        }
        
        // Search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const nameMatch = skill.displayName.toLowerCase().includes(query);
            const descMatch = skill.description.toLowerCase().includes(query);
            const tagMatch = skill.tags.some(tag => tag.toLowerCase().includes(query));
            return nameMatch || descMatch || tagMatch;
        }
        
        return true;
    });
}

// Create skill card HTML
function createSkillCard(skill) {
    return `
        <div class="skill-card" data-skill-id="${skill.id}">
            <div class="skill-card-header">
                <div class="skill-icon">${skill.icon}</div>
                <div class="skill-info">
                    <h3 class="skill-name">${skill.displayName}</h3>
                    <span class="skill-author">@${skill.author}</span>
                </div>
            </div>
            <p class="skill-description">${skill.description}</p>
            <div class="skill-meta">
                <div class="skill-tags">
                    ${skill.tags.slice(0, 2).map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                </div>
                <div class="skill-stats-row">
                    <span class="skill-stat">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                        </svg>
                        ${skill.rating}
                    </span>
                    <span class="skill-stat">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                        ${formatNumber(skill.installs)}
                    </span>
                </div>
            </div>
            <button class="install-btn" data-command="${skill.command}">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="margin-right: 6px;">
                    <path d="M4 1.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1Zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1Zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1Z"/>
                </svg>
                安装
            </button>
        </div>
    `;
}

// Open skill modal
function openSkillModal(skillId) {
    const skill = skillsData.find(s => s.id === skillId);
    if (!skill) return;
    
    selectedSkill = skill;
    
    modalContent.innerHTML = `
        <div class="skill-modal-header">
            <div class="skill-modal-icon">${skill.icon}</div>
            <div class="skill-modal-title">
                <h2>${skill.displayName}</h2>
                <p>by ${skill.author} · v${skill.version} · ${skill.category}</p>
            </div>
        </div>
        <div class="skill-modal-body">
            <div class="skill-modal-section">
                <h3>描述</h3>
                <p>${skill.description}</p>
            </div>
            <div class="skill-modal-section">
                <h3>标签</h3>
                <div class="skill-tags">
                    ${skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="skill-modal-section">
                <h3>安装命令</h3>
                <div class="install-command">
                    <code>${skill.command}</code>
                    <button class="copy-cmd-btn" onclick="copyCommand('${skill.command}')">复制</button>
                </div>
            </div>
            <div class="skill-modal-section">
                <h3>统计</h3>
                <div class="skill-stats-row">
                    <span class="skill-stat">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                        </svg>
                        ${skill.rating} 评分
                    </span>
                    <span class="skill-stat">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                        ${formatNumber(skill.installs)} 安装
                    </span>
                </div>
            </div>
        </div>
        <div class="skill-modal-footer">
            <button class="btn btn-primary" onclick="copyCommand('${skill.command}')">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" style="margin-right: 8px;">
                    <path d="M4 1.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1Zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1Zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1Z"/>
                </svg>
                复制安装命令
            </button>
            <a href="https://clawhub.com/skills/${skill.id}" target="_blank" class="btn btn-secondary">
                查看详情
            </a>
        </div>
    `;
    
    skillModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close skill modal
function closeSkillModal() {
    skillModal.classList.remove('active');
    document.body.style.overflow = '';
    selectedSkill = null;
}

// Copy command to clipboard
function copyCommand(command) {
    navigator.clipboard.writeText(command).then(() => {
        showToast('安装命令已复制到剪贴板');
    });
}

// Copy to clipboard with button feedback
function copyToClipboard(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="margin-right: 6px;">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg>
            已复制
        `;
        btn.classList.add('copied');
        showToast('已复制到剪贴板');
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
        }, 2000);
    });
}

// Format number with k/m suffix
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Category filter clicks
    categoryFilters.addEventListener('click', (e) => {
        const filter = e.target.closest('.category-filter');
        if (filter) {
            document.querySelectorAll('.category-filter').forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            currentCategory = filter.dataset.category;
            renderSkills();
        }
    });
    
    // Search input
    skillSearchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderSkills();
    });
    
    // Close modal
    closeModal.addEventListener('click', closeSkillModal);
    skillModal.addEventListener('click', (e) => {
        if (e.target === skillModal) {
            closeSkillModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && skillModal.classList.contains('active')) {
            closeSkillModal();
        }
    });
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

// Run init when DOM is ready
document.addEventListener('DOMContentLoaded', init);
