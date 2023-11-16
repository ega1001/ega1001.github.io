// Code jQuery à exécuter après que le document soit chargé 
(function($) {
    $(document).ready(function () {
        $(".faq_card").html(`<div class="card"> 
            <div class="card-header"> </div>
            <div class="card-body">    
                <p class="card-text"> </p>    
            </div>
            <div class="card-footer"> </div>
        </div>`); // sélectionner la div avec la classe faq_card et lui assigner le code HTML avec la méthode .html()
    });
})(jQuery);
