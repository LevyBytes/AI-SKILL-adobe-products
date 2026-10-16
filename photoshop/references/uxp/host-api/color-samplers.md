# ColorSamplers

The `ColorSamplers` collection provides array-style access to a document's ColorSamplers.

Use the [Document.colorSamplers](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#colorsamplers) property to reach it. For instance, this call appends one colorSampler:

```javascript
const app = require("photoshop").app;
app.activeDocument.colorSamplers.add({ x: 20, y: 20 });
```

Read a colorSampler through the collection's `[index]` property, then inspect its properties.
This example takes the first colorSampler and destructures `color` and `position`, yielding a sampled [SolidColor](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/solidcolor.md) object plus the current `{x, y}` coordinate object:

```javascript
const cs = app.activeDocument.colorSamplers[0];
const { color, position } = cs; // destructuring assignment
console.log(color.rgb); // returns a SolidColor object:
// {red: 0, green: 255, blue: 0, model: ColorModel.RGB}
console.log(position); // returns an object: {x: 20, y: 20}
```

Call `removeAll()` to clear the colorSamplers collection.

```javascript
app.activeDocument.colorSamplers.removeAll();
app.activeDocument.colorSamplers.length; // returns 0
```

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| length | _number_ | R | 24.0 | Count of [ColorSampler](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/colorsampler.md) entries held here. |

Run in Photoshop with the intended document active.

```javascript
const { app } = require("photoshop");
// A newly created document has no color samplers.
app.activeDocument.colorSamplers.length; // 0 for that new document.
```
| parent | Document | R | 24.0 | Owner [Document](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md) for this ColorSamplers collection. |

### Methods
