# AEGP_DuplicateStreamRef

`AEGP_DuplicateStreamRef`

Makes a copy of a given AEGP_StreamRefH. Dispose of the duplicate.

Suite argument declaration (not a standalone call):

```cpp
AEGP_DuplicateStreamRef(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_StreamRefH  streamH,
  AEGP_StreamRefH  *dup_streamPH);
```
