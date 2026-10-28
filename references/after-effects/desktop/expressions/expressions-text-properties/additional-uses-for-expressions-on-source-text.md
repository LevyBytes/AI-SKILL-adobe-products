# Additional uses for expressions on source text

Dropping a Text layer into a composition and attaching an expression to its Source Text property is a handy way to inspect property values on other layers. As an illustration, the expression below — placed on a Source Text property — prints both the name and the Opacity value of whichever layer sits next in the stacking order:

```javascript
var nextLayer =  thisComp.layer(index + 1);
nextLayer.name + "\rOpacity = " + nextLayer.opacity.value;
```

The next sample prints the name of the footage feeding the uppermost image layer in the stack — at the current time — that has its Video switch turned on:

```javascript
// Create sourceFootageName as a blank string
var sourceFootageName = "";

// Loop through all layers in the composition
for (var i = 1; i <= thisComp.numLayers; i++) {

    // If i matches this layer's index, continue to next loop
    if (i == index) {
        continue;
    }

    // Set myLayer for the current iteration of the loop
    var myLayer = thisComp.layer(i);

    // If myLayer has no video or isn't active, continue to next loop/layer
    if ( !myLayer.hasVideo || !myLayer.active ) {
      continue;
    }

    // If myLayer is active at the current time
    if ( myLayer.active ) {
        try {
            // Set sourceFootageName to myLayer's source name
            sourceFootageName = myLayer.source.name;
        } catch ( err ) {
            // If myLayer has no source,
            // set sourceFootageName to the myLayer's name
            sourceFootageName = myLayer.name;
        }

        // Stop looping
        break;
    }
}

// Display the sourceFootageName
sourceFootageName;
```
