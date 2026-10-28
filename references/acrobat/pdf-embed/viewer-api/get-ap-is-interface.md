# GetAPIs Interface

Through the getAPIs interface you gain a way to call any viewer API, like so:

```html
<html>
  <head>
    <title>Adobe Acrobat Services PDF Embed API Sample</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body style="margin: 0px">
    <div id="adobe-dc-view"></div>
    <script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
    <script type="text/javascript">
      document.addEventListener("adobe_dc_view_sdk.ready", function () {
        var adobeDCView = new AdobeDC.View({
          clientId: "<YOUR_CLIENT_ID>",
          divId: "adobe-dc-view",
        });
        var previewFilePromise = adobeDCView.previewFile({
          content: {
            location: {
              url: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
            },
          },
          metaData: { fileName: "Bodea Brochure.pdf" },
        });

        previewFilePromise.then((adobeViewer) => {
          adobeViewer.getAPIs().then((apis) => {
            // All viewer APIs can be invoked here
          });
        });
      });
    </script>
  </body>
</html>
```
