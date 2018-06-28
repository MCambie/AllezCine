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
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() == 0) {
      $('#scrollToTop').fadeOut("fast");
    } else {
      if ($('#scrollToTop').length == 0) {
        $('body').append('<div id="scrollToTop">' + '<a href="#">Retour en haut</a>' + '</div>');
      }
      $('#scrollToTop').fadeIn("fast");
    }
  });
  $('body').on('click', '#scrollToTop a', function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 'slow');
  });
});

// Modal Video
$('.launch-modal').on('click', function(e) {
  e.preventDefault();
  $('#' + $(this).data('modal-id')).modal();
});

// filtre Boutons films
filterSelection("all")

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btnMovies");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// filtre bouton SERIES
filterSelectionSeries("all")

function filterSelectionSeries(c) {
  var x, i;
  x = document.getElementsByClassName("filterDivSeries");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainerSeries");
var btns = btnContainer.getElementsByClassName("btnSeries");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// bouton more/less movies
function togglediv(bouton, id) {
  var div = document.getElementById(id);
  if (div.style.display == "none") {
    div.style.display = "block";
    bouton.innerHTML = "Moins de films";
  } else {
    div.style.display = "none";
    bouton.innerHTML = "plus de films";
  }
}

// bouton more/less Series
function prout(bouton, id) {
  var div = document.getElementById(id);
  if (div.style.display == "none") {
    div.style.display = "block";
    bouton.innerHTML = "Moins de films";
  } else {
    div.style.display = "none";
    bouton.innerHTML = "plus de films";
  }
}


// Shop Movies slide
function shopMoviesNext() {
  let first = document.getElementById('shopMoviesFirst');
  let second = document.getElementById('shopMoviesSecond');
  first.style.display = "none";
  second.style.display = "block";
}

function shopMoviesPrevious() {
  let first = document.getElementById('shopMoviesFirst');
  let second = document.getElementById('shopMoviesSecond');
  second.style.display = "none";
  first.style.display = "block";
}
