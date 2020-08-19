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
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
          autoplay: true,
          dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//*********** parner slider part js end**************




// fixed menu js
$(window).scroll(function(){
  $scrollamount = $(window).scrollTop();
  
  if($scrollamount>200){
    $(".menu").addClass("fixed");
  }else{
    $(".menu").removeClass("fixed");
  }

  // if($scrollamount>1000){
  //   $(".btop").fadeIn();
  // }else{
  //   $(".btop").fadeOut();
  // }

  if($scrollamount>1000){
    $(".btop").css("visibility","visible");
  }else{
    $(".btop").css("visibility","hidden");
  }
})

$(".btop").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})

