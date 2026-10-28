# AEGP_GetAppVersion

`AEGP_GetAppVersion`

Gets the application version. It returns a handle holding a NULL-terminated A_UTF16Char string; release that handle with AEGP_FreeMemHandle.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetAppVersion(
  AEGP_RQM_SessionId  sessid,
  AEGP_MemHandle      *utf_app_versionPH0);
```
