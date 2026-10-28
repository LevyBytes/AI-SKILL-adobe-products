# MarkerCollection.deleteMarker()

app.project.sequences[index].markers.deleteMarker(marker)

app.project.rootItem.children[index].getMarkers().deleteMarker(marker)

### Description

Deletes the specified marker object from the collection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| marker | Marker object | Marker object that should be removed from the collection. |

### Returns

Boolean.

### Examples

Delete every marker on the active sequence

```javascript
var markers = app.project.activeSequence.markers;
var marker = markers.getFirstMarker();
var count = markers.numMarkers;

while (marker) {
    markers.deleteMarker(marker);
    marker = markers.getFirstMarker();
}

alert('Removed ' + count.toString() + ' markers');
```
