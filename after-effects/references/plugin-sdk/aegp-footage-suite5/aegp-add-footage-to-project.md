# AEGP_AddFootageToProject

`AEGP_AddFootageToProject`

Adds a footage item to a project. Footage will be adopted by the project, and may be added only once.

This is Undo-able; do not dispose of the returned added item if it's undone.

Suite argument declaration (not a standalone call):

```cpp
AEGP_AddFootageToProject(
  AEGP_FootageH  footageH,
  AEGP_ItemH     folderH,
  AEGP_ItemH     *add_itemPH0);
```
