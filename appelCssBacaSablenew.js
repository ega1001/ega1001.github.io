/*<!-- Appel css -->*/
<script type="text/javascript">// <![CDATA[
(function() {
    var css = [
        'https://applis.inspe.univ-amu.fr/fad/css/FadPe.css',
        'https://applis.inspe.univ-amu.fr/fad/css/FadPeTeal.css',
        'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap',
        'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css',
        'https://unpkg.com/bootstrap-table@1.18.0/dist/bootstrap-table.min.css',
        'https://applis.inspe.univ-amu.fr/fad/css/github.min.css',
        'https://use.fontawesome.com/releases/v5.15.2/css/all.css',
        'https://use.fontawesome.com/releases/v5.15.2/css/v4-shims.css'
        
    ],
    i = 0,
    link = document.createElement('link'),
    head = document.getElementsByTagName('head')[0],
    tmp;
    link.rel = 'stylesheet';
    
    for(; i < css.length; i++){
        tmp = link.cloneNode(true);
        tmp.href = css[i];
        head.appendChild(tmp);
    }
})();
// ]]></script>