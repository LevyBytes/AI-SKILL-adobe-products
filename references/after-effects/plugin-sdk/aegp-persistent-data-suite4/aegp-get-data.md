# AEGP_GetData

`AEGP_GetData`

Gets the data sitting at a given section's value.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetData(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  A_u_long              data_sizeLu,
  const void            *defaultPV0,
  void                  *bufPV);
```
