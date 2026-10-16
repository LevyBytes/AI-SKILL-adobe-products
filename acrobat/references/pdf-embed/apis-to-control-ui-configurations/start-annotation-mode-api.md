# startAnnotationMode API

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
