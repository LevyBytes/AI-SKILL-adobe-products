# AEGP_GetJobItemOutputModuleSetting

`AEGP_GetJobItemOutputModuleSetting`

Gets one setting from an output module on a job item. Both the returned name and returned value are handles containing NULL-terminated A_UTF16Char strings; release them with AEGP_FreeMemHandle.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetJobItemOutputModuleSetting(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  A_long              outputModuleIndex,
  A_long              settingIndex,
  AEGP_MemHandle      *utf_setting_namePH0,
  AEGP_MemHandle      *utf_setting_valuePH0);
```
