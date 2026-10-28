# AEGP_GetLayerSamplingQuality

`AEGP_GetLayerSamplingQuality`

New in CC. Reads back a layer's sampling quality.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLayerSamplingQuality(
  AEGP_LayerH                layerH,
  AEGP_LayerSamplingQuality  *label);
```

The sampling quality reported is one among these flags: - `AEGP_LayerSamplingQual_BILINEAR` - `AEGP_LayerSamplingQual_BICUBIC`
