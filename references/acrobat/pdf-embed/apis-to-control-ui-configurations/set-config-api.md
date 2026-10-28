# setConfig API

With `setConfig` you reach for several special UI tweaks: tucking the annotation tools out of view on the left, hiding the comments panel on the right, suppressing the toolbar that appears on text selection, and letting downloaded and printed PDFs carry annotations even before they are written to the PDF buffer.

These are the flags the API accepts, and you may hand it anywhere from 1 to N of them:

- `showToolbar`: Controls whether the add text, sticky note, highlight,
  strikethrough, underline, drawing and eraser tools show up on the left-hand side.
  Defaults to _true_, leaving those annotation tools on screen. Flip it to false when you need them out of sight.
- `showCommentsPanel`: Controls whether the comments panel on the right
  is shown. Defaults to _true_, so the panel is visible. Flip it to _false_ to tuck away the right-hand comments panel.
- `showToolsOnTextSelection`: Controls whether the toolbar that pops up
  on text selection appears. Defaults to _true_, with the toolbar showing. Flip it to _false_ to keep that toolbar hidden.

[Figure: Drawing Tools with optin to showToolbar and showCommentsPanel](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/drawingtools1.png)

- `downloadWithAnnotations`: While annotation APIs are on, annotations
  stay out of the PDF buffer, so by default a downloaded PDF carries no annotation at all. Flip it to _true_ to pull down the PDF with every annotation included.
- `printWithAnnotations`: While annotation APIs are on, annotations no
  longer reach the PDF buffer, so by default a print run includes no annotation. Flip it to _true_ to print the PDF with all the annotations.

These flags can be set and handed off in two spots, both laid out below: `setConfig` or
`previewFile`.

**Method 1: Pass the flags to setConfig**

### Input parameters

A list pairing each flag with its Boolean value.

```json
{
  "showToolbar": true,
  "showCommentsPanel": true,
  "downloadWithAnnotations": false,
  "showToolsOnTextSelection": true,
  "printWithAnnotations": false
}
```

These are the documented defaults; choose explicit overrides for your annotation interface.

### API output

A Promise comes back that:

- settles when the operation succeeds
- turns down with an error object carrying a code and message on failure.

### API signature

```javascript
async function configureAnnotations(previewPromise, overrides = {}) {
    const viewer = await previewPromise;
    const manager = await viewer.getAnnotationManager();
    return manager.setConfig({
        showToolbar: true,
        showCommentsPanel: true,
        downloadWithAnnotations: false,
        showToolsOnTextSelection: true,
        printWithAnnotations: false,
        ...overrides
    });
}
```

**Method 2: Pass the flags to previewFile**

Rather than routing them to `setConfig`, you can drop the flags into the
`annotationUIConfig` object, which then travels into the previewFile API
among its preview configuration.

```json
{
  "annotationUIConfig": {
    "showToolbar": true,
    "showCommentsPanel": true,
    "downloadWithAnnotations": false,
    "showToolsOnTextSelection": true,
    "printWithAnnotations": false
  }
}
```

These are the documented defaults; choose explicit overrides for your annotation interface.
