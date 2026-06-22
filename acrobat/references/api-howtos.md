# Howtos (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

To get development moving quickly, lean on the samples together with the documentation. What follows below walks through embedding a customized PDF viewer inside a web page.

## Embed a PDF viewer

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
| id | None | Pass the PDF ID when annotation APIs are enabled to uniquely identify the PDF. For more details, see [Annotations API overview](api-howtos-comments.md). |
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

## Passing file content

Per the example above, the PDF data travels through the `content` field, supplied as either a file URL or a file promise. Either way, you must include the `metaData` field carrying a mandatory filename.

```javascript
adobeDCView.previewFile({
  content: {location (URL) OR promise (File blob)},
  metaData: {fileName (always required) + optional fields }
})
```

Supply both a file URL and a file promise and the promise wins out, with the URL value disregarded.

### File URL

Handing over PDF data by URL is fairly obvious, though a few situations call for extra care.

**Token-based authentication**

For a file URL sitting behind token-based authentication that relies on custom headers, send the URL and the headers together like this:

```javascript
adobeDCView.previewFile({
   content: {
       location: {
          url: <filepath>,
          headers:[{key: ..., value: ...}, ...]
       },
   },
   metaData: {fileName: <filename> }
})
```

**Cookie-based authentication**

For a file URL that depends on cookie-based authentication, switch
`downloadWithCredentials` to _true_ as you initialise the
`AdobeDC.View object`:

```javascript
var adobeDCView = new AdobeDC.View({
    ...
    downloadWithCredentials: true,
});
```

### Cross-origin resource sharing

