# AEGP_GetActiveLayer

`AEGP_GetActiveLayer`

Fetch the active layer. When a Layer or effect-controls palette holds focus, the active layer is the one belonging to that window's front-most tab.

When focus sits on a composition or timeline window instead, the active layer is whichever layer is selected, provided exactly one is; pick none or several and NULL comes back.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetActiveLayer(
  AEGP_LayerH  *layerPH);
```
