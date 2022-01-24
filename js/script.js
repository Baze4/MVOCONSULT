$(document).ready(function () {
    // testimonial slider
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: true,
        slideSpeed:1000,
        transitionStyle:"fadeUp",
        autoPlay:false
    });

   

    // clients slider

    // $('.collapse-btn').click(function(){
    //     $('.nav-bar ul').toggleClass('open-menu');
    //     });

        $(function() {
  
          $(".menu-link").click(function(e) {
            e.preventDefault();
            $(".menu").toggleClass("open");
            $(".menu-overlay").toggleClass("open");
          });
        
        });  

        $.fn.jQuerySimpleCounter = function( options ) {
            var settings = $.extend({
              start:  0,
              end:    100,
              easing: 'swing',
              complete: ''
            }, options );
          
            var thisElement = $(this);
          
            $({count: settings.start}).animate({count: settings.end}, {
              duration: settings.duration,
              easing: settings.easing,
              step: function() {
                var mathCount = Math.ceil(this.count);
                thisElement.text(mathCount);
              },
              complete: settings.complete
            });
          };
          
          $('#number1').jQuerySimpleCounter({end: 33,duration: 11000});      //tut
          $('#number2').jQuerySimpleCounter({end: 15,duration: 11000});
          $('#number3').jQuerySimpleCounter({end: 33,duration: 11000});
          $('#number4').jQuerySimpleCounter({end: 33,duration: 11000});
          $('#number6').jQuerySimpleCounter({end: 2,duration: 11000});
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 3100,
    delay: (el, i) => 100 + 30 * i
  });
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.ml16',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

          // function slowScroll(id) {
          //   var offset = 0;
          //   $('html, body').animate({
          //     scrollTop: $(id).offset().top - offset 

          //   }, 1000);
          //   return false;
          // }

          var basicTimeline = anime.timeline({
            autoplay: false
          });
          
          var pathEls = $(".check");
          for (var i = 0; i < pathEls.length; i++) {
            var pathEl = pathEls[i];
            var offset = anime.setDashoffset(pathEl);
            pathEl.setAttribute("stroke-dashoffset", offset);
          }
          
          basicTimeline
            .add({
              targets: ".text",
              duration: 1,
              opacity: "0"
            })
            .add({
              targets: ".button",
              duration: 1300,
              height: 10,
              width: 300,
              backgroundColor: "#2B2D2F",
              border: "0",
              borderRadius: 100
            })
            .add({
              targets: ".progress-bar",
              duration: 2000,
              width: 300,
              easing: "linear"
            })
            .add({
              targets: ".button",
              width: 0,
              duration: 1
            })
            .add({
              targets: ".progress-bar",
              width: 80,
              height: 80,
              delay: 500,
              duration: 750,
              borderRadius: 80,
              backgroundColor: "#71DFBE"
            })
            .add({
              targets: pathEl,
              strokeDashoffset: [offset, 0],
              duration: 200,
              easing: "easeInOutSine"
            });
          
          $(".button").click(function() {
            basicTimeline.play();
          });
          
          $(".text").click(function() {
            basicTimeline.play();
          });

$('.clients').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1800
    });
          
});
