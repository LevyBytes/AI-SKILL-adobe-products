# AEGP_GetString

`AEGP_GetString`

Gets the string for a given section key's value (and reports its length in actual_szLu0).

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetString(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  const A_char          *defaultZ0,
  A_u_long              buf_sizeLu,
  char                  *bufZ,
  A_u_long              *actual_szLu0);
```
