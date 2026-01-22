// ==================== 性能优化：延迟加载 ====================
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initLoadingScreen();
    initScrollProgress();
    initNavbar();
    initProductFilters();
    initCart();
    initScrollAnimations();
    initMobileMenu();
    initContactForm();
    initHeroCarousel();
    initBackToTop();
    initKeyboardShortcuts();
    initQuickView();
    initWishlist();
    initProductCompare();
    initBlogFilters();
    initChatWidget(); // 初始化聊天窗口
});

// ==================== 导航栏滚动效果 ====================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== 产品筛选功能 ====================
function initProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 更新按钮状态
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // 筛选产品
            productCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    // 添加淡入动画
                    card.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ==================== 购物车功能 ====================
function initCart() {
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    const addToCartBtns = document.querySelectorAll('.add-to-cart, .add-to-cart-featured, .add-to-cart-gallery');

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();

            // 保存原始按钮文本
            const originalText = this.textContent;

            // 增加购物车数量
            cartCount++;
            cartCountElement.textContent = cartCount;

            // 添加动画效果
            const productCard = this.closest('.product-card, .featured-card, .gallery-product-card');
            if (productCard) {
                productCard.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    productCard.style.transform = '';
                }, 200);
            }

            // 按钮反馈
            this.textContent = 'Added ✓';
            this.style.background = '#28a745';

            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 1500);

            // 购物车图标动画
            const cartBtn = document.querySelector('.cart-btn');
            cartBtn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartBtn.style.transform = '';
            }, 300);
        });
    });

    // 购物车按钮点击
    document.querySelector('.cart-btn').addEventListener('click', () => {
        alert(`You have ${cartCount} item(s) in your cart\n\nThis is a demo version. Full shopping cart functionality coming soon...`);
    });
}

// ==================== 滚动动画 ====================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll(
        '.heritage-card, .product-card, .timeline-item, .contact-content > *'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ==================== 移动端菜单 ====================
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // 切换图标
        if (navMenu.classList.contains('active')) {
            menuToggle.textContent = '✕';
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.right = '0';
            navMenu.style.background = 'rgba(245, 241, 232, 0.98)';
            navMenu.style.padding = '1rem';
            navMenu.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            menuToggle.textContent = '☰';
            navMenu.style.display = 'none';
        }
    });

    // 点击菜单项后关闭菜单
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                menuToggle.textContent = '☰';
                navMenu.style.display = 'none';
            }
        });
    });
}

// ==================== 联系表单 ====================
function initContactForm() {
    const form = document.querySelector('.contact-form form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const name = form.querySelector('input[type="text"]').value;

        // 模拟提交
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert(`Thank you for your message, ${name}!\nWe will get back to you soon.\n\nThis is a demo version. Actual submission requires backend support.`);
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// ==================== 语言切换 ====================
document.querySelector('.lang-switch').addEventListener('click', function() {
    const currentLang = this.textContent;
    if (currentLang === 'EN') {
        this.textContent = '中';
        alert('English version coming soon...\n英文版本即将推出...');
    } else {
        this.textContent = 'EN';
    }
});

// ==================== 性能优化：图片懒加载 ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== 添加淡入动画CSS ====================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// ==================== 性能监控（开发用） ====================
if (window.performance) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`页面加载时间: ${pageLoadTime}ms`);
    });
}

// ==================== 加载屏幕 ====================
function initLoadingScreen() {
    window.addEventListener('load', () => {
        const loadingOverlay = document.querySelector('.loading-overlay');
        if (loadingOverlay) {
            setTimeout(() => {
                loadingOverlay.classList.add('hidden');
                setTimeout(() => {
                    loadingOverlay.remove();
                }, 500);
            }, 800);
        }
    });
}

// ==================== 滚动进度条 ====================
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    }, { passive: true });
}

// ==================== 返回顶部按钮 ====================
function initBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== Hero轮播功能 ====================
function initHeroCarousel() {
    const slides = document.querySelectorAll('.hero-slide');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');

    if (!slides.length) return; // 如果没有轮播元素，直接返回

    let currentSlide = 0;
    let autoPlayInterval;

    // 显示指定的幻灯片
    function showSlide(index) {
        // 移除所有active类
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // 添加active类到当前幻灯片
        slides[index].classList.add('active');
        indicators[index].classList.add('active');

        currentSlide = index;
    }

    // 下一张
    function nextSlide() {
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    // 上一张
    function prevSlide() {
        let prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }

    // 自动播放
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000); // 每5秒切换
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // 按钮事件
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoPlay();
            startAutoPlay(); // 重新开始自动播放
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }

    // 指示器事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            stopAutoPlay();
            startAutoPlay();
        });
    });

    // 键盘控制
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        }
    });

    // 鼠标悬停时暂停自动播放
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopAutoPlay);
        heroSection.addEventListener('mouseleave', startAutoPlay);
    }

    // 启动自动播放
    startAutoPlay();
}

