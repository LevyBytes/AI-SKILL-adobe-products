# Getting ink information

```javascript
// Displays the current documents inks in a text frame

var docRef = documents.add();

// assemble a string of the inks in this document
var sInks = "";
var iLength = activeDocument.inkList.length;
for (var i = 0; i < iLength; i++) {
    sInks += docRef.inkList[i].name;
    sInks += "\r\t";
    sInks += "Frequency = " + docRef.inkList[i].inkInfo.frequency;
    sInks += "\r\t";
    sInks += "Density = " + docRef.inkList[i].inkInfo.density;
    sInks += "\r";
}

var textRef = docRef.textFrames.add();
textRef.contents = sInks;
textRef.top = 600;
textRef.left = 200;

redraw();
```
