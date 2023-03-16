// Code jQuery à exécuter après que le document soit chargé 
$(document).ready(function () {
    $(".faq").html(`<div class="card text-center"> 
    <div class="card-header"> Featured </div>
    <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-muted"> 2 days ago </div>
    </div>`); // sélectionner la div avec la classe faq et lui assigner le code HTML avec la méthode .html()
});