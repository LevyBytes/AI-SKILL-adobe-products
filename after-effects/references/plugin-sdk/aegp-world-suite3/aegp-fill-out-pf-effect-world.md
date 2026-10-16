# AEGP_FillOutPFEffectWorld

`AEGP_FillOutPFEffectWorld`

Builds a PF_EffectWorld for the supplied AEGP_WorldH so many pixel-processing callbacks can use it.

NOTE: The referenced world is not transferred to your plug-in; destroy the source AEGP_WorldH only when your plug-in allocated it. The provided PF_EffectWorld is merely filled so it targets the same pixel buffer.

Suite argument declaration (not a standalone call):

```cpp
AEGP_FillOutPFEffectWorld(
  AEGP_WorldH     worldH,
  PF_EffectWorld  *pf_worldP);
```
