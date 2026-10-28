# AEGP_GetKeyframeTemporalEase

`AEGP_GetKeyframeTemporalEase`

Hands back the AEGP_KeyframeEases tied to the named dimension of the stream's value at the keyframe's time.

dimensionL ranges from 0 to (temporal_dimensionality -1).

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetKeyframeTemporalEase(
  AEGP_StreamRefH     streamH,
  AEGP_KeyframeIndex  key_index,
  A_long              dimensionL,
  AEGP_KeyframeEase   *in_easeP0,
  AEGP_KeyframeEase   *out_easeP0);
```

NOTE: to line the returned ease values up with what the After Effects UI shows, multiply them by the layer height.
