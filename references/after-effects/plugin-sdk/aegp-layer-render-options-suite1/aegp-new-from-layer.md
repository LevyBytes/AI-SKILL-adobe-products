# AEGP_NewFromLayer

`AEGP_NewFromLayer`

Gives back the AEGP_LayerRenderOptionsH that goes with a given AEGP_LayerH.

Render time gets the layer's current time, time step gets the layer's frame duration, ROI gets the layer's nominal bounds, and EffectsToRender is set to "all".

The calling code has to dispose of optionsPH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_NewFromLayer(
  AEGP_PluginID             plugin_id,
  AEGP_LayerH               layerH,
  AEGP_LayerRenderOptionsH  *optionsPH);
```
