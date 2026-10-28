# AEGP_GetNextProjItem

`AEGP_GetNextProjItem`

Retrieves the next project item; *next_itemPH will be NULL after the last item.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNextProjItem(
  AEGP_ProjectH  projectH,
  AEGP_ItemH     itemH,
  AEGP_ItemH     *next_itemPH);
```
