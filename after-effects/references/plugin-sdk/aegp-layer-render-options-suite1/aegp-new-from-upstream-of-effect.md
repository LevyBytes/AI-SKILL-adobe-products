# AEGP_NewFromUpstreamOfEffect

`AEGP_NewFromUpstreamOfEffect`

Gives back the AEGP_LayerRenderOptionsH from the layer that goes with a given AEGP_EffectRefH.

Render time gets the layer's current time, time step gets the layer's frame duration, ROI gets the layer's nominal bounds, and EffectsToRender is set to the index of effectH.

The calling code has to dispose of optionsPH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_NewFromUpstreamOfEffect(
  AEGP_PluginID             plugin_id,
  AEGP_EffectRefH           effectH,
  AEGP_LayerRenderOptionsH  *optionsPH);
```
