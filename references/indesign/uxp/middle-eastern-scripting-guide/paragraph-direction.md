# ParagraphDirection

Paragraph direction determines how multidirectional text is ordered within the paragraph. The default direction is Left To Right.

To change an existing paragraph's main direction through InDesign scripting, set the paragraphDirection property. This property belongs to Text objects and accepts one ParagraphDirectionOptions value: leftToRightDirection or rightToLeftDirection. The sample below sets that property. MEParagraphAttributes contains the complete version.

```js
const { ParagraphDirectionOptions } = require("indesign");
with (myTextFrame) {
  //Set ME paragraph attributes.
  paragraphs.item(0).paragraphDirection = ParagraphDirectionOptions.leftToRightDirection;
}
```
