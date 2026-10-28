# AEGP_GetTopLayerFromLayerContext

`AEGP_GetTopLayerFromLayerContext`

When collapsed geometrics are "on", this returns the layer in the root composition that contains the layer context.

When collapsed geometrics are off, this matches AEGP_GetLayerFromLayerContext.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetTopLayerFromLayerContext(
  const PR_RenderContextH   r_contextH,
  AEGP_RenderLayerContextH  l_contextH,
  AEGP_LayerH               *layerPH);
```
