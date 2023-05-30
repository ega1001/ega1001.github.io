window.addEventListener('DOMContentLoaded', function () {
    var pdfIframe = document.getElementById('pdf-iframe');
    pdfIframe.addEventListener('load', function () {
        var pdfContent = pdfIframe.contentDocument || pdfIframe.contentWindow.document;
        var pdfHeight = pdfContent.documentElement.scrollHeight || pdfContent.body.scrollHeight;
        pdfIframe.style.height = pdfHeight + 'px';
    });
});