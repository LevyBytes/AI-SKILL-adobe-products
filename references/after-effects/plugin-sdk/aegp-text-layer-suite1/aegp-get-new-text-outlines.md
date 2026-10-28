# AEGP_GetNewTextOutlines

`AEGP_GetNewTextOutlines`

Allocates a handle to the AEGP_TextOutlinesHs that go with the named layer and returns it.

When layerH has no associated AEGP_TextOutlinesHs (that is, it isn't a text layer), outlinesPH comes back NULL.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNewTextOutlines(
  AEGP_LayerH         layerH,
  const A_Time        *layer_timePT,
  AEGP_TextOutlinesH  *outlinesPH);
```
