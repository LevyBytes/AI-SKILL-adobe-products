# MarkerValue object

new MarkerValue(comment, chapter, url, frameTarget, cuePointName, params)

### Description

A layer or composition marker is what the MarkerValue object stands for. To a specific spot in a layer it attaches a comment, plus — if you want them — a chapter reference point, a Web-page link, or a Flash Video cue point.

Build one with the constructor; every argument other than comment may be skipped.

Each argument is a string assigned into the matching attributes of the MarkerValue object that comes back, the lone exception being params; that one is an array of key-value pairs you then reach through the getParameters() and setParameters() methods.

Any number of parameter pairs can be set by a script; their order has no bearing on how they appear in the application.

Binding a marker to a layer means putting the MarkerValue object into the layer's Layer.marker property: layerObject.property("Marker").setValueAtTime(time, markerValueObject);

Binding a marker to a composition means putting the MarkerValue object into the comp's CompItem.markerProperty property: compObject.markerProperty.setValueAtTime(time, markerValueObject);

For details on how markers are used, consult "Using markers" within After Effects Help.

### Examples

```javascript
var myMarker = new MarkerValue("FadeUp");
myLayer.property("Marker").setValueAtTime(2, myMarker);
// or
myLayer.marker.setValueAtTime(2, myMarker);
```

```javascript
var myMarker = new MarkerValue("FadeUp");
comp.markerProperty.setValueAtTime(2, myMarker);
```

```javascript
var layer = app.project.item(1).layer(1);
var markerProperty = layer.marker;

var commentOfFirstMarker = markerProperty.keyValue(1).comment;

// or
var commentOfMarkerAtTime4 = markerProperty.valueAtTime(4.0, true).comment;

// or
var markerValueAtTimeClosestToTime4 = markerProperty.keyValue(markerProperty.nearestKeyIndex(4.0));
var commentOfMarkerClosestToTime4 = markerValueAtTimeClosestToTime4.comment;
```
