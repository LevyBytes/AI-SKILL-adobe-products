# AEGP_GetNewStreamRefByMatchname

`AEGP_GetNewStreamRefByMatchname`

Hands back a sub-stream by match name out of a given AEGP_StreamRefH. Permitted only for AEGP_StreamGroupingType_NAMED_GROUP.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNewStreamRefByMatchname(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_StreamRefH  parent_groupH,
  const A_char     *match_nameZ,
  AEGP_StreamRefH  *streamPH);
```

A few useful stream names whose references you can retrieve: - `AEGP_StreamGroupName_MASK_PARADE` - `AEGP_StreamGroupName_MASK_ATOM` - `AEGP_StreamName_MASK_FEATHER` - `AEGP_StreamName_MASK_OPACITY` - `AEGP_StreamName_MASK_OFFSET` - `AEGP_StreamGroupName_EFFECT_PARADE` - `AEGP_StreamGroupName_LAYER` - `AEGP_StreamGroupName_AV_LAYER` - `AEGP_StreamGroupName_TEXT_LAYER` - `AEGP_StreamGroupName_CAMERA_LAYER` - `AEGP_StreamGroupName_LIGHT_LAYER` - `AEGP_StreamGroupName_AUDIO` - `AEGP_StreamGroupName_MATERIAL_OPTIONS` - `AEGP_StreamGroupName_TRANSFORM` - `AEGP_StreamGroupName_LIGHT_OPTIONS` - `AEGP_StreamGroupName_CAMERA_OPTIONS`
