# Annotations interface

To call any annotations API, reach for the `AnnotationManager` interface that the PDF Embed API hands you; every one of these APIs is invoked from there. One prerequisite applies first: switch `enableAnnotationAPIs` to _true_ and supply it as part of the preview configuration handed to the `previewFile` API.

Here is how you call the APIs through `annotationManager`:

```html
<html>
  <head>
    <title>Adobe Document Cloud PDF Embed API Sample</title>
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
        var previewFilePromise = adobeDCView.previewFile(
          {
            content: {
              location: {
                url: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
              },
            },
            metaData: {
              fileName: "Bodea Brochure.pdf",
              id: "77c6fa5d-6d74-4104-8349-657c8411a834",
            },
          },
          {
            enableAnnotationAPIs: true,
          },
        );

        previewFilePromise.then((adobeViewer) => {
          adobeViewer.getAnnotationManager().then((annotationManager) => {
            // All annotation APIs can be invoked here
          });
        });
      });
    </script>
  </body>
</html>
```

Once the annotation APIs are switched on, a PDF ID has to ride along in the metadata field of your `previewFile` call. That ID is what singles out the PDF so annotations have somewhere to attach.

```javascript
function previewBrochureWithAnnotations(view) {
    return view.previewFile({
        content: { location: {
            url: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf"
        } },
        metaData: {
            fileName: "Bodea Brochure.pdf",
            id: "77c6fa5d-6d74-4104-8349-657c8411a834"
        }
    });
}
```

Pass an initialized PDF Embed View. Keep the PDF ID consistent with annotation target.source identifiers.
