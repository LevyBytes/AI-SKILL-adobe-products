# Full window embed mode

Under this embed mode the PDF viewer fills the parent element's entire height and width. What sets it apart from sized container is that full window mode makes every annotation tool, plus the other Embed API options, reachable from the Embed UI. It fits storage and productivity applications best. Keep in mind that this mode kicks in automatically whenever no embed mode value is supplied.
([Full Window Demo](https://acrobatservices.adobe.com/view-sdk-demo/index.html#/view/`FULL_WINDOW`))

To use this mode:

- Pass `embedMode: "FULL_WINDOW"`.
- **Commenting**: Out of the box this mode brings along every
  commenting tool (add text comment, sticky notes, highlight, drawing
  tool, strikethrough and underline), the eraser tool, and the
  undo/redo tools. People can mark up the PDF and save those
  annotations. To turn commenting off, flip the `showAnnotationTools`
  variable to _false_.
- **Print and download**: From the top bar this mode lets users
  download and print the PDF (`showDownloadPDF` and `showPrintPDF`).
  That top bar also carries the Adobe Acrobat logo and the document
  search option.
- **Right-hand panel**: Shown by default, the right-hand panel surfaces
  the comments, page thumbnails, bookmarks, and the file attachments
  held in the PDF. On top of that it offers an assortment of page
  navigation and page viewing controls. Page thumbnails and bookmarks
  come on by default yet can be switched off (`showThumbnails` and
  `showBookmarks`).
- **Page navigation controls**: By default the page navigation controls
  sit in the right-hand panel.
- **Zoom control**: Zoom-in and zoom-out controls also live in the
  right-hand panel under this mode (`showZoomControl`).
- **View mode**: Pick the starting page view from "`FIT_PAGE`",
  "`FIT_WIDTH`", "`TWO_COLUMN`" or "`TWO_COLUMN_FIT_PAGE`"
  (`defaultViewMode`).
- **Linearization**: Turn linearization on to tune PDFs for quicker
  viewing. Set `enableLinearization` to _true_ to enable it. The
  section [PDF linearization](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#pdf-linearization) has the full story.
- **Form-filling**: Govern whether forms can be edited just by
  switching `enableFormFilling` on or off whenever you need.
  See [Forms handling](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#forms-handling) for more.
- **Annotation APIs**: Switch on the annotation APIs to reach PDF
  annotations through code. The section
  [Annotations API overview](../annotations-api-overview.md)
  covers the details.

The full roster of supported preview configurations lives in [Menu and tool options](../menu-and-tool-options.md).

```html
<div id="adobe-dc-view"></div>
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
      {
        embedMode: "FULL_WINDOW",
        defaultViewMode: "FIT_PAGE",
        showAnnotationTools: true,
        showDownloadPDF: true,
      },
    );
  });
</script>
```

[Figure: Image for full window embed mode](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/fullwindow1.png)
