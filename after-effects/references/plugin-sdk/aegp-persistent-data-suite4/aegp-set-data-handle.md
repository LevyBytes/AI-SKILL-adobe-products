# AEGP_SetDataHandle

`AEGP_SetDataHandle`

Writes the given section key's value from the handle you pass in.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetDataHandle(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  const AEGP_MemHandle  valueH);
```
