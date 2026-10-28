# AEGP_OpenProjectFromPath

`AEGP_OpenProjectFromPath`

Opens a project from the supplied path, and returns its AEGP_ProjectH.

The file path is a NULL-terminated UTF-16 string with platform separators.

NOTE: Will close the current project without saving it first!

Suite argument declaration (not a standalone call):

```cpp
AEGP_OpenProjectFromPath(
  const A_UTF16Char  *pathZ,
  AEGP_ProjectH      *projectPH);
```
