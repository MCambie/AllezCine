// Entrée sur le site restriction d'âge ->
window.onload=function (){
    var age = prompt("Please enter your age");

    if (age >= 18) {
        return;
      }
    else {
      location.href='https://www.imdb.com/';
}

};

// Bandeau utilisation des cookies
$(document).ready(function(){
          $('#cookies').animate({
             marginTop: "0",
         }, 500);

         $("#cookies_close").mousedown(function(){

                     $('#cookies').animate({
                             marginTop: "-35px",
                     }, 500);

            });
  });

// Boutons réseaux sociaux
function media(){

}
