const menuButton = document.querySelector('.menu-toggler');


menuButton.addEventListener('click', () => {
    const sidebar = document.querySelector('.menu');

    const isInView = sidebar.classList.contains('in-view');
    console.log(isInView);

    if(isInView) {
        sidebar.classList.remove('in-view');
        document.querySelector('.menu-focus').classList.remove('in-view');
    } else {
        sidebar.classList.add('in-view');
        document.querySelector('.menu-focus').classList.add('in-view');

    }
})



// Carousel function
setInterval(() => {
    const carouselImages = document.querySelectorAll('.carousel-image');
    let i = 0;

    while(i < carouselImages.length) {
        if(carouselImages[i].classList.contains('active')) {
            carouselImages[i].classList.remove('active');

            if(carouselImages[i + 1] != undefined) {
                carouselImages[i + 1].classList.add('active');
            } else {
                carouselImages[0].classList.add('active');
            }

            break;
        }

        i++;
    }
    
}, 4500)