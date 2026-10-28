# AEGP_SetLayerTransferMode

`AEGP_SetLayerTransferMode`

Assigns a layer's transfer mode. Undoable.

Suite argument declaration (not a standalone call):

```cpp
AEGPSetLayerTransferMode(
  AEGP_LayerH             layerH,
  AEGP_LayerTransferMode  *modeP);
```

Beginning with 23.0, turning a layer into a track matte switches off the layer that is being matted, mirroring what happens when you perform the same action in the interface.
