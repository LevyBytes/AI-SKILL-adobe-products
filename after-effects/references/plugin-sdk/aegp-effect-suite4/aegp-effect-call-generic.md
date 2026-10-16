# AEGP_EffectCallGeneric

`AEGP_EffectCallGeneric`

Invoke an effect plug-in and feed it a pointer to whatever data you choose; the effect is free to alter it. That's the channel AEGPs use to talk to effects.

Pass PF_Cmd_COMPLETELY_GENERAL for effect_cmd.

Suite argument declaration (not a standalone call):

```cpp
AEGP_EffectCallGeneric(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_EffectRefH  effectH,
  const A_Time     *timePT,
  PF_Cmd           effect_cmd,
  void             *extraPV);
```
