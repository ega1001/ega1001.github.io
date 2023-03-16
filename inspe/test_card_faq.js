// Code jQuery à exécuter après que le document soit chargé 
$(document).ready(function () {
    $(".faq_card").html(`<div class="card" contenteditable = "true"> 
    < div class = "card-header"
    contenteditable = "true" > < /div>
    < div class = "card-body"
    contenteditable = "true" >
    
    < p class = "card-text"
    contenteditable = "true" > < /p>
    
    </div>
    < div class = "card-footer text-muted"
    contenteditable = "true" > < /div>
    </div>`); // sélectionner la div avec la classe faq et lui assigner le code HTML avec la méthode .html()
});