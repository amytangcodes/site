(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell
  });

  // $(function () {
  //   $(window.scroll(function() {
  //     var scroll = $(window).scrollTop();
  //     $('#header').css('transform','translateY(' +  (scroll/2)  + 'px)');
  //   }));
  // });

  function scrollFooter(scrollY, heightFooter) {
    console.log(scrollY);
    console.log(heightFooter);

    if(scrollY >= heightFooter) {
      $('footer').css({
        'bottom' : '0px'
      });
    }
    else
    {
      $('footer').css({
        'bottom' : '-' + heightFooter + 'px'
      });
    }
  }

  $(window).load(function(){
    var windowHeight      = $(window).height(),
      footerHeight        = $('footer').height(),
      heightDocument      = (windowHeight) + ($('.main').height()) - 10;

    // Definindo o tamanho do elemento pra animar
    $('#scroll-animate, #scroll-animate-main').css({
      'height' :  heightDocument + 'px'
    });

    // Definindo o tamanho dos elementos header e conteúdo
    // $('header').css({
    //   'height' : windowHeight + 'px',
    //   'line-height' : windowHeight + 'px'
    // });

    $('.wrapper-parallax').css({
      'margin-top' : windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // ao dar rolagem
    window.onscroll = function(){
      var scroll = window.scrollY;

      $('#scroll-animate-main').css({
        'top' : '-' + scroll + 'px'
      });

      // $('header').css({
      //   'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
      // });

      scrollFooter(scroll, footerHeight);
    };
  });

  $(document).ready(function() {
    $('.skillbar').each(function() {
      $(this)
        .find('.skillbar__bar')
        .animate({
            width: $(this).attr('data-percent')
          },
          6000
        );
    });
  });



  $(document).bind('scroll', function(e) {
    var scrollOffset = $(document).scrollTop();
    var containerOffset = $('.skillbar').offset().top - window.innerHeight;
    if (scrollOffest > containerOffset) {
      var animate = setInterval(function() {
        loading();
      }, 6000);
    }
  });

})(jQuery, window, document);
