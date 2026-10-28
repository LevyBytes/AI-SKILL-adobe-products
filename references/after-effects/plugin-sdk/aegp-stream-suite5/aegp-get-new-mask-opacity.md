# AEGP_GetNewMaskOpacity

`AEGP_GetNewMaskOpacity`

Fetch the mask's opacity stream. The stream has to be disposed of.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNewMaskOpacity(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_MaskH       maskH,
  PF_ParamIndex    param_index,
  AEGP_StreamRefH  *mask_opacity_streamPH);
```
