# AEGP_ReorderLayer

`AEGP_ReorderLayer`

Rearranges how the layers are ordered. Undoable.

Suite argument declaration (not a standalone call):

```cpp
AEGP_ReorderLayer(
  AEGP_LayerH  layerH,
  A_long       layer_indexL);
```

To drop a layer at the bottom of the composition, supply layer_indexL = `AEGP_REORDER_LAYER_TO_END`
