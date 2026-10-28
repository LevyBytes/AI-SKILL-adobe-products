# AEGP_GetItemType

`AEGP_GetItemType`

Gets type of an item. Note: solids don't appear in the project, but can be the source to a layer.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetItemType(
  AEGP_ItemH     itemH,
  AEGP_ItemType  *item_typeP);
```

Items are one of the following types: - `AEGP_ItemType_NONE` - `AEGP_ItemType_FOLDER` - `AEGP_ItemType_COMP` - `AEGP_ItemType_SOLID` - `AEGP_ItemType_FOOTAGE`
