# AEGP_GetBinType

`AEGP_GetBinType`

Gets the type for the supplied bin.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetBinType(
  const PR_RenderContextH  contextH,
  AEGP_BinType             *bin_typeP);
```

`AEGP_BinType` will be one of the following: - `AEGP_BinType_NONE` - `AEGP_BinType_2D` - `AEGP_BinType_3D`
