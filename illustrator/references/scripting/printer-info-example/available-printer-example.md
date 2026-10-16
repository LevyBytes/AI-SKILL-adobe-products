# Available printer example

```javascript
// Displays a list of available printers in a new text frame
var docRef = documents.add();
var iCount = printerList.length;

var textRef = docRef.textFrames.add();
textRef.contents += "Printers...\r";

for (var i = 0; i < iCount; i++) {
    textRef.contents += printerList[i].name;
    textRef.contents += "\r\t";
}

textRef.top = 600;
textRef.left = 200;

redraw();
```
