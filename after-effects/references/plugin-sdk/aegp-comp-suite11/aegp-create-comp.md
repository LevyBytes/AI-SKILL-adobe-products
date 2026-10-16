# AEGP_CreateComp

`AEGP_CreateComp`

Creates a new composition for the project. If you don't provide a parent folder, the composition will be at the root level of the project. Undo-able.

Suite argument declaration (not a standalone call):

```cpp
AEGP_CreateComp(
  AEGP_ItemH         parent_folderHO,
  const A_UTF16Char  *utf_nameZ,
  A_Long             widthL,
  A_Long             heightL,
  const A_Ratio      *pixel_aspect_ratioPRt,
  const A_Time       *durationPT,
  const A_Ratio      *frameratePRt,
  AEGP_CompH         *new_compPH);
```
