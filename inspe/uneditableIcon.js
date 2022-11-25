/*
Empecher les icones d'être édités dans Atto
*/
var uneditIcon = document.getElementsByClassName("fa");

for (var i=0; i<uneditIcon.length; i++) {
  uneditIcon[i]..setAttribute("contenteditable", "false");
}