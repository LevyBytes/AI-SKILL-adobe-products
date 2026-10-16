# AEGP_GetNewStreamRefByIndex

`AEGP_GetNewStreamRefByIndex`

Hands back a sub-stream by index out of a given AEGP_StreamRefH. It won't work on streams of type AEGP_StreamGroupingType_LEAF.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNewStreamRefByIndex(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_StreamRefH  parent_groupH,
  A_long           indexL,
  AEGP_StreamRefH  *streamPH);
```
