# Sized container embed mode

With the sized container mode, PDFs show up inside a boxed container oriented in landscape. Every page comes across as a slide, which makes the mode a good fit for presentations and any workflow needing the PDF content placed precisely among other content. ([Sized Container Demo](https://acrobatservices.adobe.com/view-sdk-demo/index.html#/view/`SIZED_CONTAINER`))

To use this mode:

- Set the embedded viewer's dimensions by giving height and width
  values to the `div` tag that wraps the PDF viewer.
- Pass `embedMode: "SIZED_CONTAINER"`
- Optional: tune the tool and page settings as follows
  - **Page Controls**: Down at the bottom the page control toolbar holds the page navigation options. It also carries the Adobe Acrobat logo and the document search option.
  - **Full screen mode**: That bottom toolbar also shows a full screen button, letting users take the PDF into full screen mode. (`showFullScreen`).
  - **Print and download**: Downloading and printing the PDF are both supported in this mode (`showDownloadPDF` and `showPrintPDF`).

```html
<div id="adobe-dc-view" style="height: 360px; width: 500px;"></div>
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
      { embedMode: "SIZED_CONTAINER", showFullScreen: true },
    );
  });
</script>
```

[Figure: Sized Container](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/sized-new.png)
