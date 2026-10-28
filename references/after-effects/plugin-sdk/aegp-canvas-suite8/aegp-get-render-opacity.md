# AEGP_GetRenderOpacity

`AEGP_GetRenderOpacity`

Returns opacity for the specified layer context and time inside render_contextH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetRenderOpacity(
  PR_RenderContextH         render_contextH,
  AEGP_RenderLayerContextH  layer_contextH,
  const A_Time              *comp_timePT,
  A_FpLong                  *opacityPF);
```
