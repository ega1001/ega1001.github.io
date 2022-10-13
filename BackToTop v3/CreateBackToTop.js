//create a new term
let terms = document.createElement('a');

//set id
terms.setAttribute("id", "button");
alert.innerHTML = `<button class="btn btn-icon bg-secondary icon-no-margin btn-footer-popover" data-action="footer-popover" aria-label="Afficher le pied de page" data-original-title="" title="" id="yui_3_17_2_1_1664202190315_63">
                    <i class="icon fa fa-question fa-fw" aria-hidden="true" contenteditable="false"></i>
                </button>`;

//add the new element to html
var btn = document.querySelector('footer');
body.appendChild(terms)

let alert = document.createElement('div');

    alert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show m-4" role="alert"><i class="fa fa-exclamation-circle mr-2" aria-hidden="true"></i>
\Ce cours est caché pour les étudiants.<button type="button" class="close" data-dismiss="alert" aria-label="Close">\<span aria-hidden="true">×</span>\</button>`;
    var wp = document.getElementsByClassName('course-content')[0];
    wp.insertBefore(alert, wp.firstChild);