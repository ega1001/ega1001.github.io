function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

loadjscssfile("https://applis.inspe.univ-amu.fr/fad/css/custom_newMoodle.css", "css") ////dynamically load and add this .css file
loadjscssfile("https://applis.inspe.univ-amu.fr/fad/css/custom_newMoodleGrey.css", "css") ////dynamically load and add this .css file
loadjscssfile("https://www.univ-amu.fr/themes/amu_zurb/fontawesome/css/all.min.css?r5kqqk", "css") ///
loadjscssfile("https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap", "css")
loadjscssfile("https://applis.inspe.univ-amu.fr/fad/css/github.min.css", "css")
loadjscssfile("https://applis.inspe.univ-amu.fr/fad/BackToTop/BackToTop.css", "css") ////dynamically load and add this .css file

loadjscssfile("https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js", "js") //dynamically load "javascript.php" as a JavaScript file
//loadjscssfile("https://applis.inspe.univ-amu.fr/fad/js/jquery.min.js", "js")//dynamically load and add this .css file
loadjscssfile("https://applis.inspe.univ-amu.fr/fad/js/uneditableIcon.js", "js")
loadjscssfile("https://applis.inspe.univ-amu.fr/fad/js/deleteClass.js", "js") //dynamically load and add this .js file
loadjscssfile("https://applis.inspe.univ-amu.fr/fad/js/deleteAddedOnDate.js", "js") //dynamically load and add this .js file
loadjscssfile("https://applis.inspe.univ-amu.fr/fad/BackToTop/CreateBackToTop.js", "js") //dynamically load and add this .js file
loadjscssfile("https://applis.inspe.univ-amu.fr/fad/BackToTop/BackToTop.js", "js") //dynamically load and add this .js file