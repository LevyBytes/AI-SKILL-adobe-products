# AEGP_ApplyEffect

`AEGP_ApplyEffect`

Puts an effect onto a particular layer. The freshly made AEGP_EffectRefH comes back.

Suite argument declaration (not a standalone call):

```cpp
AEGP_ApplyEffect(
  AEGP_PluginID            aegp_plugin_id,
  AEGP_LayerH              layerH,
  AEGP_InstalledEffectKey  installed_key,
  AEGP_EffectRefH          *effect_refPH);
```
