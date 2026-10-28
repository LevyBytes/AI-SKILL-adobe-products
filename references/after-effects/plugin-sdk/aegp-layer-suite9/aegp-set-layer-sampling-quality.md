# AEGP_SetLayerSamplingQuality

`AEGP_SetLayerSamplingQuality`

New in CC. Sets the sampling quality of a layer (see flag values above). The option is applied to the layer on its own, separate from layer quality.

To force it on, the layer quality must additionally be set to AEGP_LayerQual_BEST through AEGP_SetLayerQuality; without that, the chosen layer sampling quality takes effect only while layer quality sits at AEGP_LayerQual_BEST.

Undoable.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetLayerSamplingQuality(
  AEGP_LayerH                layerH,
  AEGP_LayerSamplingQuality  label);
```
