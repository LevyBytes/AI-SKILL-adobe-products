# Howtos Ui (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

================

When it comes to tailoring the interface and how people interact with the PDF, the Embed API opens up plenty of options. Anything switched on out of the box can be turned off on purpose.
Among the optional configurations are
controls for:

- Turning commenting, form filling, and similar user interactions on
  or off (this applies only in Full Window embed mode).
- Turning the PDF download and print options on or off.
- Switching the PDF display between Fit Page and Fit Width (this
  applies in both Full Window and Lightbox embed modes).

[Figure: Options for Customising User Interface using undo-redo, annotation tools, navigation, zoom etc](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/ui.png)

## Menu and tool options

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
| locale | "en-US" | Switch to a different language by handing over the locale code variable. The [Language support](api-howtos.md) section has the full rundown. |
| reportSuiteId | None | Hand over the report suite ID to gather PDF analytics inside Adobe Analytics. The [Adobe analytics](api-howtodata.md) section has the full rundown. |
| measurementId | None | Hand over the measurement ID to gather PDF analytics inside Google Analytics. The [Google Analytics](api-howtodata.md) section has the full rundown. |
| sendAutoPDFAnalytics | _true_ | Reach for this configuration to switch off PDF analytics gathering in Adobe Analytics or Google Analytics. The [Control analytics collection](api-howtodata.md) section has the full rundown. |

**Configuration options for previewFile API**

Every preview configuration you can feed the `previewFile` API to shape the PDF viewer is collected in this table.
