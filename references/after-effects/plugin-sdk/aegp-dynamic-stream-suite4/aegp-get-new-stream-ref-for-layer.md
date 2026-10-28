# AEGP_GetNewStreamRefForLayer

`AEGP_GetNewStreamRefForLayer`

Hands back the AEGP_StreamRefH that goes with the layer. You use this to kick off a recursive walk through the layer's streams.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNewStreamRefForLayer(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_LayerH      layerH,
  AEGP_StreamRefH  *streamPH);
```
