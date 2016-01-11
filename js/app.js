$(document).foundation();

$(document).ready(function(){
      $('.main-slider').slick({
        autoplay: true,
        dots: true,
        arrows: false
      });
      $('.interests-slider').slick({
      	dots: true
      });
      $('.multi-item-slider').slick({
      	dots: false,
      	slidesToShow: 3,
      	slidesToScroll: 3
      });
    });