# TextItem

TextItem gathers the type-related properties for a Photoshop Text Layer.

```javascript
const app = require("photoshop").app;
const textItem = app.activeDocument.activeLayers[0].textItem;
```

A subset of TextItem properties and methods is available directly on the instance:

```javascript
textItem.contents; // "Lorem Ipsum"
textItem.contents = "Hello World";
textItem.isPointText; // true
await textItem.convertToParagraphText();
```

[TextItem](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/textitem.md) uses [characterStyle](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/textitem.md#characterstyle) for character-level controls and [paragraphStyle](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/textitem.md#paragraphstyle) for paragraph-level controls.

```javascript
textItem.characterStyle.size; // 12
textItem.characterStyle.size = 24;
textItem.paragraphStyle.hyphenation; // true
```

The [warpStyle](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/textitem.md#warpstyle) object is where the text layer's Warp-effect properties are grouped.

```javascript
textItem.warpStyle.style; // "arcLower"
```

For properties measured in pixels, the accepted value range can vary with document resolution. When that applies, the docs state the range with the phrase "for a 72ppi document".

Font size is one example:

```javascript
// Range: 0.01..1296â€”for a 72ppi document
textItem.characterStyle.size = 1000;
```

For a document at another resolution, calculate the matching range with this formula:

```javascript
newVal = (documentResolution / 72) * referenceVal;

// I.e., for a 300ppi document the maximum font size will be:
// (300 / 72) * 1296 = 5400px
```

When a value is assigned, Photoshop validates it internally. Values outside the allowed range produce a Range Error.

### Properties
