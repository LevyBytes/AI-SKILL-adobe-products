# AEGP_RenderLayerPlus

`AEGP_RenderLayerPlus`

Similar to AEGP_RenderLayer, but it accounts for AEGP_RenderLayerContextH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_RenderLayerPlus(
  PR_RenderContextH          r_contextH,
  AEGP_LayerH                layerH,
  AEGP_RenderLayerContextH   l_contextH,
  AEGP_RenderHints           render_hints,
  AEGP_WorldH                *bufferP);
```
