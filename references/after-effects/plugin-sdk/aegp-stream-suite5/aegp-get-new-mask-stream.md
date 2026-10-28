# AEGP_GetNewMaskStream

`AEGP_GetNewMaskStream`

Fetch a mask's stream. The stream has to be disposed of.

For further Mask functions, look as well at the AEGP_MaskSuite and AEGP_MaskOutlineSuite.

- AEGP_MaskStream_OUTLINE

- AEGP_MaskStream_OPACITY

- AEGP_MaskStream_FEATHER

- AEGP_MaskStream_EXPANSION

Useful for iteration:

- AEGP_MaskStream_BEGIN = AEGP_MaskStream_OUTLINE

- AEGP_MaskStream_END = AEGP_MaskStream_EXPANSION + 1

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNewMaskStream(
  AEGP_PluginID    aegp_plugin_id,
  AEGP_MaskRefH    mask_refH,
  AEGP_MaskStream  which_stream,
  AEGP_StreamRefH  *mask_strmPH);
```
