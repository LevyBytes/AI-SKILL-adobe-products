# AEGP_GetValidInterpolations

`AEGP_GetValidInterpolations`

Hands back an AEGP_KeyInterpolationMask showing which interpolation types the AEGP_StreamRefH accepts.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetValidInterpolations(
  AEGP_StreamRefH            streamH,
  AEGP_KeyInterpolationMask  *valid_interpP);
```

What comes back in `AEGP_KeyInterpolationMask` is some mix of these: - `AEGP_KeyInterpMask_NONE` - `AEGP_KeyInterpMask_LINEAR` - `AEGP_KeyInterpMask_BEZIER` - `AEGP_KeyInterpMask_HOLD` - `AEGP_KeyInterpMask_CUSTOM` - `AEGP_KeyInterpMask_ANY`
