# AEGP_GetJobItemOutputModuleProperty

`AEGP_GetJobItemOutputModuleProperty`

Gets one property attached to an output module on a job item. The returned property name and returned values are handles containing NULL-terminated A_UTF16Char strings; release them with AEGP_FreeMemHandle.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetJobItemOutputModuleProperty(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  A_long              outputModuleIndex,
  A_long              propertyIndex,
  AEGP_MemHandle      *utf_property_namePH0,
  AEGP_MemHandle      *utf_property_valuePH0);
```
