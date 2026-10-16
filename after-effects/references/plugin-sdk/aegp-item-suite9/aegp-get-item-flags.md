# AEGP_GetItemFlags

`AEGP_GetItemFlags`

Get properties of an item.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetItemFlags(
  AEGP_ItemH      itemH,
  AEGP_ItemFlags  *item_flagsP);
```

Flag values (may be OR'd together): - `AEGP_ItemFlag_MISSING` - `AEGP_ItemFlag_HAS_PROXY` - `AEGP_ItemFlag_USING_PROXY` - `AEGP_ItemFlag_MISSING_PROXY` - `AEGP_ItemFlag_HAS_VIDEO` - `AEGP_ItemFlag_HAS_AUDIO` - `AEGP_ItemFlag_STILL` - `AEGP_ItemFlag_HAS_ACTIVE_AUDIO` Unlike the `HAS_AUDIO` flag, this bit flag will set only if the comp has at least one layer where audio is actually on.
