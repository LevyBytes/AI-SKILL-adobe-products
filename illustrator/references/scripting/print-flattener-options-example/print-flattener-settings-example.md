# Print flattener settings example

```javascript
// Creates a new document, adds symbols to the document
// then prints with a range of flattener balance settings
var docRef = documents.add();
var y = docRef.height - 30;

for (var i = 0; i < (docRef.symbols.length); i++) {
    symbolRef = docRef.symbols[i];

    symbolItemRef1 = docRef.symbolItems.add(symbolRef);
    symbolItemRef1.top = y;
    symbolItemRef1.left = 100;

    y -= (symbolItemRef1.height + 10);
}

redraw();

// Create PrintFlattenerOptions object and assign to a PrintOptions object
var flatOpts = new PrintFlattenerOptions();
var printOpts = new PrintOptions();
printOpts.flattenerOptions = flatOpts;

// Set other print options
printOpts.ClipComplexRegions = true;
printOpts.GradientResoultion = 360;
printOpts.RasterizatonResotion = 360;

// Print the current document with flattening balance increments of 20
for (var i = 0; i <= 100; i += 20) {
    flatOpts.flatteningBalance = i;
    activeDocument.print(printOpts);
}
```
