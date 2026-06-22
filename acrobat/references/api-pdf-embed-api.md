# Modernviewer

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Overview; Legacy to Modern Viewer.

## Overview

With just a handful of lines of code, Adobe PDF Embed API drops a PDF viewer right into your web applications. Because it gives you control over how a PDF looks and behaves, your applications can serve up the rich, engaging digital-document experiences your customers want and depend on.

At the heart of the PDF Embed API sit straightforward, JavaScript-driven interfaces. That built-in simplicity means developers can put the strength of native PDF to work inside their web content. Since you can show PDF natively in a setting you own, gone is the dependence on Reader download prompts, third-party apps, and PDF viewers indifferent to PDF standards. Between web-based JavaScript and in-page JS choices, putting a PDF on the web has never been simpler. And it really is simple — only a handful of lines of code stand between you and a working start.

Take a look at the [online demo](https://acrobatservices.adobe.com/view-sdk-demo/index.html#/view/`FULL_WINDOW`/Bodea%20Brochure.pdf), and inspect its code to see for yourself how easy it is!

## Legacy to Modern Viewer

Adobe's fresh modern PDF viewer rethinks how PDF viewing looks and feels across web, desktop, mobile, and PDF integrations. The new framework and workflows it brings line up more naturally with how users think, delivering one consistent experience whether the PDF is open in Adobe Acrobat or embedded on your own site.

Since April 2023, the legacy viewer has been retired. Every call directed at it now brings up the new modern PDF viewer instead. Developers who need to move to the modern viewing experience will find the documentation below handy.

### Full window embed mode

### Full window embed mode in legacy viewer

[Figure: Full window embed mode in legacy viewer](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/fullwindow-legacy.png)

### Full window embed mode in modern viewer

**New Features**

- A streamlined UI with iconography kept uniform across every Acrobat PDF-viewing
  surface — desktop, web, mobile and integrations.
- Refreshed quick tools for annotating and commenting on documents, relocated from the upper
  right over to the left side of the viewer.
- NEW: A Selection tool that lets you pick out particular regions of a document and pan around it
  while zoomed in.
- UPDATE: Commenting picks up textbox commenting along with a choice of comment colors.
- UPDATE: Highlighting gains underline, strike-through and a range of colors.
- UPDATE: The Drawing tool now supports varied colors and adjustable line thickness.
- Better commenting and navigation in both UX and UI.
- A smoother document-saving UX.
- With the left-hand panel retired, page thumbnails, bookmarks, page navigation,
  view mode and zoom options now live in the right-hand panel.

[Figure: Full window embed mode in legacy viewer](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/fullwindow1.png)

### Sized container embed mode

### Sized container embed mode in legacy viewer

[Figure: Sized container embed mode in legacy viewer](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/sized-legacy.png)

### Sized container embed mode in modern viewer

**New Features**

- A better mobile UX for sized container embed mode. A prompt invites users to switch into
  full screen for the best viewing.
- The top bar is gone; instead the file name shows up as a toast that fades away after a
  few seconds. Printing the PDF, downloading it and searching the document have all
  shifted off the top bar and down to the page-control toolbar at the bottom.
- Within full screen view you get extra choices for showing page thumbnails,
  bookmarks and page-navigation options.

_Sized container embed mode_

[Figure: Sized container embed mode in modern viewer](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/sized-new.png)

_Sized container in full screen mode_

[Figure: Sized container embed mode in modern viewer](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/sized-full.png)

### In-line embed mode

### In-line embed mode in legacy viewer

[Figure: In-line embed mode in legacy viewer](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/inline-legacy.png)

### In-line embed mode in modern viewer

[Figure: In-line embed mode in modern viewer](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/inline-search.png)

### Lightbox embed mode

### Lightbox embed mode in legacy viewer

[Figure: Lightbox embed mode in legacy viewer](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/lightbox-legacy.png)

### Lightbox embed mode in modern viewer

**New Features**

- A better page-navigation UX and UI.
- The bottom page-control toolbar is retired; page navigation,
  view mode and zoom options have all moved into the right-hand panel.
- That right-hand panel now also holds page thumbnails and bookmarks.

[Figure: Lightbox embed mode in modern viewer](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/lightboxscreen.png)

### Deprecated Features

Modern viewer marks the features and configuration variables below as deprecated:

- The left-hand panel (`showLeftHandPanel`) is deprecated for full window embed mode.
  In modern viewer, page thumbnails and bookmarks have shifted to the right panel.
- The bottom page-control toolbar (`showPageControls`) is deprecated in the full window
  and lightbox embed modes. Page navigation has shifted to the right panel in modern viewer.
- Docking and undocking that bottom page-control toolbar (`dockPageControls`) is deprecated
  for the full window and lightbox embed modes.

### Migration Guide

Moving onto Adobe's new modern PDF viewer means developers must swap in the
[viewer.js](https://acrobatservices.adobe.com/view-sdk/viewer.js) script (line 11) where the formerly used
[main.js](https://acrobatservices.adobe.com/view-sdk/main.js) script sat. Every API and callback keeps working as before,
with a marked lift in user experience.

### Modern PDF viewer integration

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

To learn more about which configurations modern PDF viewer supports,
turn to the [Menu and tool options](api-howtos-ui.md) section.
