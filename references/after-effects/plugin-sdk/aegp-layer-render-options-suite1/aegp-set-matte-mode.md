# AEGP_SetMatteMode

`AEGP_SetMatteMode`

States the AEGP_MatteMode for the given AEGP_LayerRenderOptionsH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetMatteMode(
  AEGP_LayerRenderOptionsH  optionsH,
  AEGP_MatteMode            mode);
```

`AEGP_MatteMode` will be one of the following: - `AEGP_MatteMode_STRAIGHT` - `AEGP_MatteMode_PREMUL_BLACK` - `AEGP_MatteMode_PREMUL_BG_COLOR`
