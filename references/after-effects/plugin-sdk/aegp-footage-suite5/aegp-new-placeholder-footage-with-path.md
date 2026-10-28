# AEGP_NewPlaceholderFootageWithPath

`AEGP_NewPlaceholderFootageWithPath`

This is the hip new way to add references to footage that can't be found right this moment.

The file path is a NULL-terminated UTF-16 string with platform separators.

In CS6 and earlier, file_type was ignored and we previously recommendedsetting it to AEIO_FileType_NONE.

Starting in CC, AEIO_FileType_NONE is now a warning condition.

If you pass AEIO_FileType_ANY, then path MUST exist.

If the path may not exist, pass AEIO_FileType_DIR for folder, or AEIO_FileType_GENERIC for a file.

Suite argument declaration (not a standalone call):

```cpp
AEGP_NewPlaceholderFootageWithPath(
  AEGP_PluginID      plugin_id,
  const A_UTF16Char  *pathZ,
  AEGP_Platform      path_platform,
  AEIO_FileType      file_type,
  A_long             widthL,
  A_long             heightL,
  const A_Time       *durationPT,
  AEGP_FootageH      *footagePH);
```
