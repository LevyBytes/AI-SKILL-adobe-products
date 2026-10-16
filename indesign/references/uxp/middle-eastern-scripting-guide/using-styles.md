# Using styles

Productive text-formatting scripts usually depend on paragraph and character styles. When a Character or Paragraph style is being created, the CharacterStyles and ParagraphStyles Objects expose the character and paragraph attribute properties described earlier.

This fragment requires an existing `myDocument` from [document setup](../document-changes.md) and the Adobe Arabic font. It creates or updates Middle Eastern styles; the source tutorial is CreateStylesME.

```js
const {
  app,
  Justification,
  DigitsTypeOptions,
  CharacterDirectionOptions,
  ParagraphDirectionOptions,
  ParagraphJustificationOptions,
  KashidasOptions,
} = require("indesign");
let myCharacterStyleME, myParagraphStyleME, myName;
//Create a character style named "myCharacterStyleME" if
//no style by that name already exists.
try {
  myCharacterStyleME = myDocument.characterStyles.item("myCharacterStyleME");
  //If the style does not exist, trying to get its name will generate an error.
  myName = myCharacterStyleME.name;
} catch (myError) {
  //The style did not exist, so create it.
  myCharacterStyleME = myDocument.characterStyles.add({ name: "myCharacterStyleME" });
}
myCharacterStyleME.appliedFont = app.fonts.item("Adobe Arabic");
myCharacterStyleME.digitsType = DigitsTypeOptions.farsiDigits;
myCharacterStyleME.characterDirection = CharacterDirectionOptions.leftToRightDirection;
//Create a paragraph style named "myParagraphStyle" if
//no style by that name already exists.
try {
  myParagraphStyleME = myDocument.paragraphStyles.item("myParagraphStyleME");
  //If the paragraph style does not exist, trying to get its name will generate an error.
  myName = myParagraphStyleME.name;
} catch (myError) {
  //The paragraph style did not exist, so create it.
  myParagraphStyleME = myDocument.paragraphStyles.add({ name: "myParagraphStyleME" });
}
myParagraphStyleME.justification = Justification.fullyJustified;
myParagraphStyleME.paragraphDirection = ParagraphDirectionOptions.rightToLeftDirection;
myParagraphStyleME.paragraphJustification = ParagraphJustificationOptions.naskhJustification;
myParagraphStyleME.pointSize = 12;
myParagraphStyleME.kashidas = KashidasOptions.defaultKashidas;
myParagraphStyleME.digitsType = DigitsTypeOptions.hindiDigits;
myParagraphStyleME.appliedFont = app.fonts.item("Adobe Arabic");
myParagraphStyleME.otfJustificationAlternate = true;
```
