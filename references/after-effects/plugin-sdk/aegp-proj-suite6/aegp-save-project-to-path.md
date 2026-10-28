# AEGP_SaveProjectToPath

`AEGP_SaveProjectToPath`

Saves the entire project to the specified full path.

The file path is a NULL-terminated UTF-16 string with platform separators.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SaveProjectToPath(
  AEGP_ProjectH      projH,
  const A_UTF16Char  *pathZ);
```
