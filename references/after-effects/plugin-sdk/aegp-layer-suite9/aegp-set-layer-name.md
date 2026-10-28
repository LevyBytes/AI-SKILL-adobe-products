# AEGP_SetLayerName

`AEGP_SetLayerName`

Assigns a layer's name. Undo-able. new_nameZ points to a null terminated UTF-16 string.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetLayerName(
  AEGP_LayerH        aegp_layerH,
  const A_UTF16Char  *new_nameZ);
```
