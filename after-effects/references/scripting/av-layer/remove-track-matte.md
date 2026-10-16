# AVLayer.removeTrackMatte()

app.project.item(index).layer(index).removeTrackMatte()

Note

This functionality was added in After Effects 23.0

### Description

Strips this layer's track matte away while leaving its TrackMatteType intact. AVLayer.setTrackMatte() offers an alternative route to removing a track matte.

### Parameters

None.

### Returns

Nothing.

```javascript
// Sets the track matte layer of myLayer with otherLayer as LUMA type
myLayer.setTrackMatte(otherLayer, TrackMatteType.LUMA);

// Removes the track matte for myLayer but preserves the LUMA type
myLayer.removeTrackMatte();

// Still returns TrackMatteType.LUMA
alert(myLayer.trackMatteType);
```
