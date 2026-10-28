# Print coordinate example

```javascript
// Creates a new document with symbol items that extend
// off the page then print with each print orientation
var docRef = documents.add();
var y = 500;
var x = -70;

if (docRef.symbols.length > 0) {

    for (var i = 0; i < 5; i++) {
        symbolRef = docRef.symbols[0];

        symbolItemRef1 = docRef.symbolItems.add(symbolRef);
        symbolItemRef1.top = y;
        symbolItemRef1.left = x;

        x += 30;
    }

    redraw();

    // Print it with various Coordinate Options
    var coordinateOptions = new PrintCoordinateOptions();
    var options = new PrintOptions();
    options.coordinateOptions = coordinateOptions;

    coordinateOptions.emulsion = true; // reverse from right to left
    coordinateOptions.fitToPage = true; // fit artwork to page size
    coordinateOptions.orientation = PrintOrientation.LANDSCAPE;
    docRef.print(options);

    coordinateOptions.emulsion = false;
    coordinateOptions.fitToPage = false;
    coordinateOptions.orientation = PrintOrientation.PORTRAIT;
    coordinateOptions.horizontalScale = 50;
    coordinateOptions.verticalScale = 50;
    docRef.print(options);
}
```
