# AEGP_CreateNewFolder

`AEGP_CreateNewFolder`

Creates a new folder in the project. The newly created folder is allocated and owned by After Effects.

Passing NULL for parent_folderH0 creates the folder at the project's root.

Suite argument declaration (not a standalone call):

```cpp
AEGP_CreateNewFolder(
  const A_UTF16Char *nameZ,
  AEGP_ItemH parent_folderH0,
  AEGP_ItemH *new_folderPH);
```
