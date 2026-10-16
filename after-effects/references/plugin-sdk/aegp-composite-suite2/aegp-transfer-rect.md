# AEGP_TransferRect

`AEGP_TransferRect`

Uses a transfer mode, and optionally a mask, to blend two PF_EffectWorlds. To blend in the current working color space, pass NULL for blend_tablesP0.

Suite argument declaration (not a standalone call):

```cpp
AEGP_TransferRect(
  PF_Quality               quality,
  PF_ModeFlags             m_flags,
  PF_Field                 field,
  const A_Rect             *src_rec,
  const PF_EffectWorld     *src_world,
  const PF_CompositeMode   *comp_mode,
  PF_EffectBlendingTables  blend_tablesP0,
  const PF_MaskWorld       *mask_world0,
  A_long                   dest_x,
  A_long                   dest_y,
  PF_EffectWorld           *dst_world);
```
