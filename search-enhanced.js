// Enhanced Search with Suggestions
const SearchEnhanced = {
    searchInput: null,
    suggestionsContainer: null,
    resources: [],
    selectedIndex: -1,
    maxSuggestions: 8,
    
    init(resourcesData) {
        this.resources = resourcesData || [];
        this.searchInput = document.getElementById('searchInput');
        this.setupSearchBox();
        this.setupEventListeners();
    },
    
    setupSearchBox() {
        if (!this.searchInput) return;
        
        // Create suggestions container
        this.suggestionsContainer = document.createElement('div');
        this.suggestionsContainer.className = 'search-suggestions';
        this.suggestionsContainer.style.display = 'none';
        
        // Insert after search box
        const searchBox = this.searchInput.closest('.search-box');
        if (searchBox) {
            searchBox.style.position = 'relative';
            searchBox.appendChild(this.suggestionsContainer);
        }
    },
    
    setupEventListeners() {
        if (!this.searchInput) return;
        
        // Input event for suggestions
        this.searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (query.length >= 1) {
                this.showSuggestions(query);
            } else {
                this.hideSuggestions();
            }
        });
        
        // Keyboard navigation
        this.searchInput.addEventListener('keydown', (e) => {
            if (!this.suggestionsContainer || this.suggestionsContainer.style.display === 'none') return;
            
            const items = this.suggestionsContainer.querySelectorAll('.suggestion-item');
            
            switch(e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    this.selectedIndex = Math.min(this.selectedIndex + 1, items.length - 1);
                    this.updateSelection(items);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
                    this.updateSelection(items);
                    break;
                case 'Enter':
                    e.preventDefault();
                    if (this.selectedIndex >= 0 && items[this.selectedIndex]) {
                        items[this.selectedIndex].click();
                    } else if (items.length > 0) {
                        items[0].click();
                    }
                    break;
                case 'Escape':
                    this.hideSuggestions();
                    this.searchInput.blur();
                    break;
            }
        });
        
        // Close suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-box')) {
                this.hideSuggestions();
            }
        });
        
        // Focus event
        this.searchInput.addEventListener('focus', () => {
            const query = this.searchInput.value.trim();
            if (query.length >= 1) {
                this.showSuggestions(query);
            }
        });
    },
    
    showSuggestions(query) {
        if (!this.suggestionsContainer) return;
        
        const matches = this.findMatches(query);
        
        if (matches.length === 0) {
            this.suggestionsContainer.innerHTML = `
                <div class="suggestion-empty">
                    <span>😕</span>
                    <p>没有找到匹配的资源</p>
                </div>
            `;
        } else {
            this.suggestionsContainer.innerHTML = matches.map((match, index) => `
                <div class="suggestion-item ${index === 0 ? 'selected' : ''}" data-index="${index}" data-url="${match.url}">
                    <div class="suggestion-icon">${this.getCategoryIcon(match.category)}</div>
                    <div class="suggestion-content">
                        <div class="suggestion-title">${this.highlightMatch(match.title, query)}</div>
                        <div class="suggestion-meta">
                            <span class="suggestion-source">${match.source}</span>
                            <span class="suggestion-lang">${match.lang.toUpperCase()}</span>
                        </div>
                    </div>
                </div>
            `).join('');
            
            // Add click handlers
            this.suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', () => {
                    const url = item.dataset.url;
                    if (url) {
                        window.open(url, '_blank');
                        this.hideSuggestions();
                    }
                });
                
                item.addEventListener('mouseenter', () => {
                    this.selectedIndex = parseInt(item.dataset.index);
                    this.updateSelection(this.suggestionsContainer.querySelectorAll('.suggestion-item'));
                });
            });
        }
        
        this.suggestionsContainer.style.display = 'block';
        this.selectedIndex = 0;
    },
    
    hideSuggestions() {
        if (this.suggestionsContainer) {
            this.suggestionsContainer.style.display = 'none';
        }
        this.selectedIndex = -1;
    },
    
    findMatches(query) {
        const lowerQuery = query.toLowerCase();
        return this.resources
            .filter(r => {
                const titleMatch = r.title.toLowerCase().includes(lowerQuery);
                const descMatch = r.desc.toLowerCase().includes(lowerQuery);
                const sourceMatch = r.source.toLowerCase().includes(lowerQuery);
                const categoryMatch = r.category.toLowerCase().includes(lowerQuery);
                return titleMatch || descMatch || sourceMatch || categoryMatch;
            })
            .slice(0, this.maxSuggestions);
    },
    
    highlightMatch(text, query) {
        const regex = new RegExp(`(${this.escapeRegex(query)})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    },
    
    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    },
    
    updateSelection(items) {
        items.forEach((item, index) => {
            item.classList.toggle('selected', index === this.selectedIndex);
        });
        
        // Scroll selected item into view
        const selected = items[this.selectedIndex];
        if (selected) {
            selected.scrollIntoView({ block: 'nearest' });
        }
    },
    
    getCategoryIcon(category) {
        const icons = {
            '📖 官方资源': '📖',
            '☁️ 云平台部署': '☁️',
            '🏁 入门部署': '🚀',
            '📱 平台接入': '📱',
            '📹 视频教程': '🎬',
            '🔬 深度文章': '🔬',
            '🧩 技能开发': '🧩',
            '🔧 工具与插件': '🔧',
            '💡 玩法与场景': '💡'
        };
        return icons[category] || '📄';
    },
    
    // Search history management
    getSearchHistory() {
        return JSON.parse(localStorage.getItem('search_history') || '[]');
    },
    
    addToHistory(query) {
        if (!query.trim()) return;
        let history = this.getSearchHistory();
        history = history.filter(h => h !== query);
        history.unshift(query);
        history = history.slice(0, 10);
        localStorage.setItem('search_history', JSON.stringify(history));
    },
    
    clearHistory() {
        localStorage.removeItem('search_history');
    },
    
    // Quick search by category
    quickSearch(category) {
        if (this.searchInput) {
            this.searchInput.value = category;
            this.searchInput.dispatchEvent(new Event('input'));
            this.searchInput.focus();
        }
    }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Will be initialized by app.js with resources data
});

// Export for use in other modules
window.SearchEnhanced = SearchEnhanced;
