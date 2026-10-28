# AEGP_IsRenderLayerActive

`AEGP_IsRenderLayerActive`

Reports whether a layer context is active in the render context at the specified time.

Suite argument declaration (not a standalone call):

```cpp
AEGP_IsRenderLayerActive(
  PR_RenderContextH         render_contextH,
  AEGP_RenderLayerContextH  layer_contextH,
  const A_Time              *comp_timePT,
  A_Boolean                 *activePB);
```
