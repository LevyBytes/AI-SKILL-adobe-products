# AEGP_GetEffectMaskID

`AEGP_GetEffectMaskID`

New in CC 2014. For a particular mask_indexL, hands back the matching AEGP_MaskIDVal, which uniquely pins down the mask.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetEffectMaskID(
  AEGP_EffectRefH  effect_refH,
  A_u_long         mask_indexL,
  AEGP_MaskIDVal   *id_valP);
```
