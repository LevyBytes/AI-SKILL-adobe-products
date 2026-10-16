# AEGP_SetCompMotionBlurAdaptiveSampleLimit

`AEGP_SetCompMotionBlurAdaptiveSampleLimit`

New in CC. Specifies the motion blur adaptive sample limit for the given composition.

As of CC, both the limit and the suggested values are clamped to [2,256] range and the limit value will not be allowed less than the suggested value.

Undoable.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetCompMotionBlurAdaptiveSampleLimit(
  AEGP_CompH  compH,
  A_long      samplesL);
```
