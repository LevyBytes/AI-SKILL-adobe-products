# AEGP_GetNewColorProfileDescription

`AEGP_GetNewColorProfileDescription`

Gives back a text description for the named color profile. That text is a null-terminated UTF16 string, which the caller must dispose.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNewColorProfileDescription(
  AEGP_PluginID            aegp_plugin_id,
  AEGP_ConstColorProfileP  profileP,
  AEGP_MemHandle           *unicode_descPH);
```
