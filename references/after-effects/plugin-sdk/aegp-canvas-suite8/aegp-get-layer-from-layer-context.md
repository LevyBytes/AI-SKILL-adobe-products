# AEGP_GetLayerFromLayerContext

`AEGP_GetLayerFromLayerContext`

From an AEGP_RenderLayerContextH, gets the AEGP_LayerH that many suite functions require.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLayerFromLayerContext(
  const PR_RenderContextH   render_contextH,
  AEGP_RenderLayerContextH  layer_contextH,
  AEGP_LayerH               *layerPH);
```
