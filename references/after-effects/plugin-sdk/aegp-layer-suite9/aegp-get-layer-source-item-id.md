# AEGP_GetLayerSourceItemID

`AEGP_GetLayerSourceItemID`

Pulls back the ID belonging to the supplied AEGP_LayerH. It comes in handy when you're tracking down a particular layer's ID inside an AEGP_StreamVal.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLayerSourceItemID(
  AEGP_LayerH  layerH,
  A_long       *source_idPL);
```
