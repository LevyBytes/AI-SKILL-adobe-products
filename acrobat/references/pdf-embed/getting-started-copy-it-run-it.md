# Getting Started — Copy it. Run it.

Copying the code below into an index.html file is the fastest route to a running setup. An online PDF is already wired into the example.

Mint a client ID over [here](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-embed-api). Drop that client ID between the double quotes on line 16 of the code below, then serve the page from your server in whatever browser you like.

Once the PDF's first page has rendered, PDF Embed API reaches out to a service to confirm the client ID is paired with the right website domain. A wrong client ID, or use on a domain other than the one you registered, causes the PDF preview to be blocked along with an error message.

There genuinely is no environment setup or system requirement to deal with. Build your web app however you like, with whatever tools suit you.

```html
<!doctype html>
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
        adobeDCView.previewFile({
          content: {
            location: {
              url: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
            },
          },
          metaData: { fileName: "Bodea Brochure.pdf" },
        });
      });
    </script>
  </body>
</html>
```
