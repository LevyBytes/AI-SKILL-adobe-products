# AEGP_IsAddLayerValid

`AEGP_IsAddLayerValid`

Checks whether, at this moment, a particular item may legally be dropped into a composition.

No composition may be placed inside itself, nor inside any composition nested within it, and further situations can also block a successful add.

Skip this function before adding a layer and the outcome is undefined.

Suite argument declaration (not a standalone call):

```cpp
AEGP_IsAddLayerValid(
  AEGP_ItemH  item_to_addH,
  AEGP_CompH  into_compH,
  A_Boolean   *validPB);
```
