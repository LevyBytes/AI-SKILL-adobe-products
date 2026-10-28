# AEGP_SetData

`AEGP_SetData`

Writes the given section key's value from the data held in dataPV.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetData(
  AEGP_PersistentBlobH  blobH,
  const A_char          *section_keyZ,
  const A_char          *value_keyZ,
  A_u_long              data_sizeLu,
  const void            *dataPV);
```
