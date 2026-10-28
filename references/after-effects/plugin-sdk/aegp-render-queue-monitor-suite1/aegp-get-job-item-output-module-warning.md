# AEGP_GetJobItemOutputModuleWarning

`AEGP_GetJobItemOutputModuleWarning`

Gets one warning from a particular output module on a particular job item. The returned warning text is a handle containing a NULL-terminated A_UTF16Char string; release it with AEGP_FreeMemHandle.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetJobItemOutputModuleWarning(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  A_long              outputModuleIndex,
  A_long              warningIndex,
  AEGP_MemHandle      *utf_warning_valuePH0);
```
