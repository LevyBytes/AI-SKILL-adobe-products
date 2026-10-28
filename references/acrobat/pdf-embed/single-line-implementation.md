# Single line implementation

Toggling the commenting tools takes just one line. Out of the box, the Embed API turns commenting on and shows those tools in the top bar. Want it off? Drop `showAnnotationTools: false` (line 9) into the previewConfig object inside the embedded JavaScript.

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
      { showAnnotationTools: false },
    );
  });
</script>
```
