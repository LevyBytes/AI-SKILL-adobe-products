# Font

These samples cover reading a Text layer's Font, Font Size, Faux Bold, Faux Italic, Tracking, and Leading:

```javascript
// To return the name of the Font for the text layer itself
text.sourceText.style.font;

// To return the name of the Font another text layer is using
var otherLayer = thisComp.layer("Other Layer Name");

otherLayer.text.sourceText.style.font;

// To return the value of Font Size for the text layer itself
text.sourceText.style.fontSize;

// To return the value of Font Size for another text layer
var otherLayer = thisComp.layer("Other Layer Name");

otherLayer.text.sourceText.style.fontSize;

// To return a Boolean value of whether a layer's text is Faux Bold or not (True or False)
text.sourceText.style.isFauxBold;

// To return a Boolean value of whether a layer's text is Faux Italic or not (True or False)
text.sourceText.style.isFauxItalic;

// To return the value of a text layer’s Tracking as a number
text.sourceText.style.tracking;

// To return the value of a text layer's Leading as a number
text.sourceText.style.leading;
```
