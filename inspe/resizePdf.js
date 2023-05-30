window.addEventListener('DOMContentLoaded', function() {
  var pdfIframe = document.getElementById('pdf-iframe');

  pdfIframe.addEventListener('load', function() {
    pdfIframe.contentWindow.postMessage('getPDFHeight', '*');
  });

  window.addEventListener('message', function(event) {
    if (event.data && typeof event.data === 'string' && event.data.indexOf('PDFHeight:') === 0) {
      var pdfHeight = parseInt(event.data.replace('PDFHeight:', ''), 10);
      pdfIframe.style.height = pdfHeight + 'px';
    }
  });
});
