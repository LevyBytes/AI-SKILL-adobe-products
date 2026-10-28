# AEGP_GetEffectParamUnionByIndex

`AEGP_GetEffectParamUnionByIndex`

Returns description of effect parameter.

Don't rely on the value(s) inside the ParamDef this function returns (reach for AEGP_GetNewStreamValue() instead); the point of it is to let AEGPs read parameter defaults, checkbox names, and pop-up strings.

To learn the stream count, which tells you the highest allowable param_index, call AEGP_GetEffectNumParamStreams() from AEGP_StreamSuite5. That final parameter need not be supplied.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetEffectParamUnionByIndex(
  AEGP_PluginID aegp_plugin_id,
  AEGP_EffectRefH effect_refH,
  PF_ParamIndex param_index,
  PF_ParamType *param_typeP,
  PF_ParamDefUnion *uP0);
```
