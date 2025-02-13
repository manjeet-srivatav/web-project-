

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  
  // Function to activate a tab dynamically
  function activateTab(tabId) {
      tabs.forEach(tab => {
          tab.classList.remove('active');
          if (tab.getAttribute('data-tab') === tabId) {
              tab.classList.add('active');
          }
      });

      contents.forEach(content => {
          content.classList.remove('active');
          if (content.id === `${tabId}-content`) {
              content.classList.add('active');
          }
      });
  }

  // Event listener to switch tabs dynamically
  tabs.forEach(tab => {
      tab.addEventListener('click', () => {
          const tabId = tab.getAttribute('data-tab');
          activateTab(tabId);
      });
  });

  // Set default active tab
  const defaultTabId = '6'; // Change this to the ID of the default tab
  activateTab(defaultTabId);
});




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
    autoPlay: [6000],
    itemsDesktop: [2100, 4],
    itemsDesktopSmall: [1199, 4],
    itemsTablet: [899, 1],
    itemsMobile: [599, 1],
    navigation: true,
    navigationText: ['<span><i class="bi bi-arrow-left-short"></i></span>', '<span><i class="bi bi-arrow-right-short"></i></span>'],
  });
});


var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 10000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});


$(".counter").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-countto");
  countDuration = parseInt($this.attr("data-duration"));
  $({ counter: $this.text() }).animate(
    {
      counter: countTo
    },
    {
      duration: countDuration,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.counter));
      },
      complete: function () {
        $this.text(this.counter);
      }
    }
  );
});