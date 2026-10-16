# AEGP_RegisterUpdateMenuHook

`AEGP_RegisterUpdateMenuHook`

Register your menu update function (which determines whether or not items are active), called every time any menu is to be drawn.

This hook function handles updates for all menus.

Suite argument declaration (not a standalone call):

```cpp
AEGP_RegisterUpdateMenuHook(
  AEGP_PluginID plugin_id,
  AEGP_UpdateMenuHook update_menu_hook_func,
  AEGP_UpdateMenuRefcon refconP);
```
