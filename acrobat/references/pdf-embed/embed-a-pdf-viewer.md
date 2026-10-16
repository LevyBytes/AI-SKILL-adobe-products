# Embed a PDF viewer

After your client ID is in hand, putting the PDF viewer in place comes down to these steps:

1.  Pull in the PDF Embed API with a `<script>` tag pointing at its
    source url:
    [https://acrobatservices.adobe.com/view-sdk/viewer.js](https://acrobatservices.adobe.com/view-sdk/viewer.js) (**line 6**).
2.  Carve out the rendering area by dropping in a div tag whose ID is
    `adobe-dc-view` (**line 9**).
3.  Spin up the PDF Embed API by handing it your client ID, then call
    `previewFile` with the PDF's file URL and file name, as lines 13
    through 18 show.

The PDF particulars, as the example below makes clear, ride along inside one object that carries two fields:

- **content**: The file's content, given either as a file path or as a
  file promise that resolves to the file content's ArrayBuffer. See
  [Passing file content](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#passing-file-content).
- **metaData**: File metadata information.

The options you can supply through `metaData` are laid out in the table that follows.

| Variable | Default | Description |
| --- | --- | --- |
| fileName | None | The name of the PDF to be rendered. An example of `fileName` is "Bodea Brochure.pdf". Note that `fileName` is mandatory. |
| id | None | Pass the PDF ID when annotation APIs are enabled to uniquely identify the PDF. For more details, see [Annotations API overview](annotations-api-overview.md). |
| hasReadOnlyAccess | false | Set this flag to _true_ if you want to render the PDF in read-only mode. Commenting is not allowed and existing PDF comments are displayed as read only. |

And you're done — open the page in a browser and your PDF viewer is up and running.

```html
<html>
  <head>
    <title>Your title</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
  </head>
  <body>
    <div id="adobe-dc-view"></div>
    <script type="text/javascript">
      document.addEventListener("adobe_dc_view_sdk.ready", function()
      {
         var adobeDCView = new AdobeDC.View({clientId: "<YOUR_CLIENT_ID>", divId: "adobe-dc-view"});
         adobeDCView.previewFile(
        {
            content:  {location: {url: "<Path to your PDF/yourfilename.pdf">}},
            metaData: {fileName: "yourfilename.pdf"}
        });
      });
    </script>
  </body>
</html>
```

File rendering is allowed five minutes before it times out. Go past that ceiling and a `Preview Rendering Failed` error results.
