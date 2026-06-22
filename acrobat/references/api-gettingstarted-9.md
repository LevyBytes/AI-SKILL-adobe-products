# Pdf Embed Api — Gettingstarted

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

Using the Adobe PDF Embed API calls for a client ID. To grab one, [click HERE](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-embed-api) and run through the workflow.

## Getting Started — Copy it. Run it.

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

## Getting Started — Run ready samples

For every feature, the PDF Embed API ships sample files that are ready to run.

1.  Download the [samples repo](https://www.adobe.com/go/pdfembedapi_samples).
2.  Place the files in any location that has internet access.
3.  Navigate to the index.html file for any sample, and open it in a
    browser.

The sample has run correctly when a PDF shows up in the web viewer.

## Getting Started — Live demo

Want to see the viewer in action before wiring anything up? The [Adobe PDF Embed API demo](https://acrobatservices.adobe.com/view-sdk-demo/index.html#/view/`FULL_WINDOW`/Bodea%20Brochure.pdf) lets you experiment with viewer settings hands-on, and a "generate code" button hands back a working snippet the moment you tweak the interface — so every UI change shows up instantly in runnable sample code.

[Figure: View SDK Playground with customization tools such as annotation, download etc and generate code button on the left](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/playground.png)

## Getting Started — Supported browsers

Run PDF Embed API against current releases of these browsers:

- Windows - Microsoft Edge, Google Chrome, Mozilla Firefox.
- macOS - Safari, Google Chrome, Microsoft Edge, Mozilla Firefox.
- Android - Google Chrome.
- iOS - Safari, Google Chrome.

## Getting Started — Mobile support

On handsets and tablets the API carries over most of its desktop behavior, though a handful of features fall away:

- On phones running Full Window embed mode the annotation tools are unavailable; tablets on either Android or iOS keep them.
- There is no print capability.
- Saving the PDF locally works on Android but not on iOS.

To make reading on small screens nicer, the API layers in a few mobile-only tweaks that kick in solely within phone browsers.

### View modes in mobile browsers

So that PDFs read better on a phone, the API offers two viewing layouts in mobile browsers. Keep in mind that both layouts only apply when you are in Full Window embed mode.

- Continuous view mode: Every page stacks in sequence and the reader moves between them just by scrolling up or down. On phone browsers this layout is what renders PDFs unless you choose otherwise.
- Single Page view mode: Only one page shows at any moment, with no neighboring page in sight. Swiping carries the reader from one page to the next, each arriving on its own.

A toggle in the top bar switches between them — tap it, then pick the layout you want from the dropdown.

**Continuous view mode**

[Figure: Continous Mode](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/continuous-mode.png)

**Single page view mode**

[Figure: Single Page Mode](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/single-page-mode.png)

To choose a layout programmatically, use the `defaultViewMode` configuration variable: assign it the value you want and hand it to the `previewFile` API as part of the preview configuration. The specifics live under [Menu and tool options](api-howtos-ui.md).

### Go to a Page

For jumping straight to a particular page, the API surfaces a page handle that shows whichever page number is currently on screen. In continuous view mode that handle sits along the right edge, while single page mode parks it at the bottom.

Tapping the handle pops up a dialog that prompts for a page number; type one in and the reader lands on exactly that page.

Bear in mind this only works while you are in Full Window embed mode.

[Figure: Go To Page Dialog](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/goto-page.png)

### Zoom in

A pinch-to-zoom gesture is supported as well, letting readers enlarge the PDF content so it is easier to read. Every embed mode offers this.

## Getting Started — Analytics

**What information is collected to analyze PDF Embed API usage?**

Only the bare essentials get gathered — just enough for Adobe to learn how the product is used and figure out how to scale it. Here is what gets recorded:

- Browser and operating system type and version.
- Type of device used to open the PDF - desktop, mobile or tablet.
- Embed mode used to render the PDF.
- File size and number of pages.
- Performance metrics, such as whether PDF was rendered in linearized manner or not, time taken to download the PDF and render the first page.
- URL of the webpage.

Be aware that none of the content users produce is ever kept, and it is never transmitted to Adobe servers.

**How will Adobe use the information?**

Feature development, performance measurement, and a clearer picture of how the product gets used all draw on this anonymous data, which feeds ongoing improvements.

**How is my privacy protected?**

Plenty of safeguards surround whatever gets collected and sent. Because nothing personally identifiable is gathered, the data carries no meaning for anyone beyond Adobe.

## Getting Started — Feedback and forum

Hearing from customers matters a great deal — it lets the team confirm real use cases, steer where development goes, and work through problems. Drop your comments and questions any time on the [Community Forum](https://community.adobe.com/t5/Document-Cloud-SDK/bd-p/Document-Cloud-SDK).
