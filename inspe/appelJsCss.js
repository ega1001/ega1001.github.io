function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileJs=document.createElement('script')
  fileJs.setAttribute("type","text/javascript")
  fileJs.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined"){
  document.getElementsByTagName("head")[0].appendChild(fileref)
 }
 else if (typeof fileJs!="undefined"){
  document.getElementsByTagName("body")[0].appendChild(fileJs)
 }
}
//loadjscssfile("https://unpkg.com/bootstrap-table@1.21.1/dist/bootstrap-table.min.css", "css")
//loadjscssfile("https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css", "css")//dynamically load and add this .css file
loadjscssfile("https://ega1001.github.io/inspe/custom_newMoodle.css", "css") ////dynamically load and add this .css file
loadjscssfile("https://ega1001.github.io/inspe/custom_newMoodleGrey.css", "css") ////dynamically load and add this .css file
loadjscssfile("https://www.univ-amu.fr/themes/amu_zurb/fontawesome/css/all.min.css?r5kqqk", "css") ///
loadjscssfile("https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap", "css")
loadjscssfile("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css", "css")
loadjscssfile("https://ega1001.github.io/inspe/github.min.css", "css")
loadjscssfile("https://ega1001.github.io/inspe/backtotop.css", "css") ////dynamically load and add this .css file


//loadjscssfile("https://unpkg.com/bootstrap-table@1.21.1/dist/bootstrap-table.min.js", "js")
loadjscssfile("https://ega1001.github.io/inspe/uneditableIcon.js", "js")
loadjscssfile("https://ega1001.github.io/inspe/deleteClass.js", "js") //dynamically load and add this .js file
//loadjscssfile("https://ega1001.github.io/inspe/backtotopbutton.js", "js") //dynamically load and add this .js file
//loadjscssfile("https://ega1001.github.io/inspe/BackToTop/BackToTop.js", "js") //dynamically load and add this .js file
//loadjscssfile("https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js", "js") //dynamically load "javascript.php" as a JavaScript file
