# AEGP_GetRenderLayerToWorldXform

`AEGP_GetRenderLayerToWorldXform`

For a layer in a render context at a specific time, retrieves the 4 by 4 coordinate-space transform.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetRenderLayerToWorldXform(
  PR_RenderContextH         render_contextH,
  AEGP_RenderLayerContextH  layer_contextH,
  const A_Time              *comp_timeP,
  A_Matrix4                 *transform);
```
