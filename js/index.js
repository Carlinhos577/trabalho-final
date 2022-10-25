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