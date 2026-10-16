# AEGP_ReplaceItemMainFootage

`AEGP_ReplaceItemMainFootage`

Replaces footage for an item. The item will replace the main footage for this item.

This is Undo-able; do not dispose of the returned added item if it's undone.

Suite argument declaration (not a standalone call):

```cpp
AEGP_ReplaceItemMainFootage(
  AEGP_FootageH  footageH,
  AEGP_ItemH     itemH);
```
