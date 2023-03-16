// Code jQuery à exécuter après que le document soit chargé 
$(document).ready(function () {
    $(".faq_card").html(`<div class="card text-center"> 
    <div class="card-header"> </div>
    <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"></p>
    
    </div>
    <div class="card-footer text-muted"> </div>
    </div>`); // sélectionner la div avec la classe faq et lui assigner le code HTML avec la méthode .html()
});