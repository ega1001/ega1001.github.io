const alert = document.createElement('div');

    alert.innerHTML = `{ifnotvisible\}<div class="alert alert-danger alert-dismissible fade show m-4" role="alert">\Ce cours est caché. Il n'est pas accessible aux étudiants.<button type="button" class="close" data-dismiss="alert" aria-label="Close">\<span aria-hidden="true">×</span>\</button>{/ifnotvisible}`;
    var wp = document.getElementsByClassName('course-content')[0];
wp.insertBefore(alert, wp.firstChild);
    
/** <-- Modal -->  */ 
<div id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" class="modal fade ">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-danger text-light">
                <h4 class="modal-title" id="exampleModalLabel"><i class="fa-solid fa-eye-slash fa-2x fa-pull-left" aria-hidden="true" contenteditable="false"></i> <span class="align-text-middle">Cours Caché</span></h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="LabelText">
                    <h6>Ce cours n'est pas accessible aux étudiants. </h6>
                    <small>Pour le rendre disponible, allez dans les paramètres du cours et sélectionnez "afficher" en face de "visibilité du cours". </small>

                </div>
            </div>
            <div class="modal-footer">
                <button id="myBtn" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

            </div>
        </div>
    </div>
</div>

{ /ifnotvisible}
<!-- Appel script cours caché -->
{ifnotvisible}
<script>
    $(document).ready(function() {
        function initAlertHidden() {
            // Add an alert if course is hidden.
            $('#page-header').after('<div class="course-hidden alert alert-danger mx-3">' +
                '<div class="media">' + '<i class="fa fa-exclamation-circle fa-3x fa-pull-left"' + 'contenteditable="false"></i>' +
                '<div class="media-body align-self-center">' + 'Ce cours est actuellement <strong>masqué</strong> pour les étudiants.' + ' Seuls les enseignants inscrits peuvent accéder à ce cours.' + '<br> Vous pouvez modifier la visibilité dans les ' + '<a href="{wwwroot}/course/edit.php?id={courseid}">paramètres du cours</a>.</div>' +
                ' </div></div>');
            return true;
        }
        initAlertHidden();
    });
</script>
{/ifnotvisible}