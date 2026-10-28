# AEGP_CopyBits_HQ_Premul

`AEGP_CopyBits_HQ_Premul`

At high quality, copies a pixel rectangle from one PF_EffectWorld into another while premultiplying alpha; pass a NULL rectangle to include every pixel.

Suite argument declaration (not a standalone call):

```cpp
AEGP_CopyBits_HQ_Premul(
  PF_EffectWorld  *src,
  A_Rect          *src_r,
  A_Rect          *dst_r,
  PF_EffectWorld  *dst);
```
