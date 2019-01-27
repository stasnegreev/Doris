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
        navText: ['<i class="icon icon-arr_l icon-nav"></i>', '<i class="icon icon-arr_r icon-nav"></i>'],
        items: 1,
        autoplay: true,
        autoplayTimeout: 10000,
    });

    $('#about__button').on('click', function (e) {
        // Prevents the default action to be triggered.
        e.preventDefault();
        // Triggering bPopup when click event is fired
        $('').bPopup({
            closeClass:'b-close',
            modalClose: true,
            opacity: 0.6,
            positionStyle: 'fixed',
            //easing: 'easeOutBack', //uses jQuery easing plugin
            speed: 450,
            transition: 'slideDown',
        });
    });

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





