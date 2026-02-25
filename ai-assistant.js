// AI Assistant JavaScript
class AIAssistant {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.chatInput = document.getElementById('chatInput');
        this.sendBtn = document.getElementById('sendBtn');
        this.voiceBtn = document.getElementById('voiceBtn');
        this.voiceRecording = document.getElementById('voiceRecording');
        this.voiceCancel = document.getElementById('voiceCancel');
        this.typingIndicator = document.getElementById('typingIndicator');
        this.quickQuestions = document.getElementById('quickQuestions');
        
        this.recognition = null;
        this.isRecording = false;
        this.messageHistory = [];
        
        // 知识库
        this.responses = {
            'openclaw': `OpenClaw 是一个开源的 AI 助理平台，让你拥有一个全天候在线的私人助理。

**核心特点：**
- 🤖 多平台接入（Telegram、Discord、飞书等）
- 🛠️ 1715+ 社区技能
- 🔒 完全自托管，数据自主
- 💡 支持自定义 Agent 和技能开发

你可以把它理解为"可以自己动手打造的 ChatGPT"，而且完全免费开源！`,
            
            'install': `安装 OpenClaw 非常简单！以下是几种方式：

**方式一：使用 Docker（推荐）**
\`\`\`bash
docker run -d --name openclaw \
  -p 3000:3000 \
  -v openclaw-data:/data \
  openclaw/openclaw:latest
\`\`\`

**方式二：使用 npm**
\`\`\`bash
npm install -g openclaw
openclaw init
\`\`\`

详细安装指南请查看<a href="learning/day2.html">Day 2: 环境搭建</a>`,
            
            'platform': `OpenClaw 支持超多的通讯平台！

**即时通讯：**
- Telegram（最常用）
- Discord
- WhatsApp
- Signal
- Slack
- 飞书（Lark）
- 钉钉
- 企业微信

你可以同时在多个平台上使用同一个 OpenClaw 助理！`,
            
            'skill': `开发 OpenClaw 技能非常简单！

**基本步骤：**

1. **创建技能目录**
\`\`\`bash
mkdir my-skill
cd my-skill
\`\`\`

2. **编写 SKILL.md**
描述技能功能和工具

3. **实现工具函数**
使用 JavaScript 实现具体逻辑

4. **发布到 ClawHub**
\`\`\`bash
clawhub publish
\`\`\`

详细教程请查看<a href="learning/day6.html">Day 6: 技能开发</a>`,
            
            'default': `抱歉，我暂时无法回答这个问题。不过你可以：

1. 📚 查看<a href="index.html#resources">资源库</a>寻找答案
2. 📖 访问<a href="learning/day1.html">7天学习路径</a>
3. 🔍 使用<a href="skills-browser.html">技能浏览器</a>
4. 💬 在群里问其他小伙伴

或者换个方式提问试试？`
        };
        
