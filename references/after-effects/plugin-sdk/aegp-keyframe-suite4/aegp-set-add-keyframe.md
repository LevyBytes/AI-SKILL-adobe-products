# AEGP_SetAddKeyframe

`AEGP_SetAddKeyframe`

Assigns the value of the named keyframe.

This `AEGP_StreamValue2` contract is for `AEGP_KeyframeSuite4`; `AEGP_KeyframeSuite3` uses `AEGP_StreamValue`.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetAddKeyframe(
  AEGP_AddKeyframesInfoH   akH,
  A_long                   indexL,
  const AEGP_StreamValue2  *valueP);
```
