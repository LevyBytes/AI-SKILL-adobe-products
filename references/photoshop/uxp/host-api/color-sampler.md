# ColorSampler

Models a `ColorSampler` object in the Photoshop DOM.

Create ColorSampler instances from the [ColorSamplers](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/colorsamplers.md) collection by calling [ColorSamplers.add](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/colorsamplers.md#add):

```javascript
const app = require("photoshop").app;
app.activeDocument.colorSamplers.add({ x: 100, y: 100 });
```

After creation, read `color`, `position`, and `parent` from that ColorSampler object:

```javascript
let cs = app.activeDocument.colorSamplers[0];
console.log(cs.position); // {x: 100, y: 100}
console.log(cs.color.rgb); // SolidColor {red: 0, green: 255, blue: 0}
console.log(cs.parent); // Document
```

Move an existing ColorSampler instance by supplying a new position:

```javascript
cs.move({ x: 200, y: 200 });
console.log(cs.position); // {x: 200, y: 200}
```

Remove it from the document when it is no longer needed:

```javascript
cs.remove();
console.log(app.activeDocument.colorSamplers.length); // 0
```

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| color | [_SolidColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/solidcolor.md) \| [_NoColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/colors/nocolor.md) | R | 24.0 | Current-position color readout for this ColorSampler. |
| docId | _number_ | R | 24.0 | ID of the Document associated with this ColorSampler. |
| parent | [_Document_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md) | R | 24.0 | Document that owns this ColorSampler. |
| position | _object_ | R | 24.0 | Current ColorSampler position. |
| typename | _string_ | R | 24.0 | Referenced object class name: _"ColorSampler"_. |

### Methods
