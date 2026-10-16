# AEGP_GetItemName

`AEGP_GetItemName`

Get item name. (name length has no limit).

unicode_namePH points to A_UTF16Char (contains null terminated UTF16 string).

It must be disposed with AEGP_FreeMemHandle .

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetItemName(
  AEGP_PluginID  pluginID,
  AEGP_ItemH     itemH,
  AEGP_MemHandle *unicode_namePH);
```
