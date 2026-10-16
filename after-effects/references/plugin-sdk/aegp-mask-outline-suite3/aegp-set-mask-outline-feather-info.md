# AEGP_SetMaskOutlineFeatherInfo

`AEGP_SetMaskOutlineFeatherInfo`

New in CS6. The feather has to exist already; if needed, call AEGP_CreateMaskOutlineFeather first.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetMaskOutlineFeatherInfo(
  AEGP_MaskOutlineValH    mask_outlineH,
  AEGP_VertexIndex        which_featherL,
  const AEGP_MaskFeather  *featherP);
```
