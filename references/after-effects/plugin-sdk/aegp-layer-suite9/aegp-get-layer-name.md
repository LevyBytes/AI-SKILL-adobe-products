# AEGP_GetLayerName

`AEGP_GetLayerName`

Get the name of a layer.

Both utf_layer_namePH0 and utf_source_namePH0 point to null terminated UTF-16 strings. They must be disposed with AEGP_FreeMemHandle.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLayerName(
  AEGP_PluginID   pluginID,
  AEGP_LayerH     layerH,
  AEGP_MemHandle  *utf_layer_namePH0,
  AEGP_MemHandle  *utf_source_namePH0);
```
