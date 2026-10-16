# AEGP_GetNewKeyframeSpatialTangents

`AEGP_GetNewKeyframeSpatialTangents`

Hands back the AEGP_StreamValue2s that capture the stream's tangential values at the keyframe's time.

The AEGP_StreamValue2s that come back have to be disposed of with AEGP_DisposeStreamValue.

This `AEGP_StreamValue2` contract is for `AEGP_KeyframeSuite4`; `AEGP_KeyframeSuite3` uses `AEGP_StreamValue`.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNewKeyframeSpatialTangents(
  AEGP_PluginID       plugin_id,
  AEGP_StreamRefH     streamH,
  AEGP_KeyframeIndex  key_index,
  AEGP_StreamValue2   *in_tanP0,
  AEGP_StreamValue2   *out_tanP0);
```
