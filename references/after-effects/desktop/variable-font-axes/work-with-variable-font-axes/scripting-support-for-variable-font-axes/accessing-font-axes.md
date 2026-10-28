# Accessing Font Axes

```javascript
// Get font object from text layer
var textLayer = comp.layer("My Text");
var sourceText = textLayer.property("Source Text");
var textDocument = sourceText.value;
var fontObject = textDocument.fontObject;

// Check if font has variable axes
if (fontObject && fontObject.designAxesData) {
    var axes = fontObject.designAxesData;

    for (var i = 0; i < axes.length; i++) {
        var axis = axes[i];
        $.writeln("Axis: " + axis.name);
        $.writeln("  Tag: " + axis.tag);
        $.writeln("  Min: " + axis.minValue);
        $.writeln("  Max: " + axis.maxValue);
        $.writeln("  Default: " + axis.defaultValue);
    }
}
```
