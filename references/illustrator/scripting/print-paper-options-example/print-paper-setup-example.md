# Print paper setup example

```javascript
// Creates a new document, adds a path item, applies a graphic style
// then prints with specified paper options
var docRef = documents.add();
var pathRef = docRef.pathItems.rectangle(600, 200, 200, 200);
docRef.graphicStyles[1].applyTo(pathRef);

var paperOpts = new PrintPaperOptions;
var printOpts = new PrintOptions;
printOpts.paperOptions = paperOpts;

var printerCount = printerList.length;
if (printerCount > 0) {

    // Print with the 1st paper from the 1st printer
    for (var i = 0; i < printerList.length; i++) {

        if (printerList[i].printerInfo.paperSizes.length > 0) {
            var printerRef = printerList[i];
        }

        var paperRef = printerRef.printerInfo.paperSizes[0];
        if (printerRef.printerInfo.paperSizes.length > 0){
            paperOpts.name = paperRef.name;
            printOpts.printerName = printerRef.name;
            docRef.print(printOpts);
        }
    }
}
```
