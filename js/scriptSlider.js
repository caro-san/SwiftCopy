// Hero Slider
$('.hero-slider').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 300,
    dots: true,
    arrows: true,
    fade: true,
    responsive: [{
        breakpoint: 600,
        settings: {
            arrows: false
        }
    }]
});
// Item Slider
$('.items-container').slick({
    infinite: true,
    arrows: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 525,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
});