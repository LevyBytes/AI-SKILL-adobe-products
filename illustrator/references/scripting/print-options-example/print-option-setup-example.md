# Print option setup example

```javascript
// Creates a new document, adds symbols, specifies a variety of print options,
// assigns each print option to a PrintOptions object,
// then prints with those options
// Create a new document and add some symbol items
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

// Create multiple options and assign to PrintOptions
var options = new PrintOptions();

var colorOptions = new PrintColorManagementOptions();
colorOptions.name = "ColorMatch RGB";
colorOptions.intent = PrintColorIntent.SATURATIONINTENT;
options.colorManagementOptions = colorOptions;

var printJobOptions = new PrintJobOptions();
printJobOptions.designation = PrintArtworkDesignation.ALLLAYERS;
printJobOptions.reverse = true;

options.jobOptions = printJobOptions;

var coordinateOptions = new PrintCoordinateOptions();
coordinateOptions.fitToPage = true;
options.coordinateOptions = coordinateOptions;

var flatOpts = new PrintFlattenerOptions();
flatOpts.ClipComplexRegions = true;
flatOpts.GradientResoultion = 60;

flatOpts.RasterizatonResotion = 60;
options.flattenerOptions = flatOpts;

// Print with options
docRef.print(options);
```
