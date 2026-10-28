# AEGP_SetKeyframeTemporalEase

`AEGP_SetKeyframeTemporalEase`

Names the AEGP_KeyframeEases to apply to the stream's value at the keyframe's time.

dimensionL ranges from 0 to (temporal_dimensionality -1).

Whatever AEGP_KeyframeEases you hand over, After Effects does not take ownership of them.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetKeyframeTemporalEase(
  AEGP_StreamRefH           streamH,
  AEGP_KeyframeIndex        key_index,
  A_long                    dimL,
  const AEGP_KeyframeEase   *in_P0,
  const AEGP_KeyframeEase   *outP0);
```
