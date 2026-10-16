# AEGP_GetLong

`AEGP_GetLong`

Gets the A_long tied to a given section key's value.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLong(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  A_long                defaultL,
  A_long                *valuePL);
```
