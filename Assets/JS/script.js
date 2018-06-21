// Entrée sur le site restriction d'âge ->
// window.onload=function (){
//     var age = prompt("Please enter your age");
//
//     if (age >= 18) {
//         return;
//       }
//     else {
//       location.href='https://www.imdb.com/';
// }
//
// };

// Bandeau utilisation des cookies
// $(document).ready(function(){
//           $('#cookies').animate({
//              marginTop: "0",
//          }, 500);
//
//          $("#cookies_close").mousedown(function(){
//
//                      $('#cookies').animate({
//                              marginTop: "-35px",
//                      }, 500);
//
//             });
//   });

// Modal Login
$(document).ready(function() {
  $("#myBtn").click(function() {
    $("#myModal").modal();
  });
});
$(document).ready(function() {
  $("#myBtn2").click(function() {
    $("#myModal2").modal();
  });
});

$("#register-modal").click(function() {
  $('#myModal').modal('hide');
  $('#myModal2').modal('show');
});
$(document).ready(function() {

  $('.modal').on("hidden.bs.modal", function(e) { //fire on closing modal box
    if ($('.modal:visible').length) { // check whether parent modal is opend after child modal close
      $('body').addClass('modal-open'); // if open mean length is 1 then add a bootstrap css class to body of the page
    }
  });
});
