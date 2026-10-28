# AEGP_GetCamera

`AEGP_GetCamera`

Given a layer handle and time, returns the active camera layer.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetCamera(
  PR_RenderContextH  render_contextH,
  const A_Time       *comp_timeP,
  AEGP_LayerH        *camera_layerPH);
```
