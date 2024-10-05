document.addEventListener('DOMContentLoaded', function() {
    let carousel = document.querySelector('.carousel-inner');
    let indicators = document.querySelectorAll('.carousel-indicator');
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
        // 更新当前显示的图片为 active 类
        let items = document.querySelectorAll('.carousel-item');
        items.forEach(item => item.classList.remove('active'));
        items[currentIndex].classList.add('active');
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentInex;
            updateCarousel();dex = ind
        });
    });

    // 自动轮播（可选）
    setInterval(() => {
        currentIndex = (currentIndex + 1) % indicators.length;
        updateCarousel();
    }, 3000); // 每3秒轮播一次
});