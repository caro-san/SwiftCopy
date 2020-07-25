var brand = $('.brand-active');
brand.slick({
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 1000,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 5,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        },
    ]
});