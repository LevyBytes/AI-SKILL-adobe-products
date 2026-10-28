# Settings for page numbering

This example assigns page-numbering settings to pages. NumberingME contains the complete version.

```js
const { PageNumberStyle } = require("indesign");
myDocument.sections.item(0).pageNumberStyle = PageNumberStyle.arabicAlifBaTah;
myDocument.sections.item(1).pageNumberStyle = PageNumberStyle.arabicAbjad;
```
