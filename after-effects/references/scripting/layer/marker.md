# Layer.marker

app.project.item(index).layer(index).marker

### Description

A PropertyGroup object gathering every marker on a layer. Scripting layer markers behaves identically to scripting Comp markers.

See MarkerValue object.

### Type

PropertyGroup object or null; read-only.

### Example

The snippet below makes two layer markers, each with different properties

```javascript
var solidLayer = comp.layers.addSolid([1, 1, 1], "mylayer", 1920, 1080, 1.0);

var layerMarker = new MarkerValue("This is a layer marker!");
layerMarker.duration = 1;

var layerMarker2 = new MarkerValue("Another comp marker!");
layerMarker2.duration = 1;

solidLayer.marker.setValueAtTime(1, layerMarker);
solidLayer.marker.setValueAtTime(3, layerMarker2);
```
