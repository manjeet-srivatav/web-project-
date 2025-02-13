
$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})


$(document).ready(function () {
  $(document).on('click', '.cta', function () {
    $(this).toggleClass('active')
  })
});


$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $(".headerpart").addClass("darkHeader");
  } else {
    $(".headerpart").removeClass("darkHeader");
  }
});


$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});



$(document).ready(function () {

  $("#owl-example").owlCarousel({
    autoPlay: [3000],
    itemsDesktop: [2100, 3],
    itemsDesktopSmall: [1199, 3],
    itemsTablet: [899, 2],
    itemsMobile: [599, 1],
    navigation: true,
    navigationText: ['<span><i class="bi bi-arrow-left-short"></i></span>', '<span><i class="bi bi-arrow-right-short"></i></span>'],
  });
});


var a = 0;
$(window).scroll(function () {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },

        {

          duration: 7000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});