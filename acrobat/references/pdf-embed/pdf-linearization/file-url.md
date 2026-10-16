# File URL

Drop the linearized PDF's URL into the `content` field, then call the `previewFile` API.

```html
<div id="adobe-dc-view"></div>
<script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
<script type="text/javascript">
  document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var adobeDCView = new AdobeDC.View({ clientId: "<YOUR_CLIENT_ID>", divId: "adobe-dc-view" });
    var previewFilePromise = adobeDCView.previewFile(
      {
        content: { location: { url: "<URL_OF_LINEARIZED_PDF>" } },
        metaData: { fileName: "<FILE_NAME>" },
      },
      {
        enableLinearization: true,
      },
    );
  });
</script>
```
