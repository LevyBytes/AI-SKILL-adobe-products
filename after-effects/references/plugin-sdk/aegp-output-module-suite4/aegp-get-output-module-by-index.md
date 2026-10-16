# AEGP_GetOutputModuleByIndex

`AEGP_GetOutputModuleByIndex`

Retrieves the output module at the specified index.

NOTE: AEGP_OutputModuleRefH is opaque, so direct manipulation is not supported; modify it through the accessor functions.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetOutputModuleByIndex(
  AEGP_RQItemRefH        rq_itemH,
  A_long                 outmod_indexL,
  AEGP_OutputModuleRefH  *outmodPH);
```
