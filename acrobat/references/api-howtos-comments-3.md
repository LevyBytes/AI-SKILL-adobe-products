# Howtos Comments (part 3)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## APIs to control UI configurations

These APIs put the UI under your control:

- `setConfig`: switches UI elements on or off
- `selectAnnotation`: picks an annotation and moves focus onto it
- `unselectAnnotation`: clears the selection on an annotation
- `startAnnotationMode`: steps into annotation mode
- `endAnnotationMode`: steps back out of annotation mode

### setConfig API

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

```javascript
{
       showToolbar: <Boolean, Default=true>,
       showCommentsPanel: <Boolean, Default=true>,
       downloadWithAnnotations: <Boolean, Default=false>,
       showToolsOnTextSelection: <Boolean, default=true>,
       printWithAnnotations: <Boolean, Default=false>
}
```

### API output

A Promise comes back that:

- settles when the operation succeeds
- turns down with an error object carrying a code and message on failure.

### API signature

```javascript
const customFlags = {
   showToolbar: <Boolean, Default=true>,
   showCommentsPanel: <Boolean, Default=true>,
   downloadWithAnnotations: <Boolean, Default=false>,
   showToolsOnTextSelection: <Boolean, default=true>,
   printWithAnnotations: <Boolean, Default=false>,
}

previewFilePromise.then(adobeViewer => {
   adobeViewer.getAnnotationManager().then(annotationManager => {
       annotationManager.setConfig(customFlags)
           .then(() => console.log("Success"))
           .catch(error => console.log(error));
   });
});
```

**Method 2: Pass the flags to previewFile**

Rather than routing them to `setConfig`, you can drop the flags into the
`annotationUIConfig` object, which then travels into the previewFile API
among its preview configuration.

```javascript
annotationUIConfig: {
  showToolbar: <Boolean, default=true>,
  showCommentsPanel: <Boolean, default=true>,
  showToolsOnTextSelection: <Boolean, default=true>,
  downloadWithAnnotations: <Boolean, default=false>,
  printWithAnnotations: <Boolean, default=false>
}
```

### selectAnnotation API

This one picks out an existing annotation and moves focus onto it. The select action lands on whichever annotation the annotation ID points to.

### Input parameters

`<Annotation_ID>`

### API output

A Promise comes back that:

- settles once the select-annotation operation goes through
- turns down with an error object carrying an error code and message

### API signature

```javascript
const annotation_ID = <Annotation_ID>;

previewFilePromise.then(adobeViewer => {
   adobeViewer.getAnnotationManager().then(annotationManager => {
    annotationManager.selectAnnotation(annotation_ID)
        .then(() => console.log("Success"))
        .catch(error => console.log(error));
  });
});
```

### unselectAnnotation API

Whatever annotation was selected last gets unselected by this API.

### Input parameters

N/A

### API output

N/A

### API signature

```javascript
previewFilePromise.then((adobeViewer) => {
  adobeViewer.getAnnotationManager().then((annotationManager) => {
    annotationManager.unselectAnnotation();
  });
});
```

### startAnnotationMode API

Turning on a given annotation mode is this API's job, letting you place annotations of that type or wield the eraser tool. It takes one annotation mode as its input. That mode may be any of the annotation types the PDF Embed API supports, and these optional parameters go with it:

- `defaultColor`: Hex code that picks the annotation color. Every
  annotation type honors this parameter.
- `cursor`: A [CSS standards-based](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
  string saying which cursor style shows when annotation begins. Every
  annotation type honors this parameter.
- `fontSize`: A font size somewhere in the 6-24px band. Only add text
  annotations make use of this parameter.
- `strokeWidth`: A stroke width somewhere from 1 to 12 that fixes how
  thick the drawing annotation's line is.

### Input parameters

Two parameters take these values:

- `mode`: Permissible values include: note, highlight, shape, underline, strikeout, freetext or eraser
- `options`: defaultColor: `<COLOR_HEX_CODE>`, cursor: `<CURSOR_TYPE>`, fontSize: `<FONT_SIZE>`, strokeWidth: `<STROKE_WIDTH>`

### API output

A Promise comes back that:

- settles once the start-annotation-mode operation goes through
- turns down with an error object carrying a code and message

### API signature

```javascript
// Add text annotation
const mode = "freetext";
const options = {
  defaultColor: "#b80000",
  cursor: "crosshair",
  fontSize: "15px",
};

// Drawing annotation
/* const mode = "shape";
const options = {
  defaultColor: "#b80000",
  cursor: "crosshair",
  strokeWidth: 5
}; */

previewFilePromise.then((adobeViewer) => {
  adobeViewer.getAnnotationManager().then((annotationManager) => {
    annotationManager
      .startAnnotationMode(mode, options)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  });
});
```

### endAnnotationMode API

The annotation mode started most recently is shut down by this API.

### Input parameters

N/A

### API output

N/A

### API signature

```javascript
previewFilePromise.then((adobeViewer) => {
  adobeViewer.getAnnotationManager().then((annotationManager) => {
    annotationManager.endAnnotationMode();
  });
});
```

## Code Samples

[You'll find working code samples over on Github.](https://www.adobe.com/go/pdfembedapi_samples)
