# AEGP_CopyBits_HQ_Straight

`AEGP_CopyBits_HQ_Straight`

At high quality with straight alpha, copies a pixel rectangle from one PF_EffectWorld into another; pass a NULL rectangle to include every pixel.

Suite argument declaration (not a standalone call):

```cpp
AEGP_CopyBits_HQ_Straight(
  PF_EffectWorld  *src,
  A_Rect          *src_r,
  A_Rect          *dst_r,
  PF_EffectWorld  *dst);
```
