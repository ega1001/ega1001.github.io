/*
Suppression de la lettre W classe fa et fas - Font Awesome Pro 6.1.1
*/
document.querySelectorAll(".fa, .fas").forEach(element => element.classList.remove("fa-w"));
/*
Largeur 100% des étiquettes LabelPart
*/
document.querySelectorAll(".LabelPart").forEach(element => element.classList.remove("container"));
/*
Largeur 100% des étiquettes activity-description
*/
document.querySelector('.LabelPart').parentNode.classList.remove('container');

