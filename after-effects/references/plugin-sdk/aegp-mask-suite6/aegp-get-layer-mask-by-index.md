# AEGP_GetLayerMaskByIndex

`AEGP_GetLayerMaskByIndex`

Pass a layer handle plus a mask index and you get back a pointer to the mask handle. Release that handle through AEGP_DisposeMask().

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLayerMaskByIndex(
  AEGP_LayerH aegp_layerH,
  AEGP_MaskIndex mask_indexL,
  AEGP_MaskRefH *maskPH);
```
