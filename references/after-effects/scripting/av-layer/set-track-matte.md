# AVLayer.setTrackMatte()

app.project.item(index).layer(index).setTrackMatte(trackMatteLayer, trackMatteType)

Note

This functionality was added in After Effects 23.0

### Description

Assigns both the track matte layer and the matte type for this layer. Hand null to the trackMatteLayer parameter and the track matte is removed. AVLayer.removeTrackMatte() is another way to strip a track matte off.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| trackMatteLayer | AVLayer | The layer to be used as the track matte layer. |
| trackMatteType | TrackMatteType enum | The type of the track matte to be used. |

Warning

Passing in TrackMatteType.`NO_TRACK_MATTE` as type is invalid and will result in no-op.

### Returns

Nothing

### Example

```javascript
// Sets the track matte layer of myLayer with otherLayer as Alpha type
myLayer.setTrackMatte(otherLayer, TrackMatteType.ALPHA);

// Keeps the same trackMatteLayer and only changes the track matte type
myLayer.setTrackMatte(myLayer.trackMatteLayer, TrackMatteType.LUMA);

// Changes the track matte layer but keep the same track matte type
myLayer.setTrackMatte(newTrackMatteLayer, myLayer.trackMatteType);

// Removes the track matte for myLayer and sets the new specified TrackMatteType
myLayer.setTrackMatte(null, TrackMatteType.ALPHA);
myLayer.setTrackMatte(null, TrackMatteType.NO_TRACK_MATTE);

// Invalid. Nothing happens
myLayer.setTrackMatte(otherLayer, TrackMatteType.NO_TRACK_MATTE);
```

app.project.item(index).layer(index).sourcePointToComp()

Note

This functionality was added in After Effects 13.2 (CC 2014.2)

### Description

Translates coordinates given in the layer's space, like boxTextPos, into composition coordinates.

Warning

On a text layer, this value accounts for nothing beyond the first character, evaluated at the current time.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| boxTextPos | Array of floating-point values, [x, y] | A position array of layer coordinates. |

### Returns

Array of ([X,Y]) position coordinates; read-only.

### Example

```javascript
// For a paragraph text layer.
// Converts position in layer coordinates to comp coordinates.
var boxTextCompPos = myTextLayer.sourcePointToComp(boxTextLayerPos);
```
