# AEGP_GetProjectBitDepth

`AEGP_GetProjectBitDepth`

Retrieves the project bit depth.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetProjectBitDepth(
  AEGP_ProjectH projectH,
  AEGP_ProjBitDepth  *bit_depthP);
```

`AEGP_ProjBitDepth` will be one of the following: - `AEGP_ProjBitDepth_8` - `AEGP_ProjBitDepth_16` - `AEGP_ProjBitDepth_32`
