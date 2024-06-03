function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('expanded');
}

document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carouselContainer = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let index = 0;

    prevButton.addEventListener('click', () => {
        if (index === 0) {
            index = totalItems - 1;
        } else {
            index--;
        }
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        if (index === totalItems - 1) {
            index = 0;
        } else {
            index++;
        }
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -index * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }
});