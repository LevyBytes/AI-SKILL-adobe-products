# AEGP_GetLayerToWorldXformFromView

`AEGP_GetLayerToWorldXformFromView`

Pass a layer handle along with the current (composition) time and the view time you want, and it returns how the user's view and the layer translate between one another, adjusted for the composition's present aspect ratio.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLayerToWorldXformFromView(
  AEGP_LayerH   aegp_layerH,
  const A_Time  *view_timeP,
  const A_Time  *comp_timeP,
  A_Matrix4     *transform);
```
