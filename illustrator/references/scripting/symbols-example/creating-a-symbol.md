# Creating a symbol

```javascript
// Creates a path item from each graphic style
// then adds each item as a new symbol

var docRef = documents.add();
var y = 750;
var x = 25;

var iCount = docRef.graphicStyles.length;

for (var i=0; i<iCount; i++) {

    var pathRef = docRef.pathItems.rectangle( y, x, 20, 20 );
    docRef.graphicStyles[i].applyTo(pathRef);

    // are we at bottom?
    if ( (y-=60) <= 60 ) {
        y = 750; // go back to the top.
        x+= 200
    }

    redraw();
    docRef.symbols.add(pathRef);
}
```
