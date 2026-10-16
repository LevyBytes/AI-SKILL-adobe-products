# AEGP_IsVideoActive

`AEGP_IsVideoActive`

Supply a layer and a composition time to learn whether that layer will render.

Time mode is either AEGP_LTimeMode_LayerTime or AEGP_LTimeMode_CompTime.

Suite argument declaration (not a standalone call):

```cpp
AEGP_IsVideoActive(
  AEGP_LayerH     layerH,
  AEGP_LTimeMode  time_mode,
  A_Time          *comp_timePT,
  A_Boolean       *is_activePB);
```
