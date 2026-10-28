# FontObject.designAxesData

app.fonts.allFonts[0][0].designAxesData

### Description

Hands back an Array of Objects holding the font's design-axis data. Within each object you get the axis name, its tag, the minimum and maximum values, plus the default value.

Tip

Will return undefined for non-variable fonts.

### Example

The snippet below shows how to inspect the axes of a variable font applied to a selected Text layer:

```javascript
// Prerequisite: Create and select a Text layer that uses a variable font
var textLayer = app.project.activeItem.selectedLayers[0];

// Get the font object
var textDocument = textLayer.property("Source Text").value;
var fontObject = textDocument.fontObject;

// Check for axes and display any that are found
if (fontObject && fontObject.designAxesData) {
    var axes = fontObject.designAxesData;
    var message = "Variable Font Axes (" + axes.length + " total):\n\n";

    for (var i = 0; i < axes.length; i++) {
        var axis = axes[i];
        message += "Axis " + (i + 1) + ":\n";
        message += "  Tag: " + axis.tag + "\n";
        message += "  Name: " + axis.name + "\n";
        message += "  Min: " + axis.min + "\n";
        message += "  Max: " + axis.max + "\n";
        message += "  Default: " + axis.default + "\n";

        if (i < axes.length - 1) {
            message += "\n";
        }
    }

    alert(message);
} else {
    alert("No variable font axes found");
}
```

### Type

Array of Objects; read-only.
