# AEGP_GetNewCompMarkerStream

`AEGP_GetNewCompMarkerStream`

Returns an AEGP_StreamRefH to the composition's marker stream. Must be disposed by caller.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNewCompMarkerStream(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_CompH       parent_compH,
  AEGP_StreamRefH  *streamPH);
```
