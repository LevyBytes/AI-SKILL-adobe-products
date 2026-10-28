# AEGP_GetNewKeyframeValue

`AEGP_GetNewKeyframeValue`

Builds and fills an AEGP_StreamValue2 holding the stream's value at the keyframe's time.

The AEGP_StreamValue2 that comes back has to be disposed of with AEGP_DisposeStreamValue.

This `AEGP_StreamValue2` contract is for `AEGP_KeyframeSuite4`; `AEGP_KeyframeSuite3` uses `AEGP_StreamValue`.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNewKeyframeValue(
  AEGP_PluginID       plugin_id,
  AEGP_StreamRefH     streamH,
  AEGP_KeyframeIndex  key_index,
  AEGP_StreamValue2   *valueP);
```
