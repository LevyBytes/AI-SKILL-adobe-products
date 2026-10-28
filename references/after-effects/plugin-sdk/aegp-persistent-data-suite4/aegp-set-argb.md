# AEGP_SetARGB

`AEGP_SetARGB`

New in CC. Writes valueP into the given section key's value.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetARGB(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  PF_PixelFloat         *valueP);
```
