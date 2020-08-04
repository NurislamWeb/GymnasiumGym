//******************* about part js start *****************
$('.banner-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//******************* banner part js end *****************






//******************* about part js start *****************
  $(document).ready(function(){
    $('.venobox').venobox(); 
});  
//******************* about part js end *******************






//*********** testimonial slider part js start***************
$('.testimonial-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
    arrows:false,
    autoplay: true,
    infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//*********** testimonial slider part js end**************





//*********** goodwill counter part js start *************

jQuery(document).ready(function($) {
            $('.tea').counterUp({
                delay: 10,
                time: 1000
            });
        });



jQuery(document).ready(function($) {
            $('.award').counterUp({
                delay: 10,
                time: 1000
            });
        });



jQuery(document).ready(function($) {
            $('.client').counterUp({
                delay: 10,
                time: 1000
            });
        });



jQuery(document).ready(function($) {
            $('.couse').counterUp({
                delay: 10,
                time: 1000
            });
        });



jQuery(document).ready(function($) {
            $('.gym').counterUp({
                delay: 10,
                time: 1000
            });
        });
//*********** goodwill counter part js end**************




//*********** classes part js start**************
$('.demo').accordionortabs();

//*********** classes part js end**************






//*********** parner slider part js start**************
$('.partner-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
      prevArrow:'<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//*********** parner slider part js end**************




