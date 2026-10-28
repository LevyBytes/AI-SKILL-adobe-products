# AVLayer.trackMatteType

app.project.item(index).layer(index).trackMatteType

Note

This functionality was updated in After Effects 23.0

Warning

This is a Legacy API we don't recommend using for setting Track Matte Type in new scripts. Please consider using the latest track matte APIs AVLayer.setTrackMatte() and AVLayer.removeTrackMatte() for your tasks.

### Description

When a track matte is present on this layer, this sets how that matte is applied. Assign the TrackMatteType.`NO_TRACK_MATTE` type to strip the track matte off the layer and clear the track matte type back to its default.

### Type

A TrackMatteType enumerated value; read/write. One of:

- TrackMatteType.ALPHA
- TrackMatteType.`ALPHA_INVERTED`
- TrackMatteType.LUMA
- TrackMatteType.`LUMA_INVERTED`
- TrackMatteType.`NO_TRACK_MATTE`

### Example

```javascript
// Returns the current track matte type for myLayer
var type = myLayer.trackMatteType;

// *** We recommend using the new Track Matte APIs for the operations below (See Warning) ***

// Changes the track matte type for myLayer to TrackMatteType.ALPHA_INVERTED
myLayer.trackMatteType = TrackMatteType.ALPHA_INVERTED;

// Removes the track matte and also resets the type
myLayer.trackMatteType = TrackMatteType.NO_TRACK_MATTE;
```
