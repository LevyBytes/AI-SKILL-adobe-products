# AEGP_AddAuxExtMap

`AEGP_AddAuxExtMap`

If auxiliary files for your file format should not be opened directly by users, pass the extension, file type, and creator to this function so the auxiliary format is hidden from input dialogs.

Suite argument declaration (not a standalone call):

```cpp
AEGP_AddAuxExtMap(
  const A_char  *extension,
  A_long        file_type,
  A_long        creator);
```
