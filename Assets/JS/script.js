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

// contact form



function sendMsg() {
  var firstname = document.getElementById('contact-first-name').value;
  var lastname = document.getElementById('contact-last-name').value;
  var email = document.getElementById('contact-email').value;
  var subject = document.getElementById('contact-subject').value;
  var message = document.getElementById('contact-message').value;
  var result = "Firstname : " + firstname + "\n Lastname : " + lastname + "\n Email : " + email + "\n Subject : " + subject + "\n Your message :" + message;
  return alert(result);
}

// Top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function btnTop() {
  var btn = document.createElement("BUTTON"); // Create a <button> element
  var t = document.createTextNode("CLICK ME"); // Create a text node
  btn.appendChild(t); // Append the text to <button>
  document.body.appendChild(btn); // Append <button> to <body>
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}