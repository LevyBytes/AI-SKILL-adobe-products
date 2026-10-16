# AEGP_SetKeyframeValue

`AEGP_SetKeyframeValue`

Assigns the stream's value at the keyframe's time.

This `AEGP_StreamValue2` contract is for `AEGP_KeyframeSuite4`; `AEGP_KeyframeSuite3` uses `AEGP_StreamValue`.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetKeyframeValue(
  AEGP_StreamRefH          streamH,
  AEGP_KeyframeIndex       index,
  const AEGP_StreamValue2  *valP);
```
