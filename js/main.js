const galleryWrapper = document.querySelector('.gallery__wrapper');
const prevButton = document.querySelector('.gallery__button--prev');
const nextButton = document.querySelector('.gallery__button--next');

prevButton.addEventListener('click', () => {
    galleryWrapper.scrollBy({
        left: -galleryWrapper.clientWidth,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    galleryWrapper.scrollBy({
        left: galleryWrapper.clientWidth,
        behavior: 'smooth'
    });
});