You can run into [Cross-origin resource sharing
(CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) trouble
once PDF content is handed over as a URL, since the PDF Embed API then
has to fetch the file from that location before it can render it.
Two approaches let you sidestep the problem:

- Put your webpage and the file's location URL under the same domain.
  Example: webpage: [Link](https://example.com/viewer/test.html); PDF
  location: [Link](https://example.com/resources/abc.pdf))
- Switch on CORS headers for the PDF resource so your webpage's domain
  is permitted to reach it.

### File promise

When the file content already exists as an ArrayBuffer — local PDF files being one case — you can pass it straight in as a Promise, one that ought to resolve to the file content's ArrayBuffer.

```javascript
adobeDCView.previewFile({
    content: { promise: <FILE_PROMISE> }
    metaData: { fileName: <FILE_NAME> }
});
```

A common route to a file promise is letting users pick a local file to upload. The HTML for that might look like this:

```html
<label for="file-picker"> Choose a PDF file:</label>
<input type="file" id="file-picker" accept="application/pdf" />
```

With the file uploaded, a small helper function can read it and pass it along to `adobeDCView.previewFile`:

```javascript
function listenForFileUpload() {
  var fileToRead = document.getElementById("file-picker");
  fileToRead.addEventListener("change", function(event) {
     var files = fileToRead.files;
     if (files.length > 0) {
        var reader = new FileReader();
        reader.onloadend = function(e) {
            var filePromise = Promise.resolve(e.target.result);
            // Pass the filePromise and name of the file to the previewFile API
            adobeDCView.previewFile({
                 content: {promise: filePromise}
                 metaData: { fileName: files[0].name }
            })
        };
        reader.readAsArrayBuffer(files[0]);
      }
    }, false);
}
```

## Embed modes

How big the PDF viewing area is and where it sits on a web page is decided by the PDF Embed API's embed modes. The choices on offer let you steer the viewing experience and the layout the same way you would for an image, a video, or any other piece of web content. To put one of these modes to work, send its name alongside your other preview configurations into the `previewFile` API. As an example, the `embedMode` value (line 5) could be set to "`FULL_WINDOW`", "`SIZED_CONTAINER`", "`IN_LINE`" or "`LIGHT_BOX`":

```javascript
adobeDCView.previewFile({
   content: { ... },
   metaData: { ... }
      },
  {embedMode: "<FULL_WINDOW, SIZED_CONTAINER, IN_LINE OR LIGHT_BOX>",
   showDownloadPDF: ...,
   showPrintPDF: ...
      }
);
```

To watch the code run, check the [online demo](https://acrobatservices.adobe.com/view-sdk-demo/index.html#/view/`FULL_WINDOW`/Bodea%20Brochure.pdf) or fire up the [embed mode samples](https://www.adobe.com/go/pdfembedapi_samples) locally.

**Embed mode overview**

| Embed mode | Description | Example |
| --- | --- | --- |
| [Full window](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#full-window-embed-mode) (default mode) | Renders the PDF viewer into the full height and width of the parent element. Best suited for storage and productivity applications. | [Figure: \_images/embedfull.png](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/embedfull.png) |
| [Sized container](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#sized-container-embed-mode) | The sized container mode displays PDFs in a boxed container with landscape orientation. Best suited for presentations. | [Figure: \_images/embedsized.png](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/embedsized.png) |
| [In-Line](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#in-line-embed-mode) | All PDF pages rendered in line within a web page. Best suited for reading applications. | [Figure: \_images/embedinline.png](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/embedinline.png) |
| [Lightbox](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#lightbox-embed-mode) | Displays PDFs in a focused view. Best suited for content websites, content portals, and email. | [Figure: \_images/lightbox.png](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/lightbox.png) |

### Full window embed mode

Under this embed mode the PDF viewer fills the parent element's entire height and width. What sets it apart from sized container is that full window mode makes every annotation tool, plus the other Embed API options, reachable from the Embed UI. It fits storage and productivity applications best. Keep in mind that this mode kicks in automatically whenever no embed mode value is supplied.
([Full Window Demo](https://acrobatservices.adobe.com/view-sdk-demo/index.html#/view/`FULL_WINDOW`))

To use this mode:

- Pass `embedMode: "FULL_WINDOW"`.
- **Commenting**: Out of the box this mode brings along every
  commenting tool (add text comment, sticky notes, highlight, drawing
  tool, strikethrough and underline), the eraser tool, and the
  undo/redo tools. People can mark up the PDF and save those
  annotations. To turn commenting off, flip the `showAnnotationTools`
  variable to _false_.
- **Print and download**: From the top bar this mode lets users
  download and print the PDF (`showDownloadPDF` and `showPrintPDF`).
  That top bar also carries the Adobe Acrobat logo and the document
  search option.
- **Right-hand panel**: Shown by default, the right-hand panel surfaces
  the comments, page thumbnails, bookmarks, and the file attachments
  held in the PDF. On top of that it offers an assortment of page
  navigation and page viewing controls. Page thumbnails and bookmarks
  come on by default yet can be switched off (`showThumbnails` and
  `showBookmarks`).
- **Page navigation controls**: By default the page navigation controls
  sit in the right-hand panel.
- **Zoom control**: Zoom-in and zoom-out controls also live in the
  right-hand panel under this mode (`showZoomControl`).
- **View mode**: Pick the starting page view from "`FIT_PAGE`",
  "`FIT_WIDTH`", "`TWO_COLUMN`" or "`TWO_COLUMN_FIT_PAGE`"
  (`defaultViewMode`).
- **Linearization**: Turn linearization on to tune PDFs for quicker
  viewing. Set `enableLinearization` to _true_ to enable it. The
  section [PDF linearization](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#pdf-linearization) has the full story.
- **Form-filling**: Govern whether forms can be edited just by
  switching `enableFormFilling` on or off whenever you need.
  See [Forms handling](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#forms-handling) for more.
- **Annotation APIs**: Switch on the annotation APIs to reach PDF
  annotations through code. The section
  [Annotations API overview](api-howtos-comments.md)
  covers the details.

The full roster of supported preview configurations lives in [Menu and tool options](api-howtos-ui.md).

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
      {
        embedMode: "FULL_WINDOW",
        defaultViewMode: "FIT_PAGE",
        showAnnotationTools: true,
        showDownloadPDF: true,
      },
    );
  });
</script>
```

[Figure: Image for full window embed mode](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/fullwindow1.png)

### Forms handling

By default the PDF Embed API allows forms to be edited live. Your end users can type into and revise text fields and work with the rest of the form objects too — radio buttons, check boxes, lists, and drop downs (select lists). The moment a user enters anything in a form field, the top bar's Save button switches on so their input can be written back to the PDF. Forms come out rendered by the PDF Embed API to closely match how they look inside the full Acrobat app:

[Figure: Image for form-filling in full window embed mode](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/form1.png)

Editing forms is something only Full Window embed mode handles.

Govern whether forms can be edited just by switching `enableFormFilling`
on or off whenever you need. Form editing ships on by default, but you can shut it down by setting that option to _false_.

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
      { embedMode: "FULL_WINDOW", enableFormFilling: false },
    );
  });
</script>
```

Switching form editing off strips the highlight from form fields:

[Figure: Disabling form editing](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/form2.png)

### Unsupported form fields

As things stand in this release, the form fields below are not supported:

- XFA forms
- Digital Signature fields.
- Barcode fields.
- File picker text field
- RTF (rich text) text field
- Fields containing JavaScript or any kind of calculation and
  validation
- Text field and drop downs with some special and custom formats
- PDF Actions that includes button Submit scenarios (only button
  viewing is supported)

Once the API spots form fields it cannot support, a dialog surfaces over the rendered PDF:

[Figure: No Support for Form Fields message](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/formnosupport.png)

### Sized container embed mode

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

### Toggling full screen

For a full screen view of the PDF, click the **full screen mode**
button down in the bottom toolbar. While in full screen mode, a conventional exit (**X**) button up in the top bar takes you back from full screen to normal view. Full screen mode also shows a right-hand panel carrying options like page thumbnails, bookmarks, and page navigation.
On mobile browsers the user gets prompted to read the PDF in full screen for the best experience; to leave full screen on a mobile browser, swipe downward.

_Full screen button in sized container embed mode_

[Figure: Sized Container full screen button](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/sized-fullscreen.png)

_Exit button in sized container full screen mode_

[Figure: Sized Container full screen view](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/sized-exit.png)

### In-Line embed mode

In-Line mode lays the PDF's pages out inline among the rest of the web page content. Because every PDF page shows at once in this mode, moving through the document stays easy and fluid. All you have to specify here is the embedded viewer's width on the wrapping div tag, since the viewer's height sizes itself to suit the page count. The mode is a natural choice for whitepapers, brochures, e-books, and similar reading applications. ([In-Line Demo](https://acrobatservices.adobe.com/view-sdk-demo/index.html#/view/`IN_LINE`))

To use this mode:

- On the wrapping `div` element that holds the PDF viewer, set the width attribute for the viewer.
- Supply `embedMode: "IN_LINE"`
- Optional: Out of the box, the page-control bar sitting at the bottom shows up only once the reader starts scrolling through pages. That bar carries the Adobe Acrobat logo, gives you simple page-stepping controls plus a document-search box, and offers download and print actions for the PDF. Each of `showDownloadPDF` and `showPrintPDF` can be switched on or off independently.

```html
<div id="adobe-dc-view" style="width: 800px;"></div>
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
      { embedMode: "IN_LINE", showPrintPDF: true },
    );
  });
</script>
```

[Figure: Inline Search](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/inline-search.png)

### Lightbox embed mode

In Lightbox mode the document is brought to the front and shown over the top of the page. You can still see what's behind it, yet attention stays on the PDF being previewed. Along the top sits a bar carrying **Close** and **Back** buttons you can configure; of the two, **Close** is shown out of the box.
([Lightbox Demo](https://acrobatservices.adobe.com/view-sdk-demo/index.html#/view/`LIGHT_BOX`))

To use this mode:

- Pass `embedMode: "LIGHT_BOX"`.
- Optional: Configure the various PDF Viewer options.

  - **Print and download**: From the top bar this mode lets readers grab a copy of the PDF or send it to a printer (`showDownloadPDF` and `showPrintPDF`). That bar also shows the Adobe Acrobat logo.
  - **Right-hand panel**: Shown by default, the right-hand panel surfaces page thumbnails and bookmarks and gets you to any file attachments carried inside the PDF. Beyond that it offers an assortment of page-stepping and page-viewing controls. Thumbnails and bookmarks come enabled out of the box yet can be turned off (`showThumbnails` and `showBookmarks`).
  - **Page navigation controls**: You'll find the page-stepping controls ready to use by default within the right-hand panel.
  - **Zoom control**: From the right-hand panel this mode likewise hands you controls to zoom in and out. (`showZoomControl`).
  - **View mode**: Choose the starting page layout from "`FIT_PAGE`", "`FIT_WIDTH`", "`TWO_COLUMN`" or "`TWO_COLUMN_FIT_PAGE`" (`defaultViewMode`).
  - **Exit PDF Viewer**: By default the top bar carries a Close button that dismisses the preview (`exitPDFViewerType: "CLOSE"`); you can swap it for a Back button by setting `exitPDFViewerType` to RETURN (`exitPDFViewerType: "RETURN"`).

```html
<script src="https://acrobatservices.adobe.com/view-sdk/viewer.js"></script>
<script type="text/javascript">
  document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var adobeDCView = new AdobeDC.View({ clientId: "<YOUR_CLIENT_ID>" });
    adobeDCView.previewFile(
      {
        content: {
          location: {
            url: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
          },
        },
        metaData: { fileName: "Bodea Brochure.pdf" },
      },
      { embedMode: "LIGHT_BOX", exitPDFViewerType: "CLOSE" },
    );
  });
</script>
```

_Top bar with Close button (`exitPDFViewerType: "CLOSE"`)_

[Figure: Image for lightbox embed mode](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/lightboxscreen.png)

_Top bar with Back button (`exitPDFViewerType: "RETURN"`)_

[Figure: Image for lightbox embed mode with back button](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/backbutton.png)

### Focus on PDF rendering

The PDF Embed API leaves it up to the site builder whether the document should grab focus at the moment it renders inside a page.

You drive this with the `focusOnRendering` variable, handed in as a setting to the `previewFile` API. The value it expects is a Boolean.

```javascript
adobeDCView.previewFile(
  {
    content: { location: { url: "<URL_OF_PDF>" } },
    metaData: { fileName: "<FILE_NAME>" },
  },
  { embedMode: "<EMBED_MODE>", focusOnRendering: true },
);
```

Which value this setting defaults to depends on the embed mode in play.

| Embed mode | Default value of focusOnRendering | Default behaviour |  |
| --- | --- | --- | --- |
| [Full window](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#full-window-embed-mode) | true | Acquires focus when PDF is rendered. | [Sized container](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#sized-container-embed-mode) false Doesn’t acquire focus when PDF is rendered. Doesn’t acquire focus when PDF is rendered. |
| [In-Line](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#in-line-embed-mode) | false | Doesn’t acquire focus when PDF is rendered. | Doesn’t acquire focus when PDF is rendered. |
| [Lightbox](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-embed-api/howtos.md#lightbox-embed-mode) | true (Cannot be set to false) | Always acquires focus when PDF is rendered. This cannot be changed. | Because Lightbox embed mode exists to give the document a dedicated, focused view by floating the viewer above the page, the PDF there will invariably claim focus. That behaviour is fixed and isn't open to change in Lightbox embed mode. For every embed mode apart from lightbox, you're free to alter whether focus is taken by default. _ Switch the variable on (`focusOnRendering: true`) when you want the document to grab focus once it has rendered. _ Switch the variable off (`focusOnRendering: false`) when the document should stay out of focus after rendering. |
