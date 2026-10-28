# AEGP_GetDataHandle

`AEGP_GetDataHandle`

Gets the value tied to the given section's key. If you rely on in-memory data structures, mind the endian issues.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetDataHandle(
  AEGP_PluginID         plugin_id,
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  AEGP_MemHandle        defaultH0,
  AEGP_MemHandle        *valuePH);
```