// ==================== 键盘快捷键 ====================
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K: 聚焦搜索（如果有搜索框）
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            // 未来可以添加搜索功能
            console.log('Search shortcut triggered');
        }

        // Escape: 关闭移动菜单
        if (e.key === 'Escape') {
            const navMenu = document.querySelector('.nav-menu');
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.textContent = '☰';
                navMenu.style.display = 'none';
            }
        }

        // 数字键1-6: 快速导航
        if (e.key >= '1' && e.key <= '6' && !e.ctrlKey && !e.metaKey) {
            const sections = ['home', 'featured', 'showcase', 'heritage', 'products', 'contact'];
            const sectionIndex = parseInt(e.key) - 1;
            if (sectionIndex < sections.length) {
                const section = document.getElementById(sections[sectionIndex]);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });
}

// ==================== 产品快速预览 ====================
function initQuickView() {
    const productCards = document.querySelectorAll('.product-card, .featured-card');

    productCards.forEach(card => {
        // 双击产品卡片显示快速预览
        card.addEventListener('dblclick', function() {
            const productName = this.querySelector('.product-name, .featured-name')?.textContent;
            const productPrice = this.querySelector('.product-price, .featured-price')?.textContent;
            const productDesc = this.querySelector('.product-desc, .featured-desc')?.textContent;

            showQuickViewModal(productName, productPrice, productDesc);
        });
    });
}

function showQuickViewModal(name, price, desc) {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close" aria-label="Close">&times;</button>
            <h2>${name}</h2>
            <p class="modal-price">${price}</p>
            <p class="modal-desc">${desc}</p>
            <div class="modal-actions">
                <button class="btn btn-primary modal-add-cart">Add to Cart</button>
                <button class="btn btn-secondary modal-close-btn">Close</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // 添加样式
    setTimeout(() => modal.classList.add('active'), 10);

    // 关闭功能
    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    };

    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-close-btn').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);

    // 添加到购物车
    modal.querySelector('.modal-add-cart').addEventListener('click', () => {
        // 触发购物车添加逻辑
        const event = new Event('click');
        closeModal();
        alert(`${name} added to cart!`);
    });

    // ESC键关闭
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

// ==================== 产品收藏功能 ====================
function initWishlist() {
    // 为每个产品卡片添加收藏按钮
    const productCards = document.querySelectorAll('.product-card, .featured-card');

    productCards.forEach(card => {
        const wishlistBtn = document.createElement('button');
        wishlistBtn.className = 'wishlist-btn';
        wishlistBtn.innerHTML = '♡';
        wishlistBtn.setAttribute('aria-label', 'Add to wishlist');
        wishlistBtn.setAttribute('data-tooltip', 'Add to Wishlist');

        const imageContainer = card.querySelector('.product-image, .featured-image');
        if (imageContainer) {
            imageContainer.appendChild(wishlistBtn);
        }

        // 切换收藏状态
        wishlistBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');

            if (this.classList.contains('active')) {
                this.innerHTML = '♥';
                this.setAttribute('data-tooltip', 'Remove from Wishlist');
                showNotification('Added to wishlist!', 'success');
            } else {
                this.innerHTML = '♡';
                this.setAttribute('data-tooltip', 'Add to Wishlist');
                showNotification('Removed from wishlist', 'info');
            }
        });
    });
}

// ==================== 通知系统 ====================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== 产品比较功能 ====================
function initProductCompare() {
    let compareList = [];
    const maxCompare = 3;

    const productCards = document.querySelectorAll('.product-card, .featured-card');

    productCards.forEach(card => {
        const compareBtn = document.createElement('button');
        compareBtn.className = 'compare-btn';
        compareBtn.innerHTML = '⚖';
        compareBtn.setAttribute('aria-label', 'Add to compare');
        compareBtn.setAttribute('data-tooltip', 'Compare');

        const imageContainer = card.querySelector('.product-image, .featured-image');
        if (imageContainer) {
            imageContainer.appendChild(compareBtn);
        }

        compareBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productName = card.querySelector('.product-name, .featured-name')?.textContent;

            if (this.classList.contains('active')) {
                // 移除比较
                this.classList.remove('active');
                compareList = compareList.filter(item => item !== productName);
                showNotification('Removed from comparison', 'info');
            } else {
                // 添加比较
                if (compareList.length >= maxCompare) {
                    showNotification(`Maximum ${maxCompare} products can be compared`, 'warning');
                    return;
                }
                this.classList.add('active');
                compareList.push(productName);
                showNotification(`Added to comparison (${compareList.length}/${maxCompare})`, 'success');
            }

            updateCompareBar();
        });
    });

    function updateCompareBar() {
        let compareBar = document.querySelector('.compare-bar');

        if (compareList.length > 0) {
            if (!compareBar) {
                compareBar = document.createElement('div');
                compareBar.className = 'compare-bar';
                document.body.appendChild(compareBar);
            }

            compareBar.innerHTML = `
                <div class="compare-content">
                    <span class="compare-count">${compareList.length} products selected</span>
                    <button class="btn btn-primary btn-sm" onclick="alert('Compare feature: ${compareList.join(', ')}')">Compare Now</button>
                    <button class="btn btn-secondary btn-sm" onclick="clearComparison()">Clear</button>
                </div>
            `;
            compareBar.classList.add('show');
        } else if (compareBar) {
            compareBar.classList.remove('show');
            setTimeout(() => compareBar.remove(), 300);
        }
    }

    // 全局清除比较函数
    window.clearComparison = function() {
        compareList = [];
        document.querySelectorAll('.compare-btn.active').forEach(btn => {
            btn.classList.remove('active');
        });
        updateCompareBar();
        showNotification('Comparison cleared', 'info');
    };
}

