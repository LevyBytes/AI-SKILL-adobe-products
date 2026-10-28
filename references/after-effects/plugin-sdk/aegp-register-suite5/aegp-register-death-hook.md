# AEGP_RegisterDeathHook

`AEGP_RegisterDeathHook`

Register your termination function. Called when the application quits.

Suite argument declaration (not a standalone call):

```cpp
AEGP_RegisterDeathHook(
  AEGP_PluginID aegp_plugin_id,
  AEGP_DeathHook death_hook_func,
  AEGP_DeathRefcon refconP);
```
