# AEGP_DuplicateStream

`AEGP_DuplicateStream`

Copies the named stream and tacks the copy onto the end of the stream group.

Undoable.

Permitted only for children of AEGP_StreamGroupingType_INDEXED_GROUP.

Suite argument declaration (not a standalone call):

```cpp
AEGP_DuplicateStream(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_StreamRefH  streamH,
  A_long           *new_indexPL0);
```
