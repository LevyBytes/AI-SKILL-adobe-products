# AEGP_SetItemProxyFootage

`AEGP_SetItemProxyFootage`

Sets footage as the proxy for an item. Will be adopted by the project.

This is Undo-able; do not dispose of the returned added item if it's undone.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetItemProxyFootage(
  AEGP_FootageH  footageH,
  AEGP_ItemH     itemH);
```
