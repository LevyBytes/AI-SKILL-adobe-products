# AEGP_GetLayerFromLayerID

`AEGP_GetLayerFromLayerID`

Hands back the AEGP_LayerH that goes with a particular AEGP_LayerIDVal (the value you obtain when reading an effect's layer parameter stream).

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLayerFromLayerID(
  AEGP_CompH       parent_compH,
  AEGP_LayerIDVal  id,
  AEGP_LayerH      *layerPH);
```
