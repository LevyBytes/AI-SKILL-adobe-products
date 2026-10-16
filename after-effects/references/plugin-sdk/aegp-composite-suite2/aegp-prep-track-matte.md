# AEGP_PrepTrackMatte

`AEGP_PrepTrackMatte`

Uses the PF_Pixel data described by src_masks to matte pixels in a PF_EffectWorld, writing the result into the dst_mask pixel array.

NOTE: This routine differs from most pixel-mangling calls supplied by After Effects because it does not receive PF_EffectWorld arguments. Instead, pass the data pointer held inside the PF_EffectWorld. That detail can be easy to miss, but the benefit is that the function pads its output so num_pix pixels are always produced.

Suite argument declaration (not a standalone call):

```cpp
AEGP_PrepTrackMatte(
  A_long          num_pix,
  A_Boolean       deepB,
  const PF_Pixel  *src_mask,
  PF_MaskFlags    mask_flags,
  PF_Pixel        *dst_mask);
```
