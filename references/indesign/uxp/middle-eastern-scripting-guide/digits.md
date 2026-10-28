# Digits

Choose which language form is used when numeric digits are shown. With Default, a number follows the language of the preceding character; the other choices are Arabic, Hindi, and Farsi numbers. In the text object, that setting maps to DigitsType.

```js
const { DigitsTypeOptions } = require("indesign");
myTextFrame.contents = "Farsi Digits: 1234567890";
myTextFrame.paragraphs.item(0).digitsType = DigitsTypeOptions.farsiDigits;
```
