# AEGP_SetTime

`AEGP_SetTime`

New in CC. Writes valuePT into the given section key's value.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetTime(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  A_Time                *valuePT);
```
