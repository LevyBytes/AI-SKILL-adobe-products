# flashplayer

Class Name: FlashPlayer

### Description

FlashPlayer hosts a Flash Player capable of loading and playing Flash movies saved as SWF files.

The ScriptUI FlashPlayer element hosts the Flash application inside an Adobe application. That Flash application runs ActionScript, which is a JavaScript implementation separate from the ExtendScript JavaScript implementation used by Adobe applications.

This control type provides functions for loading SWF files and controlling playback. It also communicates with ActionScript; see FlashPlayer control functions.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Position and size for the control. |
| moveToLoad | String or File object | Optional. SWF source loaded into the player, provided as a path, URL string, or File. |
| creation_properties | Object | Optional. Object containing any properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Unique control name. |

### Example

Example:

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
w.add("flashplayer"[, bounds, movieToLoad, {creation_properties}]);
```
