# AEGP_GetNewParentStreamRef

`AEGP_GetNewParentStreamRef`

Hands back an AEGP_StreamRefH for the parent of the named AEGP_StreamRefH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNewParentStreamRef(
  AEGP_PluginID    plugin_id,
  AEGP_StreamRefH  streamH,
  AEGP_StreamRefH  *parentPH);
```
