// Code jQuery à exécuter après que le document soit chargé 
(function($) {
    $(document).ready(function () {
        $(".entry").wrapInner(`<div class="card">             
            <div class="card-body">                    
            </div>            
        </div>`); // envelopper le contenu existant de la div avec la classe entry dans une carte
    });
})(jQuery);

