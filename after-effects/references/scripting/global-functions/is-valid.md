# isValid()

isValid(obj)

### Description

Tests whether a given After Effects object (e.g., composition, layer, mask, etc.) is still around. Certain calls, PropertyBase.moveTo() among them, can break variable references you previously bound to related objects, so use this to confirm such a reference still holds before you try to read from it.

### Parameters

| Parameter | Description |
| --- | --- |
| obj | The After Effects object to check for validity. |

### Returns

Boolean.

### Example

```javascript
var layer = app.project.activeItem.layer(1); // assume layer has three masks
alert(isValid(layer)); // displays "true"
var mask1 = layer.mask(1);
var mask2 = layer.mask(2);
var mask3 = layer.mask(3);
mask3.moveTo(1); // move the third mask to the top of the mask stack
alert(isValid(mask1)); // displays "false"; mask2 and mask3 do as well
```

timeToCurrentFormat(time, fps[, isDuration])

### Description

Goes the other direction from a numeric time (a count of seconds) to a frame time, meaning a formatted string naming the frame that lands at that moment for the rate you give. With a time of 0.5 seconds at 24 fps, the frame reads 0:00:12 (assuming the project shows time as timecode). Switch the rate to 30 fps and it becomes 0:00:15. A project setting governs how the timecode string is formatted. Durations count their frames from 0, while all other times count from the project's start frame (see Project displayStartFrame attribute).

### Parameters

| Parameter | Description |
| --- | --- |
| time | The number of seconds, a floating-point value. |
| fps | The frames-per-second, a floating-point value. |
| isDuration | Optional. When true, the time is a duration (measured from frame 0). When false (the default), the time is measured from the project's starting frame. |

### Returns

String in the project's current time display format.
