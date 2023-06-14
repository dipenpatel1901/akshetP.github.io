/**
* Template Name: DevFolio - v2.3.0
* Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function($) {
  "use strict";

  var nav = $('nav');
  var navHeight = nav.outerHeight();

  $('.navbar-toggler').on('click', function() {
    if (!$('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  /*--/ Star ScrollTop /--*/
  $('.scrolltop-mf').on("click", function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  /*--/ Star Counter /--*/
  $('.counter').counterUp({
    delay: 15,
    time: 2000
  });

  /*--/ Star Scrolling nav /--*/
  var mainNav_height = $('#mainNav').outerHeight() - 22;
  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        var scrollto = target.offset().top - mainNav_height;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      var scrollto_initial = $(initial_nav).offset().top - mainNav_height;
      $('html, body').animate({
        scrollTop: scrollto_initial
      }, 1000, "easeInOutExpo");
    }
  }

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll').on("click", function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: navHeight
  });
  /*--/ End Scrolling nav /--*/

  /*--/ Navbar Menu Reduce /--*/
  $(window).trigger('scroll');
  $(window).on('scroll', function() {
    var pixels = 50;
    var top = 1200;
    if ($(window).scrollTop() > pixels) {
      $('.navbar-expand-md').addClass('navbar-reduce');
      $('.navbar-expand-md').removeClass('navbar-trans');
    } else {
      if (!$('#navbarDefault').hasClass('show')) {
        $('.navbar-expand-md').removeClass('navbar-reduce');
      }
      $('.navbar-expand-md').addClass('navbar-trans');
    }
    if ($(window).scrollTop() > top) {
      $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
    } else {
      $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
    }
  });

  /*--/ Star Typed /--*/
  // if ($('.text-slider').length == 1) {
  //   var typed_strings = $('.text-slider-items').text();
  //   var typed = new Typed('.text-slider', {
  //     strings: typed_strings.split(','),
  //     typeSpeed: 20,
  //     loop: true,
  //     backDelay: 110,
  //     backSpeed: 30
  //   });
  // }

  // if ($('.text-slider').length == 1) {
  //   var textItems = $('.text-slider-items').text().split(',');
  //   var index = 0;
  
  //   function animateText() {
  //     $('.intro-subtitle').fadeOut(400, function() {
  //       $(this).text(textItems[index]).fadeIn(400);
  //       index++;
  //       if (index >= textItems.length) {
  //         index = 0;
  //       }
  //     });
  
  //     setTimeout(animateText, 3000); // Repeat the animation every 3 seconds
  //   }
  
  //   animateText();
  // }
  
  if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
    var typed = new Typed('.text-slider', {
      strings: typed_strings.split(','),
      typeSpeed: 20,
      loop: true,
      fadeOut: true, // Enable fade-out effect
      fadeOutClass: 'typed-fade-out', // CSS class for fade-out effect
      fadeIn: true, // Enable fade-in effect
      fadeInClass: 'typed-fade-in', // CSS class for fade-in effect
      fadeOutDelay: 500, // Delay before starting fade-out
      fadeOutDuration: 500, // Duration of fade-out
      fadeInDelay: 500, // Delay before starting fade-in
      fadeInDuration: 500, // Duration of fade-in
      backSpeed: 30, // Typing speed for erasing
      backDelay: 800 // Delay between typing and erasing
    });
  }
  
  

  
  
  /*--/ Testimonials owl /--*/
  $('#testimonial-mf').owlCarousel({
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox({
      'share': false
    });
  });

  // Added by ME
  function fetchLastCommitDateTime() {
    fetch('https://api.github.com/repos/akshetP/akshetP.github.io/commits?per_page=1')
      .then(response => response.json())
      .then(data => {
        const lastCommitDate = new Date(data[0].commit.author.date);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Europe/London' };
        const formattedDate = lastCommitDate.toLocaleString('en-US', options);
        document.getElementById('update-date').textContent = formattedDate;
      })
      .catch(error => console.error(error));
  }
  
  fetchLastCommitDateTime();
  
  $(document).ready(function() {
    $('.image-slider').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 2000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  });
  
  

})(jQuery);