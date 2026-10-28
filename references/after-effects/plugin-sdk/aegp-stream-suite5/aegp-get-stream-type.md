# AEGP_GetStreamType

`AEGP_GetStreamType`

Reports a stream's type, that is, its dimension.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetStreamType(
  AEGP_StreamRefH  streamH,
  AEGP_StreamType  *stream_typeP);
```

- `AEGP_StreamType_NO_DATA` - `AEGP_StreamType_TwoD_SPATIAL` - `AEGP_StreamType_TwoD` - `AEGP_StreamType_ThreeD` - `AEGP_StreamType_ThreeD_SPATIAL` - `AEGP_StreamType_OneD` - `AEGP_StreamType_COLOR` - `AEGP_StreamType_ARB` - `AEGP_StreamType_MARKER` - `AEGP_StreamType_LAYER_ID` - `AEGP_StreamType_MASK_ID` - `AEGP_StreamType_MASK` - `AEGP_StreamType_TEXT_DOCUMENT` NOTE: for position it always reports `ThreeD_SPATIAL`, and that holds true no matter whether the layer is 3D.
