# AEGP_InsertKeyframe

`AEGP_InsertKeyframe`

Drops a keyframe onto the named stream (at the composition or layer time you specify).

The index of the new keyframe comes back.

Every index above the new one is now invalid (but you knew that). Should a keyframe already sit at that time, its values get updated.

Suite argument declaration (not a standalone call):

```cpp
AEGP_InsertKeyframe(
  AEGP_StreamRefH     streamH,
  AEGP_LTimeMode      time_mode,
  const A_Time        *timePT,
  AEGP_KeyframeIndex  *key_indexP);
```
