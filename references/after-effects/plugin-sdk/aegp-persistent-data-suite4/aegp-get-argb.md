# AEGP_GetARGB

`AEGP_GetARGB`

New in CC. Gets the PF_PixelFloat tied to a given section key's value.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetARGB(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  const PF_PixelFloat   *defaultP0,
  PF_PixelFloat         *valueP);
```
