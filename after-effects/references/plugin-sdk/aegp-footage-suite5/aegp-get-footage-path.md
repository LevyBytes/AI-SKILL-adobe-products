# AEGP_GetFootagePath

`AEGP_GetFootagePath`

Get fully realized path to footage source file. Retrieves the footage path for a piece of footage (or for the specified frame of a footage sequence).

frame_numL ranges from 0 to num_main_files, as obtained using AEGP_GetFootageNumFiles from AEGP_FootageSuite5.

AEGP_FOOTAGE_MAIN_FILE_INDEX is the main file.

The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with AEGP_FreeMemHandle.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetFootagePath(
  AEGP_FootageH   footageH,
  A_long          frame_numL,
  A_long          file_indexL,
  AEGP_MemHandle  *unicode_pathPH);
```
