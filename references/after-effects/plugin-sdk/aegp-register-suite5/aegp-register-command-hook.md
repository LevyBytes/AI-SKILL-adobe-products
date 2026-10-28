# AEGP_RegisterCommandHook

`AEGP_RegisterCommandHook`

Register a hook (command handler) function with After Effects.

If you are replacing a function which After Effects also handles, AEGP_HookPriority determines whether your plug-in gets it first.

- AEGP_HP_BeforeAE

- AEGP_HP_AfterAE

For each menu item you add, obtain your own AEGP_Command using AEGP_GetUniqueCommand() (from AEGP_CommandSuite1) prior registering a single command_hook_func.

Determine which command was sent within this hook function, and act accordingly.

Currently, AEGP_HookPriority is ignored.

Suite argument declaration (not a standalone call):

```cpp
AEGP_RegisterCommandHook(
  AEGP_PluginID aegp_plugin_id,
  AEGP_HookPriority hook_priority,
  AEGP_Command command,
  AEGP_CommandHook command_hook_func,
  AEGP_CommandRefcon refconP);
```
