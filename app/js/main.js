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
         nav: true,
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
     })
