# AEGP_GetShowLayerNameOrSourceName

`AEGP_GetShowLayerNameOrSourceName`

New in CC. Passes back true if the Comp's timeline shows layer names, false if source names. This will open the comp as a side effect.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetShowLayerNameOrSourceName(
  AEGP_CompH  compH,
  A_Boolean   *layer_names_shownPB);
```
