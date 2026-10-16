# AEGP_GetRenderLayerToWorldXform2D3D

`AEGP_GetRenderLayerToWorldXform2D3D`

Retrieves the transform needed to orient the rendered layer correctly against the output world.

Pass TRUE for only_2dB to keep the transform constrained to 2D.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetRenderLayerToWorldXform2D3D(
  PR_RenderContextH         render_contextH,
  AEGP_RenderLayerContextH  layer_contextH,
  const A_Time              *comp_timeP,
  A_Boolean                 only_2dB,
  A_Matrix4                 *transformP);
```

|  |  |
| --- | --- |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |

Note

The functions below apply only to interactive artisans.

Function

Purpose
