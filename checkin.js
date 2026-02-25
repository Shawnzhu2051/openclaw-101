// Checkin System JavaScript
class CheckinSystem {
    constructor() {
        this.currentDate = new Date();
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();
        this.selectedDuration = 60;
        this.timerInterval = null;
        this.timerSeconds = 0;
        this.isTimerRunning = false;
        
        // 徽章定义
        this.badges = [
            { id: 'first', name: '初次打卡', icon: '🌱', desc: '完成第一次打卡', condition: (stats) => stats.totalDays >= 1 },
            { id: 'streak3', name: '连续3天', icon: '🔥', desc: '连续打卡3天', condition: (stats) => stats.streak >= 3 },
            { id: 'streak7', name: '连续7天', icon: '⚡', desc: '连续打卡7天', condition: (stats) => stats.streak >= 7 },
            { id: 'streak30', name: '连续30天', icon: '🌟', desc: '连续打卡30天', condition: (stats) => stats.streak >= 30 },
            { id: 'total7', name: '累计7天', icon: '📚', desc: '累计打卡7天', condition: (stats) => stats.totalDays >= 7 },
            { id: 'total30', name: '累计30天', icon: '📖', desc: '累计打卡30天', condition: (stats) => stats.totalDays >= 30 },
            { id: 'total100', name: '百日坚持', icon: '🏆', desc: '累计打卡100天', condition: (stats) => stats.totalDays >= 100 },
            { id: 'hours10', name: '学习10小时', icon: '⏱️', desc: '累计学习10小时', condition: (stats) => stats.totalHours >= 10 },
            { id: 'hours50', name: '学习50小时', icon: '⏰', desc: '累计学习50小时', condition: (stats) => stats.totalHours >= 50 },
            { id: 'hours100', name: '学习100小时', icon: '🎯', desc: '累计学习100小时', condition: (stats) => stats.totalHours >= 100 },
            { id: 'earlybird', name: '早起鸟', icon: '🐦', desc: '在早上8点前打卡', condition: (stats) => stats.earlyBird },
            { id: 'nightowl', name: '夜猫子', icon: '🦉', desc: '在晚上10点后打卡', condition: (stats) => stats.nightOwl }
        ];
        
        this.init();
    }
    
    init() {
        this.loadData();
        this.renderCalendar();
        this.updateStats();
        this.renderBadges();
        this.renderHistory();
        this.checkTodayStatus();
        this.bindEvents();
    }
    
    loadData() {
        const saved = localStorage.getItem('openclaw-checkin-data');
        if (saved) {
            this.data = JSON.parse(saved);
        } else {
            this.data = {
                checkins: [],
                earnedBadges: [],
                stats: {
                    streak: 0,
                    totalDays: 0,
                    totalHours: 0,
                    earlyBird: false,
                    nightOwl: false
                }
            };
        }
    }
    
    saveData() {
        localStorage.setItem('openclaw-checkin-data', JSON.stringify(this.data));
    }
    
