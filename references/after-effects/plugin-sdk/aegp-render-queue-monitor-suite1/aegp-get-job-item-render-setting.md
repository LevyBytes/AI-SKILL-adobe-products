# AEGP_GetJobItemRenderSetting

`AEGP_GetJobItemRenderSetting`

Gets one render setting from one job. The setting name and value are returned as handles to NULL-terminated A_UTF16Char strings, and AEGP_FreeMemHandle must release them.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetJobItemRenderSetting(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  A_long              settingIndex,
  AEGP_MemHandle      *utf_setting_namePH0,
  AEGP_MemHandle      *utf_setting_valuePH0);
```
