# AEGP_NewFromItem

`AEGP_NewFromItem`

Gives back the AEGP_RenderOptionsH that goes with a given AEGP_ItemH.

When no options have been set yet, After Effects returns an AEGP_RenderOptionsH whose render time is 0, whose time step equals the current frame duration, whose field render is PF_Field_FRAME, and whose depth is the highest resolution the item specifies.

Suite argument declaration (not a standalone call):

```cpp
AEGP_NewFromItem(
  AEGP_PluginID        plugin_id,
  AEGP_ItemH           itemH,
  AEGP_RenderOptionsH  *optionsPH);
```
