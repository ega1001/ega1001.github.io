window.addEventListener('DOMContentLoaded', function() {
  // Récupération de l'URL du PDF à partir d'une source externe
  var pdfUrl = 'https://ametice.univ-amu.fr/draftfile.php/2979706/user/draft/837462801/test_pdf.pdf';

  var pdfDownloadLink = document.getElementById('pdf-download-link');
  var pdfObject = document.getElementById('pdf-object');

  // Mise à jour de l'URL du PDF dans l'objet <object>
  pdfObject.setAttribute('data', pdfUrl);

  // Mise à jour du lien de téléchargement avec l'URL du PDF
  pdfDownloadLink.href = pdfUrl;
});
