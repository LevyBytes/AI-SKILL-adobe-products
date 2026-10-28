# AEGP_GetMaskMode

`AEGP_GetMaskMode`

From a mask handle, gives back the mask's present mode.

PF_MaskMode_NONE has no effect, while PF_MaskMode_ADD is what you get by default.

- PF_MaskMode_NONE

- PF_MaskMode_ADD

- PF_MaskMode_SUBTRACT

- PF_MaskMode_INTERSECT

- PF_MaskMode_LIGHTEN

- PF_MaskMode_DARKEN

- PF_MaskMode_DIFFERENCE

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetMaskMode(
  AEGP_MaskRefH  maskH,
  PF_MaskMode    *modeP);
```
