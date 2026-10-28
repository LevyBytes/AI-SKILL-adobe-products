# AEGP_ConvertCompToLayerTime

`AEGP_ConvertCompToLayerTime`

Take a time stated in composition space and get back the equivalent time measured against the layer's source footage.

Suite argument declaration (not a standalone call):

```cpp
AEGP_ConvertCompToLayerTime(
  AEGP_LayerH   layerH,
  const A_Time  *comp_timeP,
  A_Time        *layer_timeP);
```
