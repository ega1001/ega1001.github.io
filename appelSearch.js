(function () {

    var css = [
        'https://applis.inspe.univ-amu.fr/fad/css/custom_newMoodle.css',
        'https://applis.inspe.univ-amu.fr/fad/css/custom_newMoodleGrey.css',
        'https://applis.inspe.univ-amu.fr/fad/css/custom_tiles.css',
        'https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap',
        'https://applis.inspe.univ-amu.fr/fad/css/github.min.css',
        'https://www.univ-amu.fr/themes/amu_zurb/fontawesome/css/all.min.css?r5kqqk'

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
