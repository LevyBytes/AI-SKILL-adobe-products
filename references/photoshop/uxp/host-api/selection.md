# Selection

Represents one or more selected areas in the document. With no active selection, `bounds` returns `null`. Pixel data underlies the selection, while 8-bit transparency can still be represented.

Pixel selections define where pixel filters act, or the source area used for histogram measurement.

```javascript
const { app, constants } = require("photoshop");
const doc = app.activeDocument;

await doc.selection.selectRectangle(
  { top: 50, left: 50, bottom: 100, right: 100 },
  constants.SelectionType.REPLACE,
);
doc.selection.bounds; // {{top: 50, left: 50, bottom: 100, right: 100}
doc.selection.solid; // true

await doc.selection.selectEllipse(
  { top: 50, left: 70, bottom: 140, right: 100 },
  constants.SelectionType.EXTEND,
);
doc.selection.bounds; // {top: 50, left: 50, bottom: 140, right: 100}
doc.selection.solid; // false
```

**Pixel selection while in Quick Mask Mode**:
After a user enters Quick Mask Mode, Photoshop temporarily represents the selection as a channel rather than the "marching ants" outline.
Scripting can create new pixel selections while Quick Mask Mode is active. When the user leaves Quick Mask Mode, the Quick Mask Channel becomes the active selection.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| bounds | [_Bounds_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/bounds.md) | R | 25.0 | Rectangle enclosing the full selection; it may extend beyond the canvas bounds. |
| docId | _number_ | R | 25.0 | Document ID associated with this Selection. |
| parent | [_Document_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md) | R | 25.0 | Document that owns this Selection. |
| solid | _boolean_ | R | 25.0 | True when the selection is exactly a rectangle and every pixel inside it is fully selected. If inspected as a channel, such as through Quick Mask Mode, it appears as an all-white rectangle; within its bounds, it is solid. |
| typename | _string_ | R | 25.0 | Referenced object class name: _"Selection"_. |

### Methods
