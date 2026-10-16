# Looking up paper information

```javascript
// Displays the papers and paper sizes available for the 2nd printer in a text frame

var docRef = documents.add();
var itemRef = docRef.pathItems.rectangle(600, 300, 200, 100);
var textRef = docRef.textFrames.add();
textRef.top = 600;
textRef.left = 50;

// get paper objects for 2nd printer
var printerRef = printerList[1];
textRef.contents = printerRef.name;
textRef.contents += " paper list:\r";
var paragraphCount = 2;

// get details of each paper
var iCount = printerRef.printerInfo.paperSizes.length;
for (var i = 0; i < iCount; i++) {
    var paperRef = printerRef.printerInfo.paperSizes[i];
    var paperInfoRef = paperRef.paperInfo;
    textRef.contents += paperRef.name;
    textRef.contents += "\t";
    textRef.contents += paperInfoRef.height;
    textRef.contents += " x ";
    textRef.contents += paperInfoRef.width;
    textRef.contents += "\r";
    paragraphCount++;
}
redraw();
```
