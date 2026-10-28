# AEGP_GetCompMotionBlurAdaptiveSampleLimit

`AEGP_GetCompMotionBlurAdaptiveSampleLimit`

New in CC. Retrieves the motion blur adaptive sample limit for the given composition.

As of CC, a new comp defaults to 128.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetCompMotionBlurAdaptiveSampleLimit(
  AEGP_CompH  compH,
  A_long      *samplesPL);
```
