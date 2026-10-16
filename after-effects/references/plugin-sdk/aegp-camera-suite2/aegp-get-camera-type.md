# AEGP_GetCameraType

`AEGP_GetCameraType`

Given a layer, returns that layer's camera type.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetCameraType(
  AEGP_LayerH      aegp_layerH,
  AEGP_CameraType  *camera_typeP);
```

The camera type can be the following: - `AEGP_CameraType_NONE` = -1 - `AEGP_CameraType_PERSPECTIVE` - `AEGP_CameraType_ORTHOGRAPHIC`
