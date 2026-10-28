# PF_PathGetMaskMode

`PF_PathGetMaskMode`

Retrieves the mode for the given path.

Suite argument declaration (not a standalone call):

```cpp
PF_PathGetMaskMode(
  PF_ProgPtr   effect_ref,
  PF_PathID    unique_id,
  PF_MaskMode  *modeP);
```

Mask mode is one of the following: - `PF_MaskMode_NONE` - `PF_MaskMode_ADD` - `PF_MaskMode_SUBTRACT` - `PF_MaskMode_INTERSECT` - `PF_MaskMode_LIGHTEN` - `PF_MaskMode_DARKEN` - `PF_MaskMode_DIFFERENCE` - `PF_MaskMode_ACCUM`
