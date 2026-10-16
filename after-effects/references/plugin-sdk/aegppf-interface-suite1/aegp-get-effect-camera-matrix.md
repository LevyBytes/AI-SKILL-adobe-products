# AEGP_GetEffectCameraMatrix

`AEGP_GetEffectCameraMatrix`

Gets the transform between the layer coordinate space and the containing composition coordinate space.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetEffectCameraMatrix(
  PF_ProgPtr    effect_ref,
  const A_Time  *comp_timePT,
  A_Matrix4     *camera_matrixP,
  A_FpLong      *dst_to_planePF,
  A_short       *plane_widthPL,
  A_short       *plane_heightPL);
```

NOTE: If the effect's input layer uses square pixels but the composition uses non-square pixels, premultiply the matrix by (1/parF, 1, 1) to correct pixel aspect ratio.
