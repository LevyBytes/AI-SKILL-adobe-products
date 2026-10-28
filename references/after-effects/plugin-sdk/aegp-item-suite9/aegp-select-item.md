# AEGP_SelectItem

`AEGP_SelectItem`

Toggles the selection state of the item, and (depending on deselect_othersB) can deselect other items. This call selects items in the Project panel.

To make selections in the Composition panel, use AEGP_SetSelection from AEGP_CompSuite11.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SelectItem(
  AEGP_ItemH  itemH,
  A_Boolean   selectB,
  A_Boolean   deselect_othersB);
```
