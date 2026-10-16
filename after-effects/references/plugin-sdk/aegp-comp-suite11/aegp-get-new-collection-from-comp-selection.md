# AEGP_GetNewCollectionFromCompSelection

`AEGP_GetNewCollectionFromCompSelection`

Creates a new AEGP_Collection2H from the items selected in the given composition.

The plug-in is responsible for disposing of the AEGP_Collection2H.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNewCollectionFromCompSelection(
  AEGP_PluginID      plugin_id,
  AEGP_CompH         compH,
  AEGP_Collection2H  *collectionPH);
```
