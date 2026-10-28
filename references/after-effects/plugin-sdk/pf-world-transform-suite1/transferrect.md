# transfer_rect

transfer_rect

Blends using a transfer mode, with an optional mask.

```cpp
PF_Err transfer_rect (
  PF_ProgPtr              effect_ref,
  PF_Quality              quality,
  PF_ModeFlags            m_flags,
  PF_Field                field,
  const PF_Rect           *src_rec,
  const PF_EffectWorld    *src_world,
  const PF_CompositeMode  *comp_mode,
  const PF_MaskWorld      *mask_world0,
  A_long                  dest_x,
  A_long                  dest_y,
  PF_EffectWorld          *dst_world);
```
