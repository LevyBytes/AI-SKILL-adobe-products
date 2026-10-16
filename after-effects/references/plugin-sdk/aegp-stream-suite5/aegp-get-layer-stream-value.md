# AEGP_GetLayerStreamValue

`AEGP_GetLayerStreamValue`

NOTE: As a convenience this works solely on streams whose data types are primitive; it won't serve AEGP_ArbBlockVal, AEGP_MarkerValH, or AEGP_MaskOutlineValH. Reach instead for AEGP_GetNewStreamValue, covered above, when handling those and the other complex types.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLayerStreamValue(
  AEGP_LayerH       layerH,
  AEGP_LayerStream  which_stream,
  AEGP_LTimeMode    time_mode,
  const A_Time      *timePT,
  A_Boolean         pre_expB,
  AEGP_StreamVal    *stream_valP,
  AEGP_StreamType   *strm_typeP0);
```
