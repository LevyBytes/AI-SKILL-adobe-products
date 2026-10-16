# Clearing fills with NoColor

```javascript
// Creates 2 overlapping objects with different fill colors.
// Assign the top object a fill color of "NoColor"
// allowing the bottom object to become visible.

// Create 2 overlapping objects one blue, one red;
var docRef = documents.add();
var itemRef1 = docRef.pathItems.rectangle(500, 200, 200, 100);
var itemRef2 = docRef.pathItems.rectangle(550, 150, 200, 200);
var rgbColor = new RGBColor();
rgbColor.red = 255;
itemRef2.fillColor = rgbColor;

rgbColor.blue = 255;
rgbColor.red = 0;
itemRef1.fillColor = rgbColor;
redraw();

// create a nocolor and assign it to the top object
var noColor = new NoColor();
itemRef2.fillColor = noColor;
redraw();
```
