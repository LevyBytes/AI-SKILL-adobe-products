# AEGP_AddLayer

`AEGP_AddLayer`

Place an item into the composition, sitting on top of every other layer. Undo-able.

Use AEGP_IsAddLayerValid() first, to confirm that it's possible.

Suite argument declaration (not a standalone call):

```cpp
AEGP_AddLayer(
  AEGP_ItemH  item_to_addH,
  AEGP_CompH  into_compH,
  A_Boolean   *added_layerPH0);
```
