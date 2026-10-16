# AEGP_GetPostRenderAction

`AEGP_GetPostRenderAction`

Reads the post-render action setting assigned to outmodH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetPostRenderAction(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_PostRenderAction  *actionP);
```

`AEGP_PostRenderAction` will be one of the following: - `AEGP_PostRenderOptions_IMPORT` - `AEGP_PostRenderOptions_IMPORT_AND_REPLACE_USAGE` - `AEGP_PostRenderOptions_SET_PROXY`
