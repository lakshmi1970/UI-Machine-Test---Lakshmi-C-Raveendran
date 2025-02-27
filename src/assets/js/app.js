function sum(a,b){
    // debugger;
    return a+b;
}

var result = sum(1,2);
console.log(result);

  $(document).ready(function() {
    var imageUrls = [
      '../../assets/img/flag.svg',
      '../../assets/img/ball.svg',
      '../../assets/img/stadium.svg',
      '../../assets/img/sound.svg'
    ];
  
    var container = $('#list-container');
  
    for (let j = 0; j < 3; j++) {
      $.each(imageUrls, function(index, imageUrl) {
        var newListItem = $('<li class="primary-color display-10 gap-1 fw-bold">');
        var image = $('<img width="14" height="14" class="me-1">').attr('src', imageUrl).attr('alt', 'Football ' + (index + 1));
        var text = $('<span>').text('FOOTBALL IN QATAR');
  
        newListItem.append(image).append(text);
        container.append(newListItem);
      });
    }

    $('.my-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
    });

    $('.my-slider_2').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: false,
      responsive: [
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
              }
          }
      ]
  });

  $('.my-slider_1').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.my-slider_3').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  speed: 300,
  infinite: true,
  autoplaySpeed: 5000,
  autoplay: false,
  responsive: [
      {
          breakpoint: 991,
          settings: {
              slidesToShow: 2,
          }
      },
      {
          breakpoint: 769,
          settings: {
              slidesToShow: 1,
          }
      }
  ]
});

$('.my-slider_4').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  speed: 300,
  infinite: true,
  autoplaySpeed: 5000,
  autoplay: false,
  responsive: [
      {
          breakpoint: 991,
          settings: {
              slidesToShow: 2,
          }
      },
      {
          breakpoint: 769,
          settings: {
              slidesToShow: 1,
          }
      }
  ]
});

  });


  Fancybox.bind('[data-fancybox="gallery"]', {
    //
  });    


  AOS.init();
