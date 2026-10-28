# Lightbox embed mode

In Lightbox mode the document is brought to the front and shown over the top of the page. You can still see what's behind it, yet attention stays on the PDF being previewed. Along the top sits a bar carrying **Close** and **Back** buttons you can configure; of the two, **Close** is shown out of the box.
([Lightbox Demo](https://acrobatservices.adobe.com/view-sdk-demo/index.html#/view/`LIGHT_BOX`))

To use this mode:

- Pass `embedMode: "LIGHT_BOX"`.
- Optional: Configure the various PDF Viewer options.

  - **Print and download**: From the top bar this mode lets readers grab a copy of the PDF or send it to a printer (`showDownloadPDF` and `showPrintPDF`). That bar also shows the Adobe Acrobat logo.
  - **Right-hand panel**: Shown by default, the right-hand panel surfaces page thumbnails and bookmarks and gets you to any file attachments carried inside the PDF. Beyond that it offers an assortment of page-stepping and page-viewing controls. Thumbnails and bookmarks come enabled out of the box yet can be turned off (`showThumbnails` and `showBookmarks`).
  - **Page navigation controls**: You'll find the page-stepping controls ready to use by default within the right-hand panel.
  - **Zoom control**: From the right-hand panel this mode likewise hands you controls to zoom in and out. (`showZoomControl`).
  - **View mode**: Choose the starting page layout from "`FIT_PAGE`", "`FIT_WIDTH`", "`TWO_COLUMN`" or "`TWO_COLUMN_FIT_PAGE`" (`defaultViewMode`).
  - **Exit PDF Viewer**: By default the top bar carries a Close button that dismisses the preview (`exitPDFViewerType: "CLOSE"`); you can swap it for a Back button by setting `exitPDFViewerType` to RETURN (`exitPDFViewerType: "RETURN"`).

```html
<script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
<script type="text/javascript">
  document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var adobeDCView = new AdobeDC.View({ clientId: "<YOUR_CLIENT_ID>" });
    adobeDCView.previewFile(
      {
        content: {
          location: {
            url: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
          },
        },
        metaData: { fileName: "Bodea Brochure.pdf" },
      },
      { embedMode: "LIGHT_BOX", exitPDFViewerType: "CLOSE" },
    );
  });
</script>
```

_Top bar with Close button (`exitPDFViewerType: "CLOSE"`)_

[Figure: Image for lightbox embed mode](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/lightboxscreen.png)

_Top bar with Back button (`exitPDFViewerType: "RETURN"`)_

[Figure: Image for lightbox embed mode with back button](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/backbutton.png)
