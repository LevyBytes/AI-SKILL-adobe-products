# AEGP_CreateCameraInComp

`AEGP_CreateCameraInComp`

Creates and adds a camera to the specified composition. Once created, you can manipulate the camera's parameter streams using the AEGP Stream Suite.

To specify a two-node camera, use AEGP_SetLayerFlag from AEGP_LayerSuite9 to set AEGP_LayerFlag_LOOK_AT_POI.

Suite argument declaration (not a standalone call):

```cpp
AEGP_CreateCameraInComp(
  const A_UTF16Char  *utf_nameZ,
  A_FloatPoint       center_point,
  AEGP_CompH         parent_compH,
  AEGP_LayerH        *new_cameraPH);
```
