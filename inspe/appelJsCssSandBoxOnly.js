function loadjscssfile(filename, filetype) {
  var element;
  if (filetype === "js") {
    element = document.createElement("script");
    element.setAttribute("type", "text/javascript");
    element.setAttribute("src", filename);
    document.body.appendChild(element);
  } else if (filetype === "css") {
    element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", filename);
    document.head.appendChild(element);
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
//loadjscssfile("https://ega1001.github.io/inspe/test-newNav.css", "css")//
loadjscssfile("https://ega1001.github.io/inspe/backtotop.css", "css") ////dynamically load and add this .css file
loadjscssfile("https://ega1001.github.io/inspe/accordionex.css", "css") ////dynamically load and add this .css file


//loadjscssfile("https://unpkg.com/bootstrap-table@1.21.1/dist/bootstrap-table.min.js", "js")
loadjscssfile("https://ega1001.github.io/inspe/uneditableIcon.js", "js")
loadjscssfile("https://ega1001.github.io/inspe/deleteClassoptimized.js", "js") //dynamically load and add this .js file
//loadjscssfile("https://ega1001.github.io/inspe/scroll-to-top.js", "js") //dynamically load and add this .js file
loadjscssfile("https://ega1001.github.io/inspe/backtotopbutton.js", "js") //dynamically load and add this .js file
//loadjscssfile("https://ega1001.github.io/inspe/aos.js", "js") //dynamically load and add this .js file
//loadjscssfile("https://ega1001.github.io/inspe/aosInit.js", "js") //dynamically load and add this .js file
//loadjscssfile("https://ega1001.github.io/inspe/coursehiddenalert.js", "js") //dynamically load and add this .js file
//loadjscssfile("https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js", "js") //dynamically load "javascript.php" as a JavaScript file
