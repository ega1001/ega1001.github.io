window.addEventListener('DOMContentLoaded', function() {
  var pdfUrl = 'https://applis.inspe.univ-amu.fr/fad/files/accueil/test_pdf.pdf';
  var canvas = document.getElementById('pdf-canvas');

  // Chargement du document PDF
  PDFJS.getDocument(pdfUrl).promise.then(function(pdfDoc) {
    // Chargement de la première page du PDF
    pdfDoc.getPage(1).then(function(page) {
      var viewport = page.getViewport({ scale: 1 });

      // Réglage de la taille du canvas pour correspondre à la taille de la page
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      var renderContext = {
        canvasContext: canvas.getContext('2d'),
        viewport: viewport
      };

      // Affichage de la page sur le canvas
      page.render(renderContext);

      // Ajustement de la hauteur de l'iframe en fonction de la hauteur du canvas
      var pdfHeight = canvas.height;
      var pdfIframe = document.getElementById('pdf-iframe');
      pdfIframe.style.height = pdfHeight + 'px';
    });
  });
});
