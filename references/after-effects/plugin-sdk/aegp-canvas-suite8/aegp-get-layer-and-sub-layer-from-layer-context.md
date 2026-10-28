# AEGP_GetLayerAndSubLayerFromLayerContext

`AEGP_GetLayerAndSubLayerFromLayerContext`

Supports sub-layer rendering, including Photoshop-file sub-layers.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLayerAndSubLayerFromLayerContext(
  const PR_RenderContextH   render_contextH,
  AEGP_RenderLayerContextH  layer_contextH,
  AEGP_LayerH               *layerPH,
  AEGP_SubLayerIndex        *sublayerP);
```
