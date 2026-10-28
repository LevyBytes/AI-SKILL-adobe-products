# PF_TimeCountFrames

`PF_TimeCountFrames`

New in 15.0. Returns the index of the frame in the current comp.

Suite argument declaration (not a standalone call):

```cpp
PF_TimeCountFrames(
  const A_Time  *start_timeTP,
  const A_Time  *time_stepTP,
  A_Boolean     include_partial_frameB,
  A_long        *frame_countL);
```
