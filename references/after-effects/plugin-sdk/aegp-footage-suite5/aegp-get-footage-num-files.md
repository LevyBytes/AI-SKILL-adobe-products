# AEGP_GetFootageNumFiles

`AEGP_GetFootageNumFiles`

Returns the number of data (RGBA or audio) files, and the number of files per frame (may be greater than one if the footage has auxiliary channels).

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetFootageNumFiles(
  AEGP_FootageH  footageH,
  A_long         *num_filesPL0,
  A_long         *files_per_frmPL0);
```
