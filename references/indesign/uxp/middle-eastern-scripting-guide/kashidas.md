# Kashidas

Arabic and Naskh justification can add both kashidas and spaces. To prevent kashida insertion in Arabic text, set the Kashidas property through InDesign scripting to kashidasOff; use defaultKashidas when the default behavior is desired.

```js
const { KashidasOptions, Justification, ParagraphJustificationOptions } = require("indesign");
myTextFrame.contents = "ÙƒÙØªÙØ¨ÙŽ Kashidas Off";
myTextFrame.paragraphs.item(0).kashidas = KashidasOptions.kashidasOff;
myTextFrame.paragraphs.item(0).justification = Justification.fullyJustified;
myTextFrame.paragraphs.item(0).paragraphJustification =
  ParagraphJustificationOptions.naskhJustification;
```
