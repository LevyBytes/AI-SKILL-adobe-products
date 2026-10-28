# Paragraph direction for application and document

The same property can set text defaults for both the application and an individual document:

```js
const { ParagraphDirectionOptions } = require("indesign");
myDocument.textDefaults.paragraphDirection = ParagraphDirectionOptions.rightToLeftDirection;
```
