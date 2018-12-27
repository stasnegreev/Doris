//:$(document).ready(function() {

//   // установка года в copyrigth
//   document.getElementById("thisyear").innerHTML = new Date().getFullYear();

//   // отправка почты
//   $(".send").submit(function() {
//       var th = $(this);
//       $.ajax({
//           type: "POST",
//           url: "../php/mail.php",
//           data: th.serialize(),
//           success: function(json) {
//               th.hide();
//               $(".jsFormPopup + .success").fadeIn();
//                   setTimeout(function() {
//                   th.trigger("reset");
//               }, 1000);
//           },
//           error: function(json) {
//               console.log('error', json);
//           },
//       });
//       return false;
//   });
// });

     $('.owl-carousel').owlCarousel({
         loop: true,
         margin: 10,
         dots:false,
         nav: true,
         navText: ['<i class="icon icon-arr_l"></i>', '<i class="icon icon-arr_r"></i>'],
         items: 1,
         autoplay: true,
         autoplayTimeout: 10000,


     })

