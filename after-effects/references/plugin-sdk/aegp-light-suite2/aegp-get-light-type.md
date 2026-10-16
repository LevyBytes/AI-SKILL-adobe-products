# AEGP_GetLightType

`AEGP_GetLightType`

Retrieves AEGP_LightType for light_layerH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetLightType(
  AEGP_LayerH     light_layerH,
  AEGP_LightType  *light_typeP);
```

`AEGP_LightType` will be one of the following: - `AEGP_LightType_PARALLEL` - `AEGP_LightType_SPOT` - `AEGP_LightType_POINT` - `AEGP_LightType_AMBIENT`
