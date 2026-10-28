# AEGP_GetNthLayerContextToRender

`AEGP_GetNthLayerContextToRender`

Builds the list of layers to render after the Artisan has determined the total layer count that needs rendering.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNthLayerContextToRender(
  PR_RenderContextH         render_contextH,
  A_long                    n,
  AEGP_RenderLayerContextH  *layer_indexPH);
```
