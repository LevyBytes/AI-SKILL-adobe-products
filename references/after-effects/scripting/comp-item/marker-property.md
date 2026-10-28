# CompItem.markerProperty

app.project.item(index).markerProperty

Note

This functionality was added in After Effects 14.0 (CC 2017)

### Description

A PropertyGroup object gathering every marker on a composition. Scripting composition markers behaves identically to scripting Layer markers.

See MarkerValue object.

### Type

PropertyGroup object or null; read-only.

### Example

The snippet below spins up a project and a composition, then adds two composition markers carrying different properties

```javascript
// comp.markerProperty allows you to add markers to a comp.
// It has the same functionality as layer.property("Marker")
var currentProj = app.newProject();
var comp = currentProj.items.addComp("mycomp", 1920, 1080, 1.0, 5, 29.97);
var solidLayer = comp.layers.addSolid([1, 1, 1], "mylayer", 1920, 1080, 1.0);

var compMarker = new MarkerValue("This is a comp marker!");
compMarker.duration = 1;

var compMarker2 = new MarkerValue("Another comp marker!");
compMarker2.duration = 1;

comp.markerProperty.setValueAtTime(1, compMarker);
comp.markerProperty.setValueAtTime(3, compMarker2);
```
