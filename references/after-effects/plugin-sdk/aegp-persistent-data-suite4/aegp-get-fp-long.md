# AEGP_GetFpLong

`AEGP_GetFpLong`

Gets the A_FpLong tied to a given section key's value.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetFpLong(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  A_FpLong              defaultF,
  A_FpLong              *valuePF);
```
