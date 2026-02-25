// Favorites Management
const FavoritesManager = {
    favorites: JSON.parse(localStorage.getItem('openclaw_favorites') || '[]'),
    
    init() {
        this.updateFavoritesCount();
        this.setupEventListeners();
    },
    
    // Add a resource to favorites
    add(resourceId) {
        if (!this.favorites.includes(resourceId)) {
            this.favorites.push(resourceId);
            this.save();
            this.updateUI(resourceId, true);
            this.showToast('已添加到收藏');
            return true;
        }
        return false;
    },
    
    // Remove a resource from favorites
    remove(resourceId) {
        const index = this.favorites.indexOf(resourceId);
        if (index > -1) {
            this.favorites.splice(index, 1);
            this.save();
            this.updateUI(resourceId, false);
            this.showToast('已取消收藏');
            return true;
        }
        return false;
    },
    
    // Toggle favorite status
    toggle(resourceId) {
        if (this.isFavorite(resourceId)) {
            this.remove(resourceId);
        } else {
            this.add(resourceId);
        }
    },
    
    // Check if a resource is favorited
    isFavorite(resourceId) {
        return this.favorites.includes(parseInt(resourceId));
    },
    
    // Get all favorites
    getAll() {
        return this.favorites;
    },
    
    // Save to localStorage
    save() {
        localStorage.setItem('openclaw_favorites', JSON.stringify(this.favorites));
        this.updateFavoritesCount();
    },
    
    // Update UI elements for a specific resource
    updateUI(resourceId, isFavorited) {
        const buttons = document.querySelectorAll(`[data-favorite-id="${resourceId}"]`);
        buttons.forEach(btn => {
            btn.innerHTML = isFavorited ? this.getFilledHeartIcon() : this.getHeartIcon();
            btn.classList.toggle('favorited', isFavorited);
        });
    },
    
    // Update favorites count badge
    updateFavoritesCount() {
        const countElements = document.querySelectorAll('.favorites-count');
        countElements.forEach(el => {
            el.textContent = this.favorites.length;
            el.style.display = this.favorites.length > 0 ? 'flex' : 'none';
        });
    },
    
    // Setup event listeners
    setupEventListeners() {
        document.addEventListener('click', (e) => {
            const favoriteBtn = e.target.closest('.favorite-btn');
            if (favoriteBtn) {
                e.preventDefault();
                e.stopPropagation();
                const resourceId = favoriteBtn.dataset.favoriteId;
                if (resourceId) {
                    this.toggle(parseInt(resourceId));
                }
            }
        });
    },
    
    // Get heart icon (outline)
    getHeartIcon() {
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>`;
    },
    
    // Get filled heart icon
    getFilledHeartIcon() {
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>`;
    },
    
    // Show toast notification
    showToast(message) {
        const toast = document.getElementById('toast');
        if (toast) {
            const toastMessage = toast.querySelector('.toast-message');
            if (toastMessage) {
                toastMessage.textContent = message;
            }
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2000);
        }
    },
    
    // Create favorite button HTML
    createFavoriteButton(resourceId) {
        const isFavorited = this.isFavorite(resourceId);
        return `<button class="favorite-btn ${isFavorited ? 'favorited' : ''}" data-favorite-id="${resourceId}" aria-label="${isFavorited ? '取消收藏' : '添加收藏'}">
            ${isFavorited ? this.getFilledHeartIcon() : this.getHeartIcon()}
        </button>`;
    },
    
    // Filter resources to show only favorites
    filterFavorites(resources) {
        return resources.filter(r => this.favorites.includes(r.id));
    },
    
    // Clear all favorites
    clearAll() {
        if (confirm('确定要清空所有收藏吗？')) {
            this.favorites = [];
            this.save();
            document.querySelectorAll('.favorite-btn').forEach(btn => {
                btn.innerHTML = this.getHeartIcon();
                btn.classList.remove('favorited');
            });
            this.showToast('已清空所有收藏');
            return true;
        }
        return false;
    }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    FavoritesManager.init();
});

// Export for use in other modules
window.FavoritesManager = FavoritesManager;
