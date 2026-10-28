# AEGP_IsLayerVideoReallyOn

`AEGP_IsLayerVideoReallyOn`

Reports back whether the layer's video actually shows. The check is required because the 'solo' state of other layers in the comp matters; layers that aren't soloed still count as on.

Suite argument declaration (not a standalone call):

```cpp
AEGP_IsLayerVideoReallyOn(
  AEGP_LayerH  layerH,
  A_Boolean    *onPB);
```
