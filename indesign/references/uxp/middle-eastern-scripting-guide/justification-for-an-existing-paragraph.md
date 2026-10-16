# Justification for an existing paragraph

```js
const { ParagraphJustificationOptions } = require("indesign");
with (myTextFrame) {
  //Set ME paragraph attributes.
  paragraphs.item(1).paragraphJustification = ParagraphJustificationOptions.naskhJustification;
}
```
