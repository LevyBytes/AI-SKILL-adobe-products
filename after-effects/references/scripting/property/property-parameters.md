# Property.propertyParameters

app.project.item(index).layer(index).propertySpec.propertyParameters

Note

This functionality was added in After Effects 26.0

### Description

Returns the full list of item strings held by a dropdown menu property, given as an array. It covers dropdown menu properties on both effects and layers, the custom strings in a Dropdown Menu Control's Menu property included.

Serving as the read side for Property.setPropertyParameters(), this property fetches the strings that populate a dropdown menu.

### Examples

```javascript
// Get all options from a Dropdown Menu Control
var comp = app.project.activeItem;
if (comp && comp.selectedLayers.length > 0) {
    var lyr = comp.selectedLayers[0];
    var fx = lyr.property("ADBE Effect Parade").property("Dropdown Menu Control");
    var menuProp = fx.property("Menu");
    var options = menuProp.propertyParameters; // Array of strings
}
```

### Type

Array of strings; read-only.
