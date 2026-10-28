# AEGP_GetMaskMotionBlurState

`AEGP_GetMaskMotionBlurState`

Reads the motion blur option for the named mask.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetMaskMotionBlurState(
  AEGP_MaskRefH   mask_refH,
  AEGP_MaskMBlur  *blur_stateP);
```

The value of `AEGP_MaskMBlur` is one of these: - `AEGP_MaskMBlur_SAME_AS_LAYER` - `AEGP_MaskMBlur_OFF` - `AEGP_MaskMBlur_ON`
