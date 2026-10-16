# AEGP_GetKeyframeFlags

`AEGP_GetKeyframeFlags`

Hands back the flags presently set on the keyframe.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetKeyframeFlags(
  AEGP_StreamRefH     streamH,
  AEGP_KeyframeIndex  key_index,
  AEGP_KeyframeFlags  *flagsP);
```

\*flagsP will be a combination of the following: - `AEGP_KeyframeFlag_NONE` - `AEGP_KeyframeFlag_TEMPORAL_CONTINUOUS` - `AEGP_KeyframeFlag_TEMPORAL_AUTOBEZIER` - `AEGP_KeyframeFlag_SPATIAL_CONTINUOUS` - `AEGP_KeyframeFlag_SPATIAL_AUTOBEZIER` - `AEGP_KeyframeFlag_ROVING`
