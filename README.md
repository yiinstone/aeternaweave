# Interlace - 新繁棕编电商网站 | Xinfan Palm Weaving E-commerce

一个展示中国非物质文化遗产——新繁棕编的现代化电商网站。

[![License](https://img.shields.io/badge/license-Educational-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📖 项目简介

Interlace 是一个专注于推广和销售新繁棕编传统手工艺品的在线商城。网站采用现代化设计，融合中国传统美学元素，为用户提供流畅的购物体验。

**主要文件：** `index2.html` (最新版本)

## ✨ 主要特性

### 🎨 设计特点

#### 视觉风格
- **简约现代**：采用极简设计理念，突出产品和文化内涵
- **中国元素**：融入传统色彩（棕色、中国红、宣纸色）和楷体字体
- **响应式设计**：完美适配桌面、平板和手机端
- **流畅动画**：精心设计的过渡效果和交互动画

#### 色彩方案
- 主色调：棕色 (#8B4513) - 代表棕编材料
- 辅助色：浅棕 (#D4A574) - 温暖柔和
- 强调色：中国红 (#C8102E) - 传统文化
- 背景色：宣纸色 (#F5F1E8) - 文化气息

## ⚡ 性能优化

### 加载速度优化
1. **纯HTML/CSS/JS** - 无框架依赖，体积小
2. **延迟加载** - 图片和动画按需加载
3. **CSS动画** - 使用GPU加速的transform和opacity
4. **事件优化** - 使用passive监听器和防抖
5. **资源预连接** - 预加载字体资源

### 适合现场演示
- 快速启动：直接打开index.html即可
- 离线可用：所有资源本地化
- 流畅动画：60fps的交互体验
- 响应迅速：优化的事件处理

## 📁 文件结构

```
interlace/
├── index.html      # 主页面
├── styles.css      # 样式表
├── script.js       # 交互脚本
└── README.md       # 说明文档
```

## 🚀 使用方法

### 快速启动
1. 直接双击 `index.html` 在浏览器中打开
2. 或使用本地服务器：
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js
   npx serve
   ```
3. 访问 http://localhost:8000

### 现场演示建议
- 使用Chrome或Edge浏览器（性能最佳）
- 建议分辨率：1920x1080或以上
- 可以按F11全屏展示
- 提前测试所有交互功能

## 🎯 功能模块

### 1. 首页轮播 (Hero Carousel)
- ✨ 3个主题幻灯片（蚱蜢、龙、凤凰）
- ⏱️ 自动播放（5秒间隔）
- ⌨️ 支持键盘左右箭头控制
- 🖱️ 鼠标悬停暂停自动播放
- 📍 响应式指示器和导航按钮

### 2. 导航栏
- 📌 固定顶部，滚动时显示阴影
- 🔗 平滑锚点跳转
- 🛒 购物车计数器（带脉冲动画）
- 🌐 语言切换按钮
- 📱 移动端响应式汉堡菜单

### 3. 精选产品展示 (Featured Products)
- 🎴 大卡片式产品展示
- 🏷️ 产品标签（畅销🔥、高级⭐、新品✨）
- 📝 详细产品描述和特性标签
- 🛍️ 一键加入购物车
- 💰 价格展示和库存提示

### 4. 3D展示区 (3D Showcase)
- 🎨 4个产品的3D预览网格
- 🔄 交互式模型查看器占位
- 📊 产品信息展示
- 🔍 360°旋转、缩放功能说明

### 5. 文化传承区 (Heritage & Craftsmanship)
- 🏆 中国国家级非物质文化遗产展示（2011年认定）
- 👨‍🎨 工匠技艺介绍
- 🌿 100%天然环保材料说明
- 🔢 4步工艺流程展示（选材→加工→编织→塑形）
- 📜 清代嘉庆年间起源，传承200余年

### 6. 产品列表 (All Products)
- 🔍 分类筛选（全部、动物、日用、装饰）
- 📐 响应式网格布局
- ✨ 产品卡片悬停效果（光泽扫过、图片缩放）
- ⚡ 快速加入购物车

### 7. 联系表单 (Contact)
- 📧 用户信息收集表单
- 📞 邮件和电话联系方式
- 🚚 物流信息展示
- 🔗 社交媒体链接（Twitter、Instagram、Facebook、YouTube）

### 8. 页脚 (Footer)
- 📋 网站地图链接
- 📮 邮件订阅功能
- ℹ️ 客户服务信息
- ⚖️ 隐私政策和服务条款

## 🎨 自定义指南

### 修改颜色
在 `styles.css` 的 `:root` 中修改CSS变量：
```css
:root {
    --primary-color: #8B4513;    /* 主色调 */
    --accent-color: #C8102E;     /* 强调色 */
    --light-color: #F5F1E8;      /* 背景色 */
}
```

### 添加产品
在 `index.html` 的产品区域添加：
```html
<div class="product-card" data-category="分类">
    <div class="product-image">
        <div class="image-placeholder">产品名</div>
        <span class="product-badge">标签</span>
    </div>
    <div class="product-info">
        <h3 class="product-name">产品名称</h3>
        <p class="product-desc">产品描述</p>
        <div class="product-footer">
            <span class="product-price">¥价格</span>
            <button class="add-to-cart">加入购物车</button>
        </div>
    </div>
</div>
```

### 替换图片占位符
将 `.image-placeholder` 替换为实际图片：
```html
<!-- 替换前 -->
<div class="image-placeholder">产品名</div>

<!-- 替换后 -->
<img src="images/product.jpg" alt="产品名">
```

## 📱 响应式断点

- **桌面端**：> 968px
- **平板端**：768px - 968px
- **手机端**：< 768px
- **小屏手机**：< 480px

## 🌐 浏览器支持

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- 移动端浏览器

## 📝 待完善功能

### 🎯 核心功能
- [ ] 真实的购物车页面和结算流程
- [ ] 用户登录/注册系统
- [ ] 支付集成（支付宝、微信支付、信用卡）
- [ ] 后端API连接和数据库集成
- [ ] 产品详情页（大图展示、规格选择）
- [ ] 订单跟踪和历史记录系统
- [ ] 完整的多语言支持（中英文切换）

### 🎨 视觉增强
- [ ] 真实3D模型集成（使用Three.js或Model-Viewer）
- [ ] 产品高质量图片替换占位符
- [ ] 视频展示（工艺制作过程）
- [ ] 图片画廊和放大镜功能
- [ ] 产品对比功能

### 💬 用户互动
- [ ] 产品评论和评分系统
- [ ] 愿望清单/收藏功能
- [ ] 在线客服聊天
- [ ] 产品问答区
- [ ] 用户晒单和分享

### 📊 分析和营销
- [ ] SEO优化（meta标签、结构化数据）
- [ ] Google Analytics集成
- [ ] 优惠券和促销系统
- [ ] 推荐算法（相关产品）
- [ ] 邮件营销自动化

### 🔒 安全和性能
- [ ] HTTPS安全连接
- [ ] 用户数据加密
- [ ] CDN加速
- [ ] 图片WebP格式优化
- [ ] 服务端渲染（SSR）

### 图片建议
- 产品图：800x800px，JPG格式，压缩后<100KB
- 英雄图：1920x1080px，JPG格式，压缩后<200KB
- 使用WebP格式可进一步减小体积

## 🎓 技术栈

### 前端技术
- **HTML5**
  - 语义化标签
  - 无障碍ARIA属性
  - Meta标签优化

- **CSS3**
  - CSS Variables（自定义属性）
  - Flexbox & Grid布局
  - 动画和过渡效果
  - 媒体查询（响应式设计）
  - 伪元素和伪类

- **JavaScript (ES6+)**
  - 模块化函数设计
  - 事件委托
  - Intersection Observer API
  - 本地存储
  - 性能监控

### 设计工具
- **字体**：
  - 系统字体栈（PingFang SC, Microsoft YaHei）
  - 楷体（KaiTi）用于标题
  - Font Awesome图标

### 性能特性
- ⚡ 无框架依赖，纯原生实现
- 🚀 GPU加速动画
- 🎯 延迟加载和懒加载
- 📦 代码精简，总体积 < 100KB
- 🔄 事件优化（passive listeners）

## 📊 性能指标

| 指标 | 目标值 | 说明 |
|------|--------|------|
| **首次内容绘制 (FCP)** | < 1.5s | 页面首次显示内容的时间 |
| **最大内容绘制 (LCP)** | < 2.5s | 最大元素渲染完成时间 |
| **累积布局偏移 (CLS)** | < 0.1 | 页面视觉稳定性指标 |
| **首次输入延迟 (FID)** | < 100ms | 用户交互响应时间 |
| **页面总体积** | < 100KB | 不含图片的代码总大小 |

## 💡 使用技巧

### 购物车功能
```javascript
点击"Add to Cart"按钮后：
✓ 购物车数量自动增加
✓ 按钮显示"Added ✓"反馈（1.5秒）
✓ 产品卡片缩放动画
✓ 购物车图标脉冲效果
```

### 产品筛选
```javascript
点击分类按钮（All/Animals/Daily/Decor）：
✓ 显示对应分类产品
✓ 隐藏其他分类产品
✓ 淡入动画效果
```

### 轮播控制
```javascript
自动播放：每5秒切换一次
手动控制：
  • 点击左右箭头按钮 ‹ ›
  • 点击底部圆点指示器
  • 使用键盘方向键 ← →
暂停：鼠标悬停在轮播区域
```

### 返回顶部
```javascript
滚动超过300px时显示
点击快速返回页面顶部
平滑滚动动画
```

## 📄 许可证

本项目仅供学习和演示使用。

## 👥 贡献

欢迎提出建议和改进意见！

---

**演示提示**：
- 展示产品筛选功能
- 演示购物车添加
- 展示响应式设计（调整浏览器窗口）
- 展示平滑滚动和动画效果
- 强调中国文化元素和设计感
