$(document).ready(function(){
  $('.production-list .list').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 13,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
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
    ]
  });
