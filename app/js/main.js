;$(document).ready(function() {

//   // установка года в copyrigth
//   document.getElementById("thisyear").innerHTML = new Date().getFullYear();

/* // отправка почты
   $(".send").submit(function() {
      var th = $(this);
      $.ajax({
           type: "POST",
           url: "../php/mail.php",
           data: th.serialize(),
           success: function(json) {
              th.hide();
               $(".jsFormPopup + .success").fadeIn();
                   setTimeout(function() {
                   th.trigger("reset");
               }, 1000);
           },
           error: function(json) {
               console.log('error', json);
           },
       });
       return false;
   });
 });
*/

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        navText: ['<i class="icon icon-arr_l"></i>', '<i class="icon icon-arr_r"></i>'],
        items: 1,
        autoplay: true,
        autoplayTimeout: 10000,
    });

    (function ($) {
        // DOM Ready
        $(function () {
            // Binding a click event
            // From jQuery v.1.7.0 use .on() instead of .bind()
            $('#about__button').bind('click', function (e) {
                // Prevents the default action to be triggered.
                e.preventDefault();
                // Triggering bPopup when click event is fired
                $('#about__video').bPopup({
                    modalClose: true,
                    opacity: 0.6,
                    positionStyle: 'fixed',
                    //easing: 'easeOutBack', //uses jQuery easing plugin
                    speed: 450,
                    transition: 'slideDown',
                });
            });
        });
    })(jQuery);

    $(".header__nav a").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });

    $('[data-fancybox]').fancybox({
        buttons: [
            //"zoom",
            //"share",
            //"slideShow",
            //"fullScreen",
            //"download",
            //"thumbs",
            "close"
            ],
        loop: true,
        transitionEffect: "slide",
    });
    $(".subscription__button").hover(function(event){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
    new WOW().init();

});





