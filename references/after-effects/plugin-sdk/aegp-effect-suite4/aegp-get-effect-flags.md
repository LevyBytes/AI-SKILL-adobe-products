# AEGP_GetEffectFlags

`AEGP_GetEffectFlags`

Pulls back the flags belonging to the given AEGP_EffectRefH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetEffectFlags(
  AEGP_EffectRefH   effect_refH,
  AEGP_EffectFlags  *effect_flagsP);
```

What comes back is some mix of these: - `AEGP_EffectFlags_NONE` - `AEGP_EffectFlags_ACTIVE` - `AEGP_EffectFlags_AUDIO_ONLY` - `AEGP_EffectFlags_AUDIO_TOO` - `AEGP_EffectFlags_MISSING`
