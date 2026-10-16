# AEGP_GetProjectPath

`AEGP_GetProjectPath`

Get the path of the project (empty string the project hasn't been saved yet).

The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with AEGP_FreeMemHandle.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetProjectPath(
  AEGP_ProjectH   projH,
  AEGP_MemHandle  *unicode_pathPH);
```
