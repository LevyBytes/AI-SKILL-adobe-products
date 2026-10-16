# AEGP_SetEffectFlags

`AEGP_SetEffectFlags`

Applies the flags (listed above) to the given AEGP_EffectRefH, limited by a separate mask of effect flags.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetEffectFlags(
  AEGP_EffectRefH   effect_refH,
  AEGP_EffectFlags  mask,
  AEGP_EffectFlags  effect_flags);
```
