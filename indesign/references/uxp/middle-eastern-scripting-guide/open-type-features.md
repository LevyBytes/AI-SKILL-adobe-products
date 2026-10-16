# Open Type features

Layouts that use an Open Type Font can use extra Open Type capabilities. Script access to those capabilities is available through OtfOverlapSwash, OtfStylisticAlternate, OtfJustificationAlternate, and OtfStretchedAlternate.

```js
myTextFrame.paragraphs.item(0).otfOverlapSwash = true;
myTextFrame.paragraphs.item(0).otfStylisticAlternate = true;
myTextFrame.paragraphs.item(0).otfJustificationAlternate = true;
myTextFrame.paragraphs.item(0).otfStretchedAlternate = true;
```
