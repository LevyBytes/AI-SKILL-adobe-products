# AEGP_GetLayerToWorldXform

`AEGP_GetLayerToWorldXform`

Pass a layer handle plus a time, and it returns the layer-to-world transformation matrix.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLayerToWorldXform(
  AEGP_LayerH   aegp_layerH,
  const A_Time  *comp_timeP,
  A_Matrix4     *transform);
```
