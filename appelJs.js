/*v1 */
(function loadScripts() {

    var jsLink = [
        'https://applis.inspe.univ-amu.fr/fad/js/deleteClass.js',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js'
    ],
        i = 0,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0],
        tmp;

    for(; i < jsLink.length; i++){
        tmp = script.cloneNode(true);
        tmp.src = jsLink[i];
        head.appendChild(tmp);
    }
})();
/* v2 */
    var deleteClass = document.createElement('script');
    deleteClass.src = 'https://applis.inspe.univ-amu.fr/fad/js/deleteClass.js';    
    document.body.appendChild(deleteClass);
    
    /*var CreateBackToTop = document.createElement('SCRIPT');    
    CreateBackToTop.src = 'https://applis.inspe.univ-amu.fr/fad/BackToTop/CreateBackToTop.js';
    document.body.appendChild(CreateBackToTop);*/
    
    /*var BackToTop = document.createElement('SCRIPT');
    BackToTop.src = 'https://applis.inspe.univ-amu.fr/fad/BackToTop/BackToTop.js';
    document.body.appendChild(BackToTop);*/
    
/* v3 */
const script = document.createElement('script');

script.setAttribute(
  'src',
  'https://applis.inspe.univ-amu.fr/fad/js/deleteClass.js',
);

script.setAttribute('async', '');

script.onload = function handleScriptLoaded() {
  console.log('deleteClass script has loaded');
};

script.onerror = function handleScriptError() {
  console.log('error loading deleteClass script');
};

document.head.appendChild(script);

/* v4 */
