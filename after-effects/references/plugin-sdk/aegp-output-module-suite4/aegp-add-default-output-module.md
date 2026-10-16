# AEGP_AddDefaultOutputModule

`AEGP_AddDefaultOutputModule`

Adds the default output module to the specified AEGP_RQItemRefH, then returns the AEGP_OutputModuleRefH for that new module (presumably so you can adjust it).

Suite argument declaration (not a standalone call):

```cpp
AEGP_AddDefaultOutputModule(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  *outmodPH);
```
