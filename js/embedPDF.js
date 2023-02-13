var options = {
  pdfOpenParams: {
    pagemode: 'thumbs',
    navpanes: 0,
    toolbar: 0,
    statusbar: 0,
    view: 'FitV',
  },
};

var src = './pdf/sample-3pp.pdf';

var myPDF = PDFObject.embed(src, '#pdf', options);
