# transform_world

transform_world

Given a PF_EffectWorld and a matrix (or array of matrices), transforms and blends using an After Effects transfer mode, with an optional mask.

The matrices pointer points to a matrix array used for motion-blur.

When is a transform not a transform? A Z-scale transform is not a transform, unless the transformed layer is a parent of other layers that do not all lie in the z=0 plane.

```cpp
PF_Err transform_world (
  PF_InData               *in_data,
  PF_Quality              quality,
  PF_ModeFlags            m_flags,
  PF_Field                field,
  const PF_EffectWorld    *src_world,
  const PF_CompositeMode  *comp_mode,
  const PF_MaskWorld      *mask_world0,
  const PF_FloatMatrix    *matrices,
  A_long                  num_matrices,
  Boolean                 src2dst_matrix,
  const PF_Rect           *dest_rect,
  PF_EffectWorld          *dst_world);
```
