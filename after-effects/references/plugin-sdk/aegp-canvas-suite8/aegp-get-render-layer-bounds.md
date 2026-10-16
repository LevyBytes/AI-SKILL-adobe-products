# AEGP_GetRenderLayerBounds

`AEGP_GetRenderLayerBounds`

Retrieves the bounding rectangle for layer_contextH at a given time inside render_contextH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetRenderLayerBounds(
  PR_RenderContextH         render_contextH,
  AEGP_RenderLayerContextH  layer_contextH,
  const A_Time              *comp_timeP,
  A_LegacyRect              *boundsP);
```
