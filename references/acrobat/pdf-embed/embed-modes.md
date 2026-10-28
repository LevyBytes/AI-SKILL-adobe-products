# Embed modes

How big the PDF viewing area is and where it sits on a web page is decided by the PDF Embed API's embed modes. The choices on offer let you steer the viewing experience and the layout the same way you would for an image, a video, or any other piece of web content. To put one of these modes to work, send its name alongside your other preview configurations into the `previewFile` API. As an example, the `embedMode` value (line 5) could be set to "`FULL_WINDOW`", "`SIZED_CONTAINER`", "`IN_LINE`" or "`LIGHT_BOX`":

```javascript
function previewWithControls(view, file, embedMode, showDownloadPDF, showPrintPDF) {
    return view.previewFile(file, { embedMode, showDownloadPDF, showPrintPDF });
}
```

file supplies content and metaData. Choose embedMode from FULL_WINDOW, SIZED_CONTAINER, IN_LINE or LIGHT_BOX; provide Boolean download/print settings.

To watch the code run, check the [online demo](https://acrobatservices.adobe.com/view-sdk-demo/index.html#/view/`FULL_WINDOW`/Bodea%20Brochure.pdf) or fire up the [embed mode samples](https://www.adobe.com/go/pdfembedapi_samples) locally.

**Embed mode overview**

| Embed mode | Description | Example |
| --- | --- | --- |
| [Full window](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#full-window-embed-mode) (default mode) | Renders the PDF viewer into the full height and width of the parent element. Best suited for storage and productivity applications. | [Figure: \_images/embedfull.png](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/embedfull.png) |
| [Sized container](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#sized-container-embed-mode) | The sized container mode displays PDFs in a boxed container with landscape orientation. Best suited for presentations. | [Figure: \_images/embedsized.png](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/embedsized.png) |
| [In-Line](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#in-line-embed-mode) | All PDF pages rendered in line within a web page. Best suited for reading applications. | [Figure: \_images/embedinline.png](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/embedinline.png) |
| [Lightbox](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#lightbox-embed-mode) | Displays PDFs in a focused view. Best suited for content websites, content portals, and email. | [Figure: \_images/lightbox.png](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/lightbox.png) |
