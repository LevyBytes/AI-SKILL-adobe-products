# Inserting special ME character

Through enumerations, InDesign Server can insert three Hebrew characters (Geresh, Gershayim, Maqaf), four Arabic characters (Kashida, Arabic comma, Arabic Semicolon, and Arabic Question mark), plus a right-to-left marker or left-to-right marker. This script inserts special Middle Eastern characters. SpecialCharactersME contains the complete version.

```js
const { SpecialCharacters } = require("indesign");
let myTextFrame = myDocument.pages.item(0).textFrames.add();
//Entering InDesign special ME characters by their enumerations:
myTextFrame.parentStory.insertionPoints.item(-1).contents = "Hebrew Maqaf: ";
myTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.hebrewMaqaf;
myTextFrame.parentStory.insertionPoints.item(-1).contents = "\r";
myTextFrame.parentStory.insertionPoints.item(-1).contents = "Hebrew Geresh: ";
myTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.hebrewGeresh;
myTextFrame.parentStory.insertionPoints.item(-1).contents = "\r";
myTextFrame.parentStory.insertionPoints.item(-1).contents = "Hebrew Gershayim: ";
myTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.hebrewGershayim;
myTextFrame.parentStory.insertionPoints.item(-1).contents = "\r";
myTextFrame.parentStory.insertionPoints.item(-1).contents = "Arabic Kashida: ";
myTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.arabicKashida;
myTextFrame.parentStory.insertionPoints.item(-1).contents = "\r";
myTextFrame.parentStory.insertionPoints.item(-1).contents = "Arabic Comma: ";
myTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.arabicComma;
myTextFrame.parentStory.insertionPoints.item(-1).contents = "\r";
myTextFrame.parentStory.insertionPoints.item(-1).contents = "Arabic Semicolon: ";
myTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.arabicSemicolon;
myTextFrame.parentStory.insertionPoints.item(-1).contents = "\r";
myTextFrame.parentStory.insertionPoints.item(-1).contents = "Arabic Question Mark: ";
myTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.arabicQuestionMark;
myTextFrame.parentStory.insertionPoints.item(-1).contents = "\r";
myTextFrame.parentStory.insertionPoints.item(-1).contents = "Right To Left Mark: ";
myTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.rightToLeftMark;
myTextFrame.parentStory.insertionPoints.item(-1).contents = "\r";
myTextFrame.parentStory.insertionPoints.item(-1).contents = "Left To Right Mark: ";
myTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.leftToRightMark;
myTextFrame.parentStory.insertionPoints.item(-1).contents = "\r";
```
