# AEGP_GetOutSpecOutputModule

`AEGP_GetOutSpecOutputModule`

Returns the AEGP_RQItemRefH and AEGP_OutputModuleRefH associated with the supplied AEIO_OutSpecH.

Fails when the render queue item cannot be found. It also fails when AEIO_OutSpecH is a copy rather than a confirmed outH, i.e. when the Output Module settings dialog is open and the user has not clicked OK.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetOutSpecOutputModule(
  AEIO_OutSpecH          outH,
  AEGP_RQItemRefH        *rq_itemP,
  AEGP_OutputModuleRefH  *om_refP);
```
