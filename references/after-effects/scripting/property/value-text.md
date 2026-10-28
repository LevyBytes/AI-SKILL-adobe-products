# Property.valueText

app.project.item(index).layer(index).propertySpec.valueText

Note

This functionality was added in After Effects 26.0

### Description

Holds the text of whichever item is currently chosen in a dropdown menu property. It covers dropdown menu properties on effects and layers alike, including the custom strings in the Menu property of Dropdown Menu Controls.

### Examples

```javascript
// Get the currently-selected text string from a Dropdown Menu Control
var comp = app.project.activeItem;
if (comp && comp.selectedLayers.length > 0) {
    var lyr = comp.selectedLayers[0];
    var fx = lyr.property("ADBE Effect Parade").property("Dropdown Menu Control");
    var menuProp = fx.property("Menu");
    var selectedText = menuProp.valueText; // e.g., "Sunday"
}
```

### Type

String; read-only.
