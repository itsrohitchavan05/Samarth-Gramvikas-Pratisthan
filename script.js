let currentSlide = 0;
let currentSlide1 = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });

    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

showSlide(currentSlide);

function showSlide1(index1) {
    const slides1 = document.querySelectorAll('.slide1');
    if (index1 >= slides1.length) {
        currentSlide1 = 0;
    } else if (index1 < 0) {
        currentSlide1 = slides1.length - 1;
    } else {
        currentSlide1 = index1;
    }
    
    slides1.forEach((slide1, i) => {
        slide1.classList.remove('active1');
        if (i === currentSlide1) {
            slide1.classList.add('active1');
        }
    });

    const slidesContainer1 = document.querySelector('.slides1');
    slidesContainer1.style.transform = `translateX(-${currentSlide1 * 100}%)`;
}

function changeSlide1(direction1) {
    showSlide1(currentSlide1 + direction1);
}

showSlide1(currentSlide1);