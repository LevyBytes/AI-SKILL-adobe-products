# AEGP_GetLayerCurrentTime

`AEGP_GetLayerCurrentTime`

Fetches the current time, expressed in either layer or composition timespace. Rendering does not refresh this value.

NOTE: Layer time and composition time diverge whenever a layer begins at some point other than time 0, or carries a time-stretch away from 100%.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLayerCurrentTime(
  AEGP_LayerH     layerH,
  AEGP_LTimeMode  time_mode,
  A_Time          *curr_timePT);
```
