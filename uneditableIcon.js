/*
Empecher les icones d'être édités dans Atto
*/
var classNames = ["fa", "fas", "far", "fa-solid"];
var uneditIcon = [];

for (var j=0; j<classNames.length; j++) {
  var icons = document.getElementsByClassName(classNames[j]);
  for (var i=0; i<icons.length; i++) {
    uneditIcon.push(icons[i]);
  }
}


for (var i=0; i<uneditIcon.length; i++) {
  uneditIcon[i].setAttribute("contenteditable", "false");
}
