# AEGP_GetProjectName

`AEGP_GetProjectName`

Gets the active project name. It returns a handle holding a NULL-terminated A_UTF16Char string; release that handle with AEGP_FreeMemHandle.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetProjectName(
  AEGP_RQM_SessionId  sessid,
  AEGP_MemHandle      *utf_project_namePH0);
```