// ==================== Blog Category Filters ====================
function initBlogFilters() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    if (!categoryBtns.length || !blogCards.length) return; // Exit if not on blog page

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update button state
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            // Filter blog posts
            blogCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ==================== AI Chat Widget ====================
function initChatWidget() {
    const chatToggle = document.getElementById('chatToggle');
    const chatWindow = document.getElementById('chatWindow');
    const chatMinimize = document.getElementById('chatMinimize');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.getElementById('chatMessages');

    if (!chatToggle || !chatWindow) return;

    // 切换聊天窗口
    chatToggle.addEventListener('click', () => {
        chatToggle.classList.toggle('active');
        chatWindow.classList.toggle('active');
        if (chatWindow.classList.contains('active')) {
            chatInput.focus();
        }
    });

    // 最小化聊天窗口
    if (chatMinimize) {
        chatMinimize.addEventListener('click', () => {
            chatToggle.classList.remove('active');
            chatWindow.classList.remove('active');
        });
    }

    // 发送消息
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        // 添加用户消息
        addMessage(message, 'user');
        chatInput.value = '';

        // 显示输入中指示器
        showTypingIndicator();

        // 调用扣子API
        callCozeAPI(message);
    }

    // 发送按钮点击
    chatSend.addEventListener('click', sendMessage);

    // 回车发送
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // 添加消息到聊天窗口
    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${type}-message`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = type === 'user' ? '👤' : '🤖';

        const content = document.createElement('div');
        content.className = 'message-content';

        const p = document.createElement('p');
        p.textContent = text;

        const time = document.createElement('span');
        time.className = 'message-time';
        time.textContent = getCurrentTime();

        content.appendChild(p);
        content.appendChild(time);
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // 显示输入中指示器
    function showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'chat-message bot-message typing-indicator-wrapper';
        indicator.id = 'typingIndicator';
        indicator.innerHTML = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        chatMessages.appendChild(indicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // 移除输入中指示器
    function removeTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) {
            indicator.remove();
        }
    }

    // 获取当前时间
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    }

    // 调用扣子API
    async function callCozeAPI(message) {
        // 这里需要替换为你的扣子API配置
        const COZE_API_URL = 'YOUR_COZE_API_URL'; // 替换为你的扣子API地址
        const COZE_BOT_ID = 'YOUR_BOT_ID'; // 替换为你的Bot ID
        const COZE_API_TOKEN = 'YOUR_API_TOKEN'; // 替换为你的API Token

        try {
            const response = await fetch(COZE_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${COZE_API_TOKEN}`
                },
                body: JSON.stringify({
                    bot_id: COZE_BOT_ID,
                    user_id: 'user_' + Date.now(),
                    query: message,
                    stream: false
                })
            });

            removeTypingIndicator();

            if (!response.ok) {
                throw new Error('API请求失败');
            }

            const data = await response.json();

            // 根据扣子API的响应格式提取回复内容
            // 这里需要根据实际的API响应格式调整
            const botReply = data.messages?.[0]?.content || data.reply || '抱歉，我现在无法回答。';

            addMessage(botReply, 'bot');

        } catch (error) {
            console.error('API调用错误:', error);
            removeTypingIndicator();

            // 如果API未配置或调用失败，显示模拟回复
            const mockReplies = [
                '您好！我是Aeterna Weave的智能助手。关于棕编工艺品，我可以为您介绍产品特点、制作工艺、价格信息等。请问有什么可以帮助您的吗？',
                '我们的棕编工艺品都是由经验丰富的手工艺人精心制作，每一件都是独一无二的艺术品。',
                '如需了解更多产品信息或下单，请随时告诉我！',
                '我们提供全球配送服务，订单满$50免运费哦！'
            ];

            const randomReply = mockReplies[Math.floor(Math.random() * mockReplies.length)];

            setTimeout(() => {
                addMessage(randomReply, 'bot');
            }, 1000);
        }
    }
}
