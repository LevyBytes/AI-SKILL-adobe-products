# Opening a PDF with options

```javascript
// Opens a PDF file with specified options
var pdfOptions = app.preferences.PDFFileOptions;
pdfOptions.pDFCropToBox = PDFBoxType.PDFBOUNDINGBOX;
pdfOptions.pageToOpen = 2;

// Open a file using these preferences
var fileRef = filePath;

if (fileRef != null) {
    var docRef = open(fileRef, DocumentColorSpace.RGB);
}
```
