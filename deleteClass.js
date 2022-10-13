/*
Suppression de la lettre W classe fa - Font Awesome Pro 6.1.1
*/
var faW = document.getElementsByClassName("fa");

for (var i=0; i<faW.length; i++) {
  faW[i].classList.remove("fa-w");
}

/*
Suppression de la lettre W classe fas - Font Awesome Pro 6.1.1
*/
var fasW = document.getElementsByClassName("fas");

for (var i=0; i<fasW.length; i++) {
  fasW[i].classList.remove("fa-w");
}

/*
Largeur 100% des étiquettes LabelPart
*/
var labelWidth = document.getElementsByClassName("LabelPart");

for (var i=0; i<labelWidth.length; i++) {
  labelWidth[i].classList.remove("container");
}

/*
Largeur 100% des étiquettes activity-description
*/

window.setTimeout(function() {
  document.querySelector('.LabelPart').parentNode.classList.remove('container');
}, 2000);

var i = deleteContainer();


function deleteContainer() {
  var LabelParent = document.querySelector('.LabelPart');

  for (var i = 0; i < labelParent.length; i++) {
    labelParent[i].parentNode.classList.remove('container');
  }
  return i;
}

