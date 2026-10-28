# In-Line embed mode

In-Line mode lays the PDF's pages out inline among the rest of the web page content. Because every PDF page shows at once in this mode, moving through the document stays easy and fluid. All you have to specify here is the embedded viewer's width on the wrapping div tag, since the viewer's height sizes itself to suit the page count. The mode is a natural choice for whitepapers, brochures, e-books, and similar reading applications. ([In-Line Demo](https://acrobatservices.adobe.com/view-sdk-demo/index.html#/view/`IN_LINE`))

To use this mode:

- On the wrapping `div` element that holds the PDF viewer, set the width attribute for the viewer.
- Supply `embedMode: "IN_LINE"`
- Optional: Out of the box, the page-control bar sitting at the bottom shows up only once the reader starts scrolling through pages. That bar carries the Adobe Acrobat logo, gives you simple page-stepping controls plus a document-search box, and offers download and print actions for the PDF. Each of `showDownloadPDF` and `showPrintPDF` can be switched on or off independently.

```html
<div id="adobe-dc-view" style="width: 800px;"></div>
<script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
<script type="text/javascript">
  document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var adobeDCView = new AdobeDC.View({ clientId: "<YOUR_CLIENT_ID>", divId: "adobe-dc-view" });
    adobeDCView.previewFile(
      {
        content: {
          location: {
            url: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
          },
        },
        metaData: { fileName: "Bodea Brochure.pdf" },
      },
      { embedMode: "IN_LINE", showPrintPDF: true },
    );
  });
</script>
```

[Figure: Inline Search](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/inline-search.png)
