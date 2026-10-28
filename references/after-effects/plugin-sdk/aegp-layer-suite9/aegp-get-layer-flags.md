# AEGP_GetLayerFlags

`AEGP_GetLayerFlags`

Reads back a layer's flags.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLayerFlags(
  AEGP_LayerH      layerH,
  AEGP_LayerFlags  *layer_flagsP);
```

- `AEGP_LayerFlag_NONE` - `AEGP_LayerFlag_VIDEO_ACTIVE` - `AEGP_LayerFlag_AUDIO_ACTIVE` - `AEGP_LayerFlag_EFFECTS_ACTIVE` - `AEGP_LayerFlag_MOTION_BLUR` - `AEGP_LayerFlag_FRAME_BLENDING` - `AEGP_LayerFlag_LOCKED` - `AEGP_LayerFlag_SHY` - `AEGP_LayerFlag_COLLAPSE` - `AEGP_LayerFlag_AUTO_ORIENT_ROTATION` - `AEGP_LayerFlag_ADJUSTMENT_LAYER` - `AEGP_LayerFlag_TIME_REMAPPING` - `AEGP_LayerFlag_LAYER_IS_3D` - `AEGP_LayerFlag_LOOK_AT_CAMERA` - `AEGP_LayerFlag_LOOK_AT_POI` - `AEGP_LayerFlag_SOLO` - `AEGP_LayerFlag_MARKERS_LOCKED` - `AEGP_LayerFlag_NULL_LAYER` - `AEGP_LayerFlag_HIDE_LOCKED_MASKS` - `AEGP_LayerFlag_GUIDE_LAYER` - `AEGP_LayerFlag_ENVIRONMENT_LAYER` - `AEGP_LayerFlag_ADVANCED_FRAME_BLENDING`, True only if pixel motion frame blending is on for the layer. - `AEGP_LayerFlag_SUBLAYERS_RENDER_SEPARATELY`, Reads or writes whether per-character 3D is turned on for a text layer. - `AEGP_LayerFlag_ENVIRONMENT_LAYER`, New in CS6.
