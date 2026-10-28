# AEGP_GetLayerMaskedBounds

`AEGP_GetLayerMaskedBounds`

Supply a layer handle together with a time, and it hands back the boundary of the region left visible once masks are applied.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLayerMaskedBounds(
  AEGP_LayerH   layerH,
  const A_Time  *comp_timePT,
  A_FloatRect   *boundsPR);
```
