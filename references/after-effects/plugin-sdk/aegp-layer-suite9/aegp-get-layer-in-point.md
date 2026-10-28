# AEGP_GetLayerInPoint

`AEGP_GetLayerInPoint`

Fetches the moment of the first frame that is visible, given in either composition or layer time. When measured in layer time, in_pointPT comes back as 0.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLayerInPoint(
  AEGP_LayerH     layerH,
  AEGP_LTimeMode  time_mode,
  A_Time          *in_pointPT);
```
