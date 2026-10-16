# PF_EffectIsActiveOrEnabled

`PF_EffectIsActiveOrEnabled`

Returns whether the effect which owns the PF_ContextH is currently active or enabled (if it isn't, After Effects won't be listening for function calls from it).

Suite argument declaration (not a standalone call):

```cpp
PF_EffectIsActiveOrEnabled(
  PF_ContextH  contextH,
  PF_Boolean   *enabledPB);
```
