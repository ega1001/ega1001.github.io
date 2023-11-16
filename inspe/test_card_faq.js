// Code jQuery à exécuter après que le document soit chargé 
(function($) {
    $(document).ready(function () {
        $(".faq_card").wrapInner(`<div class="card"> 
            <div class="card-header"> </div>
            <div class="card-body">    
                <p class="card-text"> </p>    
            </div>
            <div class="card-footer"> </div>
        </div>`); // envelopper le contenu existant de la div avec la classe faq_card dans une carte
    });
})(jQuery);

