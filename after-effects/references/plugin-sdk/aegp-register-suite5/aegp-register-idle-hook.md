# AEGP_RegisterIdleHook

`AEGP_RegisterIdleHook`

Register your IdleHook function. After Effects will call the function sporadically, while the user makes difficult artistic decisions (or while they're getting more coffee).

Suite argument declaration (not a standalone call):

```cpp
AEGP_RegisterIdleHook(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_IdleHook    idle_hook_func,
  AEGP_IdleRefcon  refconP);
```
