# AEGP_GetCompFromItem

`AEGP_GetCompFromItem`

Retrieves the handle to the composition, given an item handle.

Returns NULL if itemH is not an AEGP_CompH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetCompFromItem(
  AEGP_ItemH  itemH,
  AEGP_CompH  *compPH);
```
