window.addEventListener('DOMContentLoaded', function() {
  // Récupération de l'URL du PDF à partir d'une source externe
  var pdfUrl = 'https://applis.inspe.univ-amu.fr/fad/files/accueil/test_pdf.pdf';

  var pdfDownloadLink = document.getElementById('pdf-download-link');
  var pdfObject = document.getElementById('pdf-object');

  // Mise à jour de l'URL du PDF dans l'objet <object>
  pdfObject.setAttribute('data', pdfUrl);

  // Mise à jour du lien de téléchargement avec l'URL du PDF
  pdfDownloadLink.href = pdfUrl;
});
