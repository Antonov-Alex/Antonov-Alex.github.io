// $('.portfolio__list').slick({
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     dots: false,
//     prevArrow: '<button class="slider__arrow prev-arrow"><img src="./images/slider-arrow-left.svg" alt="arrow"></button>',
//     nextArrow: '<button class="slider__arrow next-arrow"><img src="./images/slider-arrow-right.svg" alt="arrow"></button>',
//     responsive: [{
//         breakpoint: 1100,
//         settings: {
//             slidesToShow: 3,
       
       
       
//       }
//     },
//     {
//         breakpoint: 850,
//         settings:{
//             slidesToShow: 2,
//             slidesToScroll: 2,
//            // centerPadding: '100px',
//         }
//     },
//     {
//         breakpoint: 620,
//         settings:{
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: false,
            
//             autoplay: true,
//             autoplaySpeed: 2500,
            
//         } 
//     },
    
//     ]
// });


const swiper = new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 4000,
      stopOnLastSlide: true,
      disableInteraction: false

    },
    // speed: 800,
    // autoHeight: true,
     spaceBetween: 30,
    // intialSlide: 3,
  

    
    // cubeEffect: {
    //   SlideShadow: true,
    //   shadow: true,
    //   shadowOffset: 20,
    //   shadowScale: 0.94
    // }
    loop: true,  //infinity
  });




//-----------------------------------------------------------------------------------
$('.header__burger, .header__link').click(function(evt){
    $('.header__burger, .header__nav').toggleClass('active');
    // $('body').toggleClass('lock');
});



//---------------------------------------------------------------------------------------

// let map;


// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 50.46952589082321, lng: 30.61993137607467 },
//     zoom: 19,
//   });
// }