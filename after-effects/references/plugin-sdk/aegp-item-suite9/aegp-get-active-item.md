# AEGP_GetActiveItem

`AEGP_GetActiveItem`

If the Project window is active, the active item is the selected item (if only one item is selected).

If a Composition, Timeline, or Footage window is active, returns the parent of the layer associated with the front-most tab in the window.

Returns NULL if no item is active.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetActiveItem(
  AEGP_ItemH  *itemPH);
```
