function loadjscssfile(filename, filetype) {
  if (filetype === "js") {
    if (!document.querySelector(`script[src="${filename}"]`)) {
      var element = document.createElement("script");
      element.setAttribute("type", "text/javascript");
      element.setAttribute("src", filename);
      document.body.appendChild(element);
    }
  } else if (filetype === "css") {
    if (!document.querySelector(`link[href="${filename}"]`)) {
      var element = document.createElement("link");
      element.setAttribute("rel", "stylesheet");
      element.setAttribute("type", "text/css");
      element.setAttribute("href", filename);
      document.head.appendChild(element);
    }
  }
}

// Dynamically load and add CSS files
loadjscssfile("https://ega1001.github.io/inspe/custom_newMoodle.css", "css");
//loadjscssfile("https://ega1001.github.io/inspe/custom_newMoodleGrey.css", "css");
loadjscssfile("https://ega1001.github.io/inspe/fontawesome/css/all.css", "css");
// loadjscssfile("https://www.univ-amu.fr/themes/custom/amu_zurb/fontawesome/css/all.min.css?s4vlzw", "css");
loadjscssfile("https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap", "css");
loadjscssfile("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css", "css");
loadjscssfile("https://ega1001.github.io/inspe/github.min.css", "css");
loadjscssfile("https://ega1001.github.io/inspe/backtotop.css", "css");
loadjscssfile("https://ega1001.github.io/inspe/prismDark.css", "css");
// loadjscssfile("https://ega1001.github.io/inspe/accordionex.css", "css");

// Dynamically load and add JS files
loadjscssfile("https://ega1001.github.io/inspe/uneditableIcon.js", "js");
loadjscssfile("https://ega1001.github.io/inspe/deleteClassoptimized.js", "js");
loadjscssfile("https://ega1001.github.io/inspe/tutoPix.js", "js");
loadjscssfile("https://ega1001.github.io/inspe/prismDark.js", "js");
//loadjscssfile("https://ega1001.github.io/inspe/accordionDetailssummary.js", "js");
// loadjscssfile("https://ega1001.github.io/inspe/BackToTop/BackToTop.js", "js");
// loadjscssfile("https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js", "js");
