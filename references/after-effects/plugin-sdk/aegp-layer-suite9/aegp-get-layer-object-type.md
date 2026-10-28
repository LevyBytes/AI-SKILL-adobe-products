# AEGP_GetLayerObjectType

`AEGP_GetLayerObjectType`

Hands back what object type a layer is.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLayerObjectType(
  AEGP_LayerH      layerH,
  AEGP_ObjectType  *object_type);
```

- `AEGP_ObjectType_AV` - `AEGP_ObjectType_LIGHT` - `AEGP_ObjectType_CAMERA` - `AEGP_ObjectType_TEXT` - `AEGP_ObjectType_3D_MODEL`, New in 24.4.
