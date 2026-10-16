# AEGP_AddStream

`AEGP_AddStream`

Puts a stream into the named stream group. Undoable. Permitted only for AEGP_StreamGroupingType_INDEXED_GROUP.

Suite argument declaration (not a standalone call):

```cpp
AEGP_AddStream(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_StreamRefH  indxd_grp_streamH,
  const A_char     *match_nameZ,
  AEGP_StreamRefH  *streamPH0);
```
