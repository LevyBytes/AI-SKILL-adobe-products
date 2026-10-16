# AEGP_SetLayerInPointAndDuration

`AEGP_SetLayerInPointAndDuration`

Assigns both the in point and the duration of a layer, in either composition or layer time. Undo-able.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetLayerInPointAndDuration(
  AEGP_LayerH     layerH,
  AEGP_LTimeMode  time_mode,
  const A_Time    *in_pointPT,
  const A_Time    *durationPT);
```