    bindEvents() {
        // 日历导航
        document.getElementById('prevMonth').addEventListener('click', () => {
            this.currentMonth--;
            if (this.currentMonth < 0) {
                this.currentMonth = 11;
                this.currentYear--;
            }
            this.renderCalendar();
        });
        
        document.getElementById('nextMonth').addEventListener('click', () => {
            this.currentMonth++;
            if (this.currentMonth > 11) {
                this.currentMonth = 0;
                this.currentYear++;
            }
            this.renderCalendar();
        });
        
        // 学习时长选择
        document.querySelectorAll('.duration-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.duration-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.selectedDuration = parseInt(btn.dataset.duration);
            });
        });
        
        // 打卡按钮
        document.getElementById('checkinBtn').addEventListener('click', () => this.handleCheckin());
        
        // 计时器
        document.getElementById('timerStart').addEventListener('click', () => this.startTimer());
        document.getElementById('timerPause').addEventListener('click', () => this.pauseTimer());
        document.getElementById('timerReset').addEventListener('click', () => this.resetTimer());
    }
    
    renderCalendar() {
        const calendarTitle = document.getElementById('calendarTitle');
        const calendarDays = document.getElementById('calendarDays');
        
        calendarTitle.textContent = `${this.currentYear}年${this.currentMonth + 1}月`;
        calendarDays.innerHTML = '';
        
        const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        const today = new Date();
        
        // 空白格子
        for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day empty';
            calendarDays.appendChild(emptyDay);
        }
        
        // 日期格子
        for (let day = 1; day <= daysInMonth; day++) {
            const dayEl = document.createElement('div');
            dayEl.className = 'calendar-day';
            dayEl.textContent = day;
            
            const dateStr = this.formatDate(new Date(this.currentYear, this.currentMonth, day));
            const checkin = this.data.checkins.find(c => c.date === dateStr);
            
            // 检查是否是今天
            if (this.currentYear === today.getFullYear() &&
                this.currentMonth === today.getMonth() &&
                day === today.getDate()) {
                dayEl.classList.add('today');
            }
            
            // 检查是否已打卡
            if (checkin) {
                dayEl.classList.add('checked');
                
                // 检查是否是连续打卡
                const prevDate = new Date(this.currentYear, this.currentMonth, day - 1);
                const prevDateStr = this.formatDate(prevDate);
                const prevCheckin = this.data.checkins.find(c => c.date === prevDateStr);
                if (prevCheckin || day === 1) {
                    dayEl.classList.add('streak');
                }
            }
            
            // 检查是否是未来日期
            const currentDate = new Date(this.currentYear, this.currentMonth, day);
            if (currentDate > today) {
                dayEl.classList.add('future');
            }
            
            calendarDays.appendChild(dayEl);
        }
    }
    
    checkTodayStatus() {
        const today = this.formatDate(new Date());
        const todayCheckin = this.data.checkins.find(c => c.date === today);
        
        const checkinStatus = document.getElementById('checkinStatus');
        const checkinForm = document.getElementById('checkinForm');
        const checkinSuccess = document.getElementById('checkinSuccess');
        
        if (todayCheckin) {
            checkinStatus.style.display = 'none';
            checkinForm.style.display = 'none';
            checkinSuccess.classList.remove('hidden');
            
            const details = document.getElementById('checkinDetails');
            details.innerHTML = `
                <p><strong>学习内容：</strong> ${this.getContentName(todayCheckin.content)}</p>
                <p><strong>学习时长：</strong> ${todayCheckin.duration} 分钟</p>
                ${todayCheckin.note ? `<p><strong>学习笔记：</strong> ${todayCheckin.note}</p>` : ''}
            `;
        }
    }
    
    handleCheckin() {
        const content = document.getElementById('learningContent').value;
        const note = document.getElementById('learningNote').value;
        
        if (!content) {
            this.showToast('请选择学习内容');
            return;
        }
        
        const today = this.formatDate(new Date());
        const hour = new Date().getHours();
        
        const checkin = {
            date: today,
            content: content,
            duration: this.selectedDuration,
            note: note,
            timestamp: Date.now()
        };
        
        this.data.checkins.push(checkin);
        
        // 更新统计
        this.updateStatsData(hour);
        
        // 检查徽章
        this.checkBadges();
        
        // 保存数据
        this.saveData();
        
        // 更新UI
        this.renderCalendar();
        this.updateStats();
        this.renderBadges();
        this.renderHistory();
        this.checkTodayStatus();
        
        this.showToast('打卡成功！继续保持！');
    }
    
    updateStatsData(hour) {
        const stats = this.data.stats;
        
        // 计算连续打卡
        let streak = 0;
        const today = new Date();
        
        for (let i = 0; i < 365; i++) {
            const checkDate = new Date(today);
            checkDate.setDate(checkDate.getDate() - i);
            const dateStr = this.formatDate(checkDate);
            
            const hasCheckin = this.data.checkins.some(c => c.date === dateStr);
            if (hasCheckin) {
                streak++;
            } else if (i > 0) {
                break;
            }
        }
        
        stats.streak = streak;
        stats.totalDays = this.data.checkins.length;
        stats.totalHours = Math.round(
            this.data.checkins.reduce((sum, c) => sum + c.duration, 0) / 60 * 10
        ) / 10;
        
        if (hour < 8) stats.earlyBird = true;
        if (hour >= 22) stats.nightOwl = true;
    }
    
    updateStats() {
        const stats = this.data.stats;
        document.getElementById('streakCount').textContent = stats.streak;
        document.getElementById('totalDays').textContent = stats.totalDays;
        document.getElementById('totalHours').textContent = stats.totalHours;
        document.getElementById('badgeCount').textContent = this.data.earnedBadges.length;
    }
    
    checkBadges() {
        const stats = this.data.stats;
        let newBadges = [];
        
        this.badges.forEach(badge => {
            if (!this.data.earnedBadges.includes(badge.id) && badge.condition(stats)) {
                this.data.earnedBadges.push(badge.id);
                newBadges.push(badge);
            }
        });
        
        if (newBadges.length > 0) {
            this.showBadgeNotification(newBadges);
        }
    }
    
    renderBadges() {
        const badgesGrid = document.getElementById('badgesGrid');
        badgesGrid.innerHTML = '';
        
        this.badges.forEach(badge => {
            const badgeEl = document.createElement('div');
            badgeEl.className = 'badge-item';
            if (this.data.earnedBadges.includes(badge.id)) {
                badgeEl.classList.add('earned');
            }
            
            badgeEl.innerHTML = `
                <div class="badge-icon">${badge.icon}</div>
                <div class="badge-name">${badge.name}</div>
            `;
            
            // 添加 tooltip 事件
            badgeEl.addEventListener('mouseenter', (e) => this.showTooltip(e, badge.desc));
            badgeEl.addEventListener('mouseleave', () => this.hideTooltip());
            
            badgesGrid.appendChild(badgeEl);
        });
    }
    
    showTooltip(event, text) {
        let tooltip = document.querySelector('.badge-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.className = 'badge-tooltip';
            document.body.appendChild(tooltip);
        }
        
        tooltip.textContent = text;
        tooltip.classList.add('visible');
        
        const rect = event.target.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 8}px`;
    }
    
    hideTooltip() {
        const tooltip = document.querySelector('.badge-tooltip');
        if (tooltip) {
            tooltip.classList.remove('visible');
        }
    }
    
    renderHistory() {
        const historyList = document.getElementById('historyList');
        historyList.innerHTML = '';
        
        if (this.data.checkins.length === 0) {
            historyList.innerHTML = `
                <div class="history-empty">
                    <div class="history-empty-icon">📝</div>
                    <p>还没有打卡记录，开始你的第一次学习吧！</p>
                </div>
            `;
            return;
        }
        
        // 按日期倒序
        const sortedCheckins = [...this.data.checkins].sort((a, b) => b.timestamp - a.timestamp);
        
        sortedCheckins.slice(0, 10).forEach((checkin, index) => {
            const date = new Date(checkin.date);
            const item = document.createElement('div');
            item.className = 'history-item';
            
            item.innerHTML = `
                <div class="history-date">
                    <span class="history-day">${date.getDate()}</span>
                    <span class="history-month">${date.getMonth() + 1}月</span>
                </div>
                <div class="history-content">
                    <div class="history-title">${this.getContentName(checkin.content)}</div>
                    ${checkin.note ? `<div class="history-note">${checkin.note}</div>` : ''}
                </div>
                <div class="history-meta">
                    <span class="history-duration">⏱️ ${checkin.duration}分钟</span>
                    ${index === 0 ? '<span class="history-streak">最新</span>' : ''}
                </div>
            `;
            
            historyList.appendChild(item);
        });
    }
    
    // 计时器功能
    startTimer() {
        if (this.isTimerRunning) return;
        
        this.isTimerRunning = true;
        document.getElementById('timerDisplay').classList.add('running');
        document.getElementById('timerStart').classList.add('hidden');
        document.getElementById('timerPause').classList.remove('hidden');
        
        this.timerInterval = setInterval(() => {
            this.timerSeconds++;
            this.updateTimerDisplay();
        }, 1000);
    }
    
    pauseTimer() {
        this.isTimerRunning = false;
        clearInterval(this.timerInterval);
        document.getElementById('timerDisplay').classList.remove('running');
        document.getElementById('timerStart').classList.remove('hidden');
        document.getElementById('timerPause').classList.add('hidden');
    }
    
    resetTimer() {
        this.pauseTimer();
        this.timerSeconds = 0;
        this.updateTimerDisplay();
    }
    
    updateTimerDisplay() {
        const hours = Math.floor(this.timerSeconds / 3600);
        const minutes = Math.floor((this.timerSeconds % 3600) / 60);
        const seconds = this.timerSeconds % 60;
        
        const display = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timerDisplay').textContent = display;
    }
    
    // 辅助方法
    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    
    getContentName(value) {
        const contents = {
            'day1': 'Day 1: 初识 OpenClaw',
            'day2': 'Day 2: 环境搭建',
            'day3': 'Day 3: 平台接入',
            'day4': 'Day 4: 技能探索',
            'day5': 'Day 5: 记忆与个性化',
            'day6': 'Day 6: 技能开发',
            'day7': 'Day 7: 进阶与生产',
            'other': '其他'
        };
        return contents[value] || value;
    }
    
    showToast(message) {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.querySelector('.toast-message').textContent = message;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3000);
        }
    }
    
    showBadgeNotification(badges) {
        badges.forEach((badge, index) => {
            setTimeout(() => {
                this.showToast(`🎉 获得新徽章：${badge.name}！`);
            }, index * 500);
        });
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    new CheckinSystem();
});