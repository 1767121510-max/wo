// 等待页面加载完成
window.addEventListener('DOMContentLoaded', () => {
    // 页面加载动画
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // 初始化日期显示
    updateDateDisplay();
    
    // 初始爱情宣言 - 打字机效果
    const loveText = document.getElementById('love-text');
    const initialMessage = '我喜欢你，我希望之后的日子你都有我。';
    typeWriterEffect(loveText, initialMessage);
    
    // 获取DOM元素
    const surpriseBtn = document.getElementById('surprise-btn');
    const complimentBtn = document.getElementById('compliment-btn');
    const hugBtn = document.getElementById('hug-btn');
    const randomQuote = document.getElementById('random-quote');
    const photosContainer = document.querySelector('.photos-container');
    
    // 温馨浪漫的惊喜消息
    const surpriseMessages = [
        '我想和你一起看无数次日落，直到我们都变成小老头小老太太！🌅',
        '你笑起来的样子，是我见过最美的风景！😊',
        '今天有没有想我呀？因为我一直在想你！💭',
        '遇见你之后，我才明白什么是一眼万年！👀',
        '和你聊天的时光，都是我人生中最珍贵的时光！⏰',
        '你的眼睛里有星星，我一不小心就迷路了！✨',
        '如果有来生，我还要和你相遇、相爱、相守！💕'
    ];
    
    // 甜蜜的赞美
    const compliments = [
        '你的笑容能治愈一切！😇',
        '你是我见过最善良的人！👍',
        '和你在一起我感到特别幸福！😊',
        '你的眼睛太美了，我都看不够！👁️',
        '你做的事情总是那么贴心！💝',
        '你有世界上最可爱的小脾气！😜',
        '我喜欢你的一切，包括你的小缺点！💕',
        '你是我的开心果！🎉'
    ];
    
    // 暖心语录
    const quotes = [
        '爱情不是寻找一个完美的人，而是学会用完美的眼光去欣赏一个不完美的人。',
        '最好的爱情，是我们一起成长，一起变成更好的人。',
        '你在，春华秋实夏蝉冬雪；你不在，春夏秋冬。',
        '世界很大，我的心很小，刚好装下一个你。',
        '我不需要轰轰烈烈的爱情，只想要一个不会离开我的人。',
        '真正的爱情，是当激情褪去，我们依然选择彼此。',
        '余生很长，我想和你一起慢慢走。',
        '我爱你，不是因为你是谁，而是因为和你在一起时我是谁。',
        '幸福就是，你在闹，我在笑，我们一起慢慢变老。',
        '世界上最美好的事情，莫过于你爱的人刚好也爱着你。'
    ];
    
    // 模拟照片URL数组（使用免费图片服务）
    const photoUrls = [
        'https://picsum.photos/seed/love1/300/300',
        'https://picsum.photos/seed/love2/300/300',
        'https://picsum.photos/seed/love3/300/300',
        'https://picsum.photos/seed/love4/300/300',
        'https://picsum.photos/seed/love5/300/300',
        'https://picsum.photos/seed/love6/300/300'
    ];
    
    // 更新日期显示
    function updateDateDisplay() {
        const dateDisplay = document.getElementById('date-display');
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
        const formattedDate = now.toLocaleDateString('zh-CN', options);
        dateDisplay.textContent = `今天是 ${formattedDate}`;
    }
    
    // 随机生成函数
    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    
    // 打字机效果函数
    function typeWriterEffect(element, text) {
        element.textContent = '';
        let index = 0;
        
        const typeInterval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50); // 每个字符50ms
    }
    
    // 创建爱心动画
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        
        // 随机位置和动画持续时间
        heart.style.left = `${Math.random() * 100}vw`;
        
        // 移动端优化：减少动画复杂度和持续时间
        const duration = isMobile ? `${Math.random() * 2 + 3}s` : `${Math.random() * 3 + 2}s`;
        heart.style.animationDuration = duration;
        heart.style.opacity = Math.random() * 0.7 + 0.3;
        
        // 移动端使用更小的爱心
        const size = isMobile ? `${Math.random() * 10 + 8}px` : `${Math.random() * 20 + 10}px`;
        heart.style.fontSize = size;
        
        document.body.appendChild(heart);
        
        // 动画结束后移除元素
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    // 发射爱心雨
    function shootHearts(count = 20) {
        for (let i = 0; i < count; i++) {
            setTimeout(createHeart, i * 100);
        }
    }
    
    // 为按钮添加点击和触摸事件处理器
    function addButtonInteraction(button, callback) {
        // 防止重复点击的标志
        let isProcessing = false;
        
        // 处理按钮点击的函数
        function handleButtonPress() {
            if (isProcessing) return;
            
            isProcessing = true;
            // 按钮点击动画
            button.classList.add('btn-clicked');
            
            // 执行回调
            callback();
            
            // 移除动画类并重置处理标志
            setTimeout(() => {
                button.classList.remove('btn-clicked');
                isProcessing = false;
            }, 300);
        }
        
        // 点击事件
        button.addEventListener('click', handleButtonPress);
        
        // 触摸事件 - 移动设备优化
        button.addEventListener('touchstart', function(e) {
            e.preventDefault();
            handleButtonPress();
        }, { passive: false });
    }
    
    // 显示惊喜消息
    addButtonInteraction(surpriseBtn, () => {
        const message = getRandomElement(surpriseMessages);
        typeWriterEffect(loveText, message);
        shootHearts();
        
        // 随机显示几张照片
        photosContainer.innerHTML = '';
        const photoCount = Math.floor(Math.random() * 3) + 2;
        const shuffledPhotos = [...photoUrls].sort(() => 0.5 - Math.random());
        
        for (let i = 0; i < photoCount; i++) {
            const photoItem = document.createElement('div');
            photoItem.classList.add('photo-item');
            
            const img = document.createElement('img');
            img.src = shuffledPhotos[i];
            img.alt = '温馨回忆';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            
            // 图片加载动画
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
            
            img.onload = () => {
                img.style.opacity = '1';
            };
            
            photoItem.appendChild(img);
            photosContainer.appendChild(photoItem);
        }
    });
    
    // 显示赞美
    addButtonInteraction(complimentBtn, () => {
        const compliment = getRandomElement(compliments);
        typeWriterEffect(loveText, compliment);
        
        // 显示随机语录
        const newQuote = getRandomElement(quotes);
        typeWriterEffect(randomQuote, newQuote);
        
        // 轻微的背景色变化
        document.body.style.background = `linear-gradient(135deg, #${Math.floor(Math.random()*16777215).toString(16)} 0%, #${Math.floor(Math.random()*16777215).toString(16)} 100%)`;
        setTimeout(() => {
            document.body.style.background = 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)';
        }, 2000);
    });
    
    // 抱抱功能
    addButtonInteraction(hugBtn, () => {
        // 添加全屏震动效果
        document.body.classList.add('hug-shake');
        setTimeout(() => {
            document.body.classList.remove('hug-shake');
        }, 1000);
        
        typeWriterEffect(loveText, '我想听听你的声音');
        
        // 创建抱抱动画
        const container = document.querySelector('.container');
        container.style.transform = 'scale(1.02)';
        container.style.transition = 'transform 0.3s ease';
        
        setTimeout(() => {
            container.style.transform = 'scale(0.98)';
            setTimeout(() => {
                container.style.transform = 'scale(1)';
            }, 150);
        }, 150);
        
        shootHearts(15);
    });
    
    // 随机语录自动更新
    setInterval(() => {
        randomQuote.textContent = getRandomElement(quotes);
    }, 30000); // 每30秒更新一次
    
    // 页面加载时自动显示一些照片
    setTimeout(() => {
        surpriseBtn.click();
    }, 1000);
    
    // 检测是否为移动设备
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // 鼠标悬停效果 - 跟随鼠标的小爱心（仅在非移动设备上启用）
    if (!isMobile) {
        document.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.95) { // 降低出现频率
                const smallHeart = document.createElement('div');
                smallHeart.innerHTML = '💖';
                smallHeart.style.position = 'fixed';
                smallHeart.style.left = `${e.clientX}px`;
                smallHeart.style.top = `${e.clientY}px`;
                smallHeart.style.pointerEvents = 'none';
                smallHeart.style.zIndex = '1000';
                smallHeart.style.fontSize = '16px';
                smallHeart.style.opacity = '0.8';
                smallHeart.style.animation = 'floatUp 2s ease forwards';
                
                // 添加浮动动画样式
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes floatUp {
                        0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
                        100% { transform: translateY(-50px) rotate(360deg); opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
                
                document.body.appendChild(smallHeart);
                
                setTimeout(() => {
                    smallHeart.remove();
                }, 2000);
            }
        });
    } else {
        // 移动设备上添加触摸效果
        document.addEventListener('touchmove', (e) => {
            if (Math.random() > 0.98) { // 移动设备上更低的出现频率
                const touch = e.touches[0];
                const smallHeart = document.createElement('div');
                smallHeart.innerHTML = '💖';
                smallHeart.style.position = 'fixed';
                smallHeart.style.left = `${touch.clientX}px`;
                smallHeart.style.top = `${touch.clientY}px`;
                smallHeart.style.pointerEvents = 'none';
                smallHeart.style.zIndex = '1000';
                smallHeart.style.fontSize = '12px'; // 移动设备上更小的爱心
                smallHeart.style.opacity = '0.8';
                smallHeart.style.animation = 'floatUp 2s ease forwards';
                
                document.body.appendChild(smallHeart);
                
                setTimeout(() => {
                    smallHeart.remove();
                }, 2000);
            }
        }, { passive: true });
    }
    
    // 键盘彩蛋
    document.addEventListener('keydown', (e) => {
        if (e.key === 'L' || e.key === 'l') {
            shootHearts(50);
            loveText.textContent = '我超级爱你！！！❤️❤️❤️';
        }
    });
});