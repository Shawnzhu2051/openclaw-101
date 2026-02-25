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
        
        this.init();
    }
    
    init() {
        // 加载历史消息
        this.loadMessageHistory();
        
        // 绑定事件
        this.bindEvents();
        
        // 初始化语音识别
        this.initSpeechRecognition();
        
        // 滚动到底部
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
    
    initSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.lang = 'zh-CN';
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            
            this.recognition.onstart = () => {
                this.isRecording = true;
                this.voiceBtn.classList.add('recording');
                this.voiceRecording.classList.remove('hidden');
            };
            
            this.recognition.onend = () => {
                this.isRecording = false;
                this.voiceBtn.classList.remove('recording');
                this.voiceRecording.classList.add('hidden');
            };
            
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.chatInput.value = transcript;
                this.sendMessage();
            };
            
            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                this.showToast('语音识别出错，请重试');
                this.stopVoiceInput();
            };
        } else {
            this.voiceBtn.style.display = 'none';
        }
    }
    
    toggleVoiceInput() {
        if (!this.recognition) {
            this.showToast('您的浏览器不支持语音识别');
            return;
        }
        
        if (this.isRecording) {
            this.stopVoiceInput();
        } else {
            this.recognition.start();
        }
    }
    
    stopVoiceInput() {
        if (this.recognition && this.isRecording) {
            this.recognition.stop();
        }
    }
    
    async sendMessage() {
        const message = this.chatInput.value.trim();
        if (!message) return;
        
        // 添加用户消息
        this.addMessage(message, 'user');
        this.chatInput.value = '';
        
        // 隐藏快速问题
        this.quickQuestions.style.display = 'none';
        
        // 显示输入指示器
        this.showTypingIndicator();
        
        // 模拟AI响应
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
        
        // 处理代码块
        const formattedContent = this.formatMessage(content);
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <span>${avatar}</span>
            </div>
            <div class="message-content">
                <div class="message-bubble">${formattedContent}</div>
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
        
        // 处理列表
        content = content.replace(/^- (.+)$/gm, '<li>$1</li>');
        content = content.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');
        
        return content;
    }
    
    showTypingIndicator() {
        this.typingIndicator.classList.remove('hidden');
        this.scrollToBottom();
    }
    
    hideTypingIndicator() {
        this.typingIndicator.classList.add('hidden');
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
        
        // 知识库响应
        const responses = {
            '什么是 openclaw': `OpenClaw 是一个开源的 AI 助理平台，让你拥有一个全天候在线的私人助理。

**核心特点：**
- 🤖 多平台接入（Telegram、Discord、飞书等）
- 🛠️ 1715+ 社区技能
- 🔒 完全自托管，数据自主
- 💡 支持自定义 Agent 和技能开发

你可以把它理解为"可以自己动手打造的 ChatGPT"，而且完全免费开源！`,
            
            '如何安装': `安装 OpenClaw 非常简单！以下是几种方式：

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

**方式三：从源码安装**
\`\`\`bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw
npm install
npm run dev
\`\`\`

详细安装指南请查看<a href="learning/day2.html">Day 2: 环境搭建</a>`,
            
            '支持哪些平台': `OpenClaw 支持超多的通讯平台！

**即时通讯：**
- Telegram（最常用）
- Discord
- WhatsApp
- Signal
- Slack
- 飞书（Lark）
- 钉钉
- 企业微信

**其他集成：**
- Web 界面
- REST API
- WebSocket
- Email

你可以同时在多个平台上使用同一个 OpenClaw 助理！`,
            
            '如何开发技能': `开发 OpenClaw 技能非常简单！

**基本步骤：**

1. **创建技能目录**
\`\`\`bash
mkdir my-skill
cd my-skill
\`\`\`

2. **编写 SKILL.md**
每个技能需要一个 SKILL.md 文件来描述功能：
\`\`\`markdown
# My Skill

## 功能
描述这个技能做什么

## 工具
- tool_name: 工具描述
\`\`\`

3. **实现工具函数**
使用 JavaScript/TypeScript 实现具体的工具逻辑

4. **发布到 ClawHub**
\`\`\`bash
clawhub publish
\`\`\`

详细教程请查看<a href="learning/day6.html">Day 6: 技能开发</a>`,
            
            'claude code': `OpenClaw 和 Claude Code 都是 AI 助理工具，但有明显区别：

| 特性 | OpenClaw | Claude Code |
|------|----------|-------------|
| 开源 | ✅ 完全开源 | ❌ 闭源 |
| 自托管 | ✅ 可以 | ❌ 不可以 |
| 多平台 | ✅ 支持多个聊天平台 | ❌ 仅终端 |
| 技能扩展 | ✅ 1715+ 社区技能 | ❌ 有限 |
| 价格 | ✅ 免费 | 💰 需要 API 费用 |
| 代码能力 | 中等 | 很强 |

**选择建议：**
- 如果你想要一个全能的 AI 助理 → OpenClaw
- 如果你主要做代码开发 → Claude Code
- 也可以两个都用！😄`,
            
            '学习路径': `推荐的学习路径是 7 天掌握 OpenClaw：

**📅 7天学习计划：**

- **Day 1**: 初识 OpenClaw - 了解核心概念
- **Day 2**: 环境搭建 - 本地部署
- **Day 3**: 平台接入 - 连接 Telegram/飞书
- **Day 4**: 技能探索 - 浏览 ClawHub
- **Day 5**: 记忆与个性化 - 配置 MEMORY.md
- **Day 6**: 技能开发 - 开发第一个技能
- **Day 7**: 进阶与生产 - 生产环境部署

每天大约需要 30-60 分钟。完成这个路径后，你就能独立使用和维护 OpenClaw 了！

👉 <a href="index.html#learning-path">查看完整学习路径</a>`,
            
            'skill': `技能（Skill）是 OpenClaw 的核心扩展机制。

**什么是技能？**
技能 = 一组工具 + 配置，让 AI 获得新能力

**热门技能推荐：**
- 🔍 **web-search** - 网页搜索
- 📧 **email** - 发送邮件
- 📅 **calendar** - 日历管理
- 🌤️ **weather** - 天气查询
- 💻 **code-executor** - 代码执行
- 🏠 **home-assistant** - 智能家居

**安装技能：**
\`\`\`bash
npx clawhub@latest install web-search
\`\`\`

👉 <a href="skills-browser.html">浏览全部 1715+ 技能</a>`,
            
            'memory': `OpenClaw 的记忆系统让你拥有"长期记忆"。

**两种记忆方式：**

1. **MEMORY.md** - 长期记忆
   - 存储在文件中
   - 跨会话保持
   - 适合存储偏好、重要信息

2. **AGENTS.md** - Agent 配置
   - 定义 Agent 的人格
   - 设置行为规则
   - 配置可用技能

**示例 MEMORY.md：**
\`\`\`markdown
# 我的记忆

## 偏好
- 语言：中文
- 时区：Asia/Shanghai
- 代码风格：简洁

## 重要日期
- 生日：1月1日
\`\`\`

详细说明请查看<a href="learning/day5.html">Day 5: 记忆与个性化</a>`,
            
            'telegram': `将 OpenClaw 接入 Telegram 非常简单！

**步骤：**

1. **创建 Telegram Bot**
   - 找 @BotFather
   - 发送 /newbot
   - 获取 Bot Token

2. **配置 OpenClaw**
   在 .env 文件中添加：
   \`\`\`
   TELEGRAM_BOT_TOKEN=你的token
   \`\`\`

3. **启动 OpenClaw**
   \`\`\`bash
   npm start
   \`\`\`

4. **开始聊天**
   在 Telegram 中找到你的 Bot，开始对话！

详细教程请查看<a href="learning/day3.html">Day 3: 平台接入</a>`,
            
            'docker': `使用 Docker 部署 OpenClaw 是最简单的方式！

**快速开始：**
\`\`\`bash
# 运行 OpenClaw
docker run -d \
  --name openclaw \
  -p 3000:3000 \
  -v openclaw-data:/data \
  -e OPENAI_API_KEY=你的key \
  openclaw/openclaw:latest

# 查看日志
docker logs -f openclaw
\`\`\`

**使用 Docker Compose：**
\`\`\`yaml
version: '3'
services:
  openclaw:
    image: openclaw/openclaw:latest
    ports:
      - "3000:3000"
    volumes:
      - ./data:/data
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - TELEGRAM_BOT_TOKEN=${TELEGRAM_BOT_TOKEN}
\`\`\`

这样部署后，你的数据会持久化在本地！`,
            
            'api key': `OpenClaw 需要 LLM API Key 才能工作。

**支持的 LLM：**
- OpenAI (GPT-4, GPT-3.5)
- Anthropic (Claude)
- Google (Gemini)
- 本地模型 (Ollama)

**获取 OpenAI API Key：**
1. 访问 https://platform.openai.com
2. 注册/登录账号
3. 进入 API Keys 页面
4. 创建新的 API Key

**配置：**
在 .env 文件中：
\`\`\`
OPENAI_API_KEY=sk-xxxxxxxx
\`\`\`

**省钱技巧：**
- 使用本地模型（Ollama）完全免费
- 使用 GPT-3.5 比 GPT-4 便宜很多
- 设置用量限制防止超支`,
            
            'default': `抱歉，我暂时无法回答这个问题。不过我可以帮你：

1. 📚 查看<a href="index.html#resources">资源库</a>寻找答案
2. 🔍 访问<a href="https://docs.openclaw.ai" target="_blank">官方文档</a>
3. 💬 加入<a href="https://discord.gg/clawd" target="_blank">Discord 社区</a>提问

或者你可以换个方式问，比如：
- "如何安装 OpenClaw？"
- "什么是技能？"
- "支持哪些平台？"`
        };
        
        // 匹配关键词
        for (const [key, response] of Object.entries(responses)) {
            if (key !== 'default' && lowerMsg.includes(key.toLowerCase())) {
                return response;
            }
        }
        
        // 检查是否包含其他关键词
        if (lowerMsg.includes('你好') || lowerMsg.includes('嗨') || lowerMsg.includes('hi')) {
            return '你好！很高兴为你服务 😊 有什么关于 OpenClaw 的问题吗？';
        }
        
        if (lowerMsg.includes('谢谢') || lowerMsg.includes('感谢')) {
            return '不客气！有问题随时问我 👍';
        }
        
        if (lowerMsg.includes('再见') || lowerMsg.includes('拜拜')) {
            return '再见！祝你学习愉快 🎉';
        }
        
        return responses.default;
    }
    
    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    loadMessageHistory() {
        try {
            const history = localStorage.getItem('ai-assistant-history');
            if (history) {
                this.messageHistory = JSON.parse(history);
                // 恢复显示（除了欢迎消息）
                this.messageHistory.forEach(msg => {
                    if (msg.type !== 'welcome') {
                        this.addMessageToDOM(msg.content, msg.type, msg.time);
                    }
                });
            }
        } catch (e) {
            console.error('Failed to load message history:', e);
        }
    }
    
    addMessageToDOM(content, type, time) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        
        const avatar = type === 'user' ? '👤' : '🦞';
        const formattedContent = this.formatMessage(content);
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <span>${avatar}</span>
            </div>
            <div class="message-content">
                <div class="message-bubble">${formattedContent}</div>
                <span class="message-time">${time}</span>
            </div>
        `;
        
        this.chatMessages.appendChild(messageDiv);
    }
    
    saveMessageHistory() {
        try {
            // 只保留最近 50 条消息
            const recentHistory = this.messageHistory.slice(-50);
            localStorage.setItem('ai-assistant-history', JSON.stringify(recentHistory));
        } catch (e) {
            console.error('Failed to save message history:', e);
        }
    }
    
    showToast(message) {
        // 复用现有的 toast 组件
        const toast = document.getElementById('toast');
        if (toast) {
            toast.querySelector('.toast-message').textContent = message;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3000);
        }
    }
}

// 浮动 AI 按钮（用于其他页面）
class FloatingAIAssistant {
    constructor() {
        this.button = null;
        this.widget = null;
        this.isOpen = false;
        this.init();
    }
    
    init() {
        // 检查当前是否在 AI 助手页面
        if (window.location.pathname.includes('ai-assistant')) {
            return;
        }
        
        this.createButton();
        this.createWidget();
        this.bindEvents();
    }
    
    createButton() {
        this.button = document.createElement('button');
        this.button.className = 'floating-ai-btn pulse';
        this.button.innerHTML = '🤖';
        this.button.title = 'AI 助手';
        document.body.appendChild(this.button);
    }
    
    createWidget() {
        this.widget = document.createElement('div');
        this.widget.className = 'ai-chat-widget';
        this.widget.innerHTML = `
            <div class="ai-widget-header">
                <div class="ai-widget-title">
                    <span>🦞</span>
                    <span>AI 助手</span>
                </div>
                <button class="ai-widget-close">✕</button>
            </div>
            <div class="ai-widget-messages">
                <div class="message assistant-message">
                    <div class="message-avatar"><span>🦞</span></div>
                    <div class="message-content">
                        <div class="message-bubble">
                            你好！我是 OpenClaw 101 的 AI 助手。有什么可以帮你的吗？
                        </div>
                    </div>
                </div>
            </div>
            <div class="ai-widget-input">
                <input type="text" placeholder="输入问题...">
                <button class="ai-widget-send">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>
            </div>
        `;
        document.body.appendChild(this.widget);
    }
    
    bindEvents() {
        this.button.addEventListener('click', () => this.toggle());
        this.widget.querySelector('.ai-widget-close').addEventListener('click', () => this.close());
        
        const input = this.widget.querySelector('input');
        const sendBtn = this.widget.querySelector('.ai-widget-send');
        
        sendBtn.addEventListener('click', () => this.sendMessage(input.value));
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage(input.value);
        });
    }
    
    toggle() {
        this.isOpen = !this.isOpen;
        this.widget.classList.toggle('open', this.isOpen);
        this.button.classList.toggle('pulse', !this.isOpen);
    }
    
    close() {
        this.isOpen = false;
        this.widget.classList.remove('open');
        this.button.classList.add('pulse');
    }
    
    async sendMessage(text) {
        if (!text.trim()) return;
        
        const input = this.widget.querySelector('input');
        const messages = this.widget.querySelector('.ai-widget-messages');
        
        // 添加用户消息
        const userMsg = document.createElement('div');
        userMsg.className = 'message user-message';
        userMsg.innerHTML = `
            <div class="message-avatar"><span>👤</span></div>
            <div class="message-content">
                <div class="message-bubble">${text}</div>
            </div>
        `;
        messages.appendChild(userMsg);
        
        input.value = '';
        messages.scrollTop = messages.scrollHeight;
        
        // 模拟 AI 响应
        await new Promise(r => setTimeout(r, 1000));
        
        const aiMsg = document.createElement('div');
        aiMsg.className = 'message assistant-message';
        aiMsg.innerHTML = `
            <div class="message-avatar"><span>🦞</span></div>
            <div class="message-content">
                <div class="message-bubble">
                    这个问题比较复杂，建议前往 <a href="ai-assistant.html">AI 助手页面</a> 获取详细回答！
                </div>
            </div>
        `;
        messages.appendChild(aiMsg);
        messages.scrollTop = messages.scrollHeight;
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 在 AI 助手页面初始化完整版
    if (document.getElementById('chatMessages')) {
        new AIAssistant();
    }
    // 在其他页面初始化浮动按钮
    else {
        new FloatingAIAssistant();
    }
});