// Получаем все контейнеры слайдеров
const sliders = document.querySelectorAll('.slider-container');

sliders.forEach(sliderContainer => {
    const slider = sliderContainer.querySelector('.slider');
    const prevButton = sliderContainer.querySelector('.prev-button');
    const nextButton = sliderContainer.querySelector('.next-button');
    const slides = Array.from(slider.querySelectorAll('img'));
    const slideCount = slides.length;
    let slideIndex = 0;

    // Устанавливаем обработчики событий для кнопок
    prevButton.addEventListener('click', () => showSlide(-1));
    nextButton.addEventListener('click', () => showSlide(1));

    // Функция для показа слайда
    function showSlide(direction) {
        slideIndex = (slideIndex + direction + slideCount) % slideCount;
        updateSlider();
    }

    // Функция для обновления отображения слайдера
    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });
    }

    // Инициализация слайдера
    updateSlider();
});