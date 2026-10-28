# AEGP_GetLayerQuality

`AEGP_GetLayerQuality`

Reads back a layer's quality setting.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLayerQuality(
  AEGP_LayerH        layerH,
  AEGP_LayerQuality  *qualityP);
```

The quality value reported back is one among these flags: - `AEGP_LayerQual_NONE` - `AEGP_LayerQual_WIREFRAME` - `AEGP_LayerQual_DRAFT` - `AEGP_LayerQual_BEST`
