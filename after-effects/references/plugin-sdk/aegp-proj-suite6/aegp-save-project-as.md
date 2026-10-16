# AEGP_SaveProjectAs

`AEGP_SaveProjectAs`

Saves the project to the specified path.

The file path is a NULL-terminated UTF-16 string with platform separators.

NOTE: This will overwrite an existing file.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SaveProjectAs(
  AEGP_ProjectH      projH,
  const A_UTF16Char  *pathZ);
```
