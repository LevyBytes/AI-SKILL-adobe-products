# AEGP_GetJobItemFrameProperty

`AEGP_GetJobItemFrameProperty`

Gets one property from a job item frame. The returned property name and returned values are handles containing NULL-terminated A_UTF16Char strings; release them with AEGP_FreeMemHandle.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetJobItemFrameProperty(
  AEGP_RQM_SessionId  sessid,
  AEGP_RQM_ItemId     itemid,
  AEGP_RQM_FrameId    frameid,
  A_long              propertyIndex,
  AEGP_MemHandle      *utf_property_namePH0,
  AEGP_MemHandle      *utf_property_valuePH0);
```
