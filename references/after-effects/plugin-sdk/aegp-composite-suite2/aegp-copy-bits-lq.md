# AEGP_CopyBits_LQ

`AEGP_CopyBits_LQ`

At low quality, copies a pixel rectangle from one PF_EffectWorld into another; pass a NULL rectangle to include every pixel.

Suite argument declaration (not a standalone call):

```cpp
AEGP_CopyBits_LQ(
  PF_EffectWorld  *src_worldP,
  A_Rect          *src_r,
  A_Rect          *dst_r,
  PF_EffectWorld  *dst_worldP);
```
