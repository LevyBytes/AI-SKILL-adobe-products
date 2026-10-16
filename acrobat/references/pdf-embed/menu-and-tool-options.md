# Menu and tool options

The PDF Embed API hands you a range of options for shaping the PDF viewer to whatever you need.

Get going by spinning up the `AdobeDC.View` object with your client ID,
and from there fire the `previewFile` API on that `AdobeDC.View` object.
The `previewFile` API picks up the variable values and switches
features on or off to match.

Take the case below: the embed mode is `FULL_WINDOW`, the download PDF option is stripped out of the
overflow menu in the top bar of full window embed mode by giving `showDownloadPDF` the value _false_, and the
PDF zoom controls are switched off by giving `showZoomControl` the value _false_.

**Example**

```html
<div id="adobe-dc-view"></div>
<script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
<script type="text/javascript">
  // Store the UI options in a constant
  const previewConfig = {
    embedMode: "FULL_WINDOW",
    showDownloadPDF: false,
    showZoomControl: false,
  };

  document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var adobeDCView = new AdobeDC.View({ clientId: "<YOUR_CLIENT_ID>", divId: "adobe-dc-view" });
    // Consume previewConfig here. . .
    adobeDCView.previewFile(
      {
        content: {
          location: {
            url: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
          },
        },
        metaData: { fileName: "Bodea Brochure.pdf" },
      },
      previewConfig,
    );
  });
</script>
```

**Configuration options for AdobeDC.View object**

Everything you can pass while spinning up the `AdobeDC.View` object is collected in this table.

| Variable | Default | Description |
| --- | --- | --- |
| clientId | None | A client ID is your ticket to the Adobe PDF Embed API. Grab one by [clicking HERE](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-embed-api). |
| divId | "adobe-dc-view" | Identifies the div that your PDF renders into. |
| locale | "en-US" | Switch to a different language by handing over the locale code variable. The [Language support](to-allow-byte-streaming-and-range-support-language-support.md) section has the full rundown. |
| reportSuiteId | None | Hand over the report suite ID to gather PDF analytics inside Adobe Analytics. The [Adobe analytics](configure-adobe-analytics.md) section has the full rundown. |
| measurementId | None | Hand over the measurement ID to gather PDF analytics inside Google Analytics. The [Google Analytics](analytics-google-analytics/reference-index.md) section has the full rundown. |
| sendAutoPDFAnalytics | _true_ | Reach for this configuration to switch off PDF analytics gathering in Adobe Analytics or Google Analytics. The [Control analytics collection](analytics-control-analytics-collection.md) section has the full rundown. |

**Configuration options for previewFile API**

Every preview configuration you can feed the `previewFile` API to shape the PDF viewer is collected in this table.

## Menu and tool options

| Variable | Default | Description |
| --- | --- | --- |
| showZoomControl | _true_ | Switch this to _false_ to drop the zoom-in and zoom-out controls from the right-hand panel. It takes effect in full window and lightbox embed modes. |
| showAnnotationTools | _true_ | When _true_, the quick tools menu on the left in full window embed mode carries tools like add text, sticky note, highlight, and the rest. There's a full rundown at [Comments and Markup](commenting-feature-overview.md). |
| showFullScreen | _true_ | Out of the box, sized container embed mode shows a full screen toggle down in the bottom toolbar. Switch this to _false_ to drop that full screen toggle. |
| defaultViewMode | "" | A string variable accepting "`FIT_WIDTH`", "`FIT_PAGE`", "`TWO_COLUMN`" or "`TWO_COLUMN_FIT_PAGE`". 1. `FIT_WIDTH`: Stretches the page sideways to fill the document pane's full width. 2. `FIT_PAGE`: Fits a whole page inside the current view pane. 3. `TWO_COLUMN`: Lays two PDF pages out next to each other in the current view pane. 4. `TWO_COLUMN_FIT_PAGE`: Lays two PDF pages out next to each other so that both whole pages land inside the current view pane. Bear in mind end users can flip the view mode themselves with the Fit Width, Fit Page or Two-Column button over on the right-hand panel. Beyond these, mobile browsers alone get two more view modes: 1. **CONTINUOUS**: Stacks every document page one below the next, and users glide between pages by scrolling up or down. 2. `SINGLE_PAGE`: Puts just one document page on screen at a time with no neighbouring page in sight. Users swipe to move to other pages, which show up one at a time. |
| enableFormFilling | _true_ | When _true_, form filling turns on and users get to edit fields in full window embed mode. |
| showDownloadPDF | _true_ | When _true_, the PDF is downloadable across every embed mode. Switch this to _false_ to block PDF download. |
| showPrintPDF | _true_ | When true, the PDF is printable across every embed mode. Switch this to _false_ to block PDF printing. |
| exitPDFViewerType | "CLOSE" | By default the top bar in lightbox embed mode holds a close button for dismissing the PDF preview; switch `exitPDFViewerType` to "RETURN" to make it a Back button instead. |
| showThumbnails | _true_ | Full window and lightbox embed modes carry page thumbnails by default. Switch this to _false_ when you'd rather drop the thumbnails from the right-hand panel. |
| showBookmarks | _true_ | Full window and lightbox embed modes carry PDF bookmarks by default. Switch this to _false_ when you'd rather drop the bookmarks from the right-hand panel. |
| enableLinearization | _false_ | Switch this to _true_ to turn on PDF linearization. The [PDF linearization](pdf-linearization/reference-index.md) section has the full rundown. |
| enableAnnotationAPIs | _false_ | Set it _true_ and, within full window embed mode, your code can add, update, and remove PDF annotations on its own. The [Annotations API overview](annotations-api-overview.md) section has the full rundown. |
| includePDFAnnotations | _false_ | Pair this with `enableAnnotationAPIs` to reach existing PDF annotations. The [Annotations API overview](annotations-api-overview.md) section has the full rundown. |
| enableSearchAPIs | _false_ | Switch this to _true_ to run a search across the PDF programmatically. The [Search APIs](viewer-api/search-apis.md) section has the full rundown. |
| showDisabledSaveButton | _false_ | Switch this to _true_ to keep a greyed-out save button on screen even when nothing has changed that needs saving to the PDF. |
| focusOnRendering | Varies according to embed mode | This configuration leaves it up to website developers whether the PDF grabs focus the moment it renders. The [Focus on PDF rendering](embed-modes/focus-on-pdf-rendering.md) section has the full rundown. |
| showFullScreenViewButton | _true_ | Switch this to _false_ to drop the full-screen control from the right-hand panel. It takes effect in full window and lightbox embed modes. |
