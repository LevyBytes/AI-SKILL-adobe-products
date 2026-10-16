# AEGP Suites — Layer Creation Notes

Every layer made with AEGP calls begins at composition time 0 and lasts as long as the composition does.

Use `AEGP_SetLayerOffset`() and `AEGP_SetLayerInPointAndDuration`() from `AEGP_LayerSuite9` to properly set the layer's time information.

If the layer's stretch factor (which you read with `AEGP_GetLayerStretch` in `AEGP_LayerSuite9`, of course) differs from 100%, you'll have to run the calculation below to arrive at the right layer offset:

```cpp
offset = compIn - stretch * layerIn;
```