        this.init();
    }
    
    init() {
        this.loadMessageHistory();
        this.bindEvents();
        this.initSpeechRecognition();
        this.scrollToBottom();
    }
    
    bindEvents() {
        // 发送消息
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        // 语音输入
        this.voiceBtn.addEventListener('click', () => this.toggleVoiceInput());
        this.voiceCancel.addEventListener('click', () => this.stopVoiceInput());
        
        // 快速问题
        document.querySelectorAll('.quick-question-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const question = btn.dataset.question;
                this.chatInput.value = question;
                this.sendMessage();
            });
        });
    }
    
    async sendMessage() {
        const message = this.chatInput.value.trim();
        if (!message) return;
        
        // 添加用户消息
        this.addMessage(message, 'user');
        this.chatInput.value = '';
        
        // 隐藏快速问题
        if (this.quickQuestions) {
            this.quickQuestions.style.display = 'none';
        }
        
        // 显示输入指示器
        this.showTypingIndicator();
        
        // 获取AI响应
        await this.simulateAIResponse(message);
    }
    
    addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        
        const avatar = type === 'user' ? '👤' : '🦞';
        const time = new Date().toLocaleTimeString('zh-CN', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <span>${avatar}</span>
            </div>
            <div class="message-content">
                <div class="message-bubble">${this.formatMessage(content)}</div>
                <span class="message-time">${time}</span>
            </div>
        `;
        
        this.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
        
        // 保存到历史
        this.messageHistory.push({ type, content, time });
        this.saveMessageHistory();
    }
    
    formatMessage(content) {
        // 转义HTML
        content = content.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        
        // 处理代码块
        content = content.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
        
        // 处理行内代码
        content = content.replace(/`([^`]+)`/g, '<code>$1</code>');
        
        // 处理链接
        content = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
        
        // 处理换行
        content = content.replace(/\n/g, '<br>');
        
        // 处理加粗
        content = content.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        
        return content;
    }
    
    showTypingIndicator() {
        if (this.typingIndicator) {
            this.typingIndicator.classList.remove('hidden');
            this.scrollToBottom();
        }
    }
    
    hideTypingIndicator() {
        if (this.typingIndicator) {
            this.typingIndicator.classList.add('hidden');
        }
    }
    
    async simulateAIResponse(userMessage) {
        // 模拟网络延迟
        await this.delay(1000 + Math.random() * 1000);
        
        const response = this.generateResponse(userMessage);
        this.hideTypingIndicator();
        this.addMessage(response, 'assistant');
    }
    
    generateResponse(message) {
        const lowerMsg = message.toLowerCase();
        
        // 智能关键词匹配
        if (lowerMsg.includes('什么是') || lowerMsg.includes('介绍') || lowerMsg.includes('openclaw')) {
            return this.responses['openclaw'];
        }
        
        if (lowerMsg.includes('安装') || lowerMsg.includes('部署') || lowerMsg.includes('搭建')) {
            return this.responses['install'];
        }
        
        if (lowerMsg.includes('平台') || lowerMsg.includes('支持') || lowerMsg.includes('接入')) {
            return this.responses['platform'];
        }
        
        if (lowerMsg.includes('开发') || lowerMsg.includes('skill') || lowerMsg.includes('技能')) {
            return this.responses['skill'];
        }
        
        // 默认回复
        return this.responses['default'];
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    scrollToBottom() {
        if (this.chatMessages) {
            this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        }
    }
    
    loadMessageHistory() {
        const saved = localStorage.getItem('ai-assistant-history');
        if (saved) {
            this.messageHistory = JSON.parse(saved);
            this.messageHistory.forEach(msg => {
                this.addMessage(msg.content, msg.type);
            });
        }
    }
    
    saveMessageHistory() {
        localStorage.setItem('ai-assistant-history', JSON.stringify(this.messageHistory));
    }
    
    // 语音输入功能
    initSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.lang = 'zh-CN';
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.chatInput.value = transcript;
                this.stopVoiceInput();
                this.sendMessage();
            };
            
            this.recognition.onerror = () => {
                this.stopVoiceInput();
                alert('语音识别出错，请重试');
            };
        }
    }
    
    toggleVoiceInput() {
        if (!this.recognition) {
            alert('您的浏览器不支持语音识别');
            return;
        }
        
        if (this.isRecording) {
            this.stopVoiceInput();
        } else {
            this.startVoiceInput();
        }
    }
    
    startVoiceInput() {
        this.isRecording = true;
        if (this.voiceRecording) {
            this.voiceRecording.classList.remove('hidden');
        }
        if (this.voiceBtn) {
            this.voiceBtn.classList.add('recording');
        }
        this.recognition.start();
    }
    
    stopVoiceInput() {
        this.isRecording = false;
        if (this.voiceRecording) {
            this.voiceRecording.classList.add('hidden');
        }
        if (this.voiceBtn) {
            this.voiceBtn.classList.remove('recording');
        }
        if (this.recognition) {
            this.recognition.stop();
        }
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    new AIAssistant();
});
