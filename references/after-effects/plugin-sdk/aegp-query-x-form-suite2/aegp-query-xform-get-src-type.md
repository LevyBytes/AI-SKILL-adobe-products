# AEGP_QueryXformGetSrcType

`AEGP_QueryXformGetSrcType`

Given query_contextH, returns the transform source currently under modification.

Suite argument declaration (not a standalone call):

```cpp
AEGP_QueryXformGetSrcType(
  PR_QueryContextH     query_contextH,
  AEGP_QueryXformType  *src_type);
```

The query context will be one of the following: - `AEGP_Query_Xform_LAYER` - `AEGP_Query_Xform_WORLD` - `AEGP_Query_Xform_VIEW` - `AEGP_Query_Xform_SCREEN`
