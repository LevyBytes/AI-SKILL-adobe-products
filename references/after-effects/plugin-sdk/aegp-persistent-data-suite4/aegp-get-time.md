# AEGP_GetTime

`AEGP_GetTime`

New in CC. Gets the A_Time tied to a given section key's value.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetTime(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  const A_Time          *defaultPT0,
  A_Time                *valuePT);
```
