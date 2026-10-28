# AEGP_GetNewEffectStreamByIndex

`AEGP_GetNewEffectStreamByIndex`

Fetch a parameter stream belonging to an effect. The plug-in is responsible for disposing of streamPH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNewEffectStreamByIndex(
  AEGP_PluginID    id,
  AEGP_EffectRefH  effect_refH,
  PF_ParamIndex    param_index,
  AEGP_StreamRefH  *streamPH);
```
