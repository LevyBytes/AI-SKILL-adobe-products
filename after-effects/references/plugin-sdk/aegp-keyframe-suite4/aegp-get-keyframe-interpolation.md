# AEGP_GetKeyframeInterpolation

`AEGP_GetKeyframeInterpolation`

Hands back the in and out AEGP_KeyframeInterpolationTypes for the named keyframe.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetKeyframeInterpolation(
  AEGP_StreamRefH                 streamH,
  AEGP_KeyframeIndex              key_index,
  AEGP_KeyframeInterpolationType  *inP0,
  AEGP_KeyframeInterpolationType  *outP0);
```

`AEGP_KeyframeInterpolationType` is one of the following: - `AEGP_KeyInterp_NONE` - `AEGP_KeyInterp_LINEAR` - `AEGP_KeyInterp_BEZIER` - `AEGP_KeyInterp_HOLD`
