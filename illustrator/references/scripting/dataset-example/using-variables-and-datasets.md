# Using variables and datasets

```javascript
// Creates two variables, 1 visibility and 1 text,
// creates two datasets each with different values for the variables,
// then displays both datasets

var docRef = documents.add();

// Create visibility variable
var itemRef = docRef.pathItems.rectangle(600, 200, 150, 150);
var colorRef = new RGBColor;
colorRef.red = 255;
itemRef.fillColor = colorRef;

var visibilityVar = docRef.variables.add();
visibilityVar.kind = VariableKind.VISIBILITY;
itemRef.visibilityVariable = visibilityVar;

// Create text variable
var textRef = docRef.textFrames.add();
textRef.contents = "Text Variable, dataset 1";
textRef.top = 400;
textRef.left = 200;

var textVar = docRef.variables.add();
textVar.kind = VariableKind.TEXTUAL;
textRef.contentVariable = textVar;
redraw();

// Create dataset 1
var ds1 = docRef.dataSets.add();

// Change variable values and create dataset 2
itemRef.hidden = true;
textRef.contents = "Text Variable, dataset 2";
redraw();
var ds2 = docRef.dataSets.add();

// display each dataset
ds1.display();
redraw();
ds2.display();
redraw();
```
