# AEGP_DuplicateEffect

`AEGP_DuplicateEffect`

Makes a copy of a given AEGP_EffectRefH. Once finished, the caller has to dispose of the copy.

Suite argument declaration (not a standalone call):

```cpp
AEGP_DuplicateEffect(
  AEGP_EffectRefH  orig_effect_refH,
  AEGP_EffectRefH  *dupe_refPH);
```
