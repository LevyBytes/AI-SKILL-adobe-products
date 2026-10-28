# PF_GetLayerChannelIndexedRefAndDesc

`PF_GetLayerChannelIndexedRefAndDesc`

Retrieves (by index) a reference to, and description of, the specified channel.

Suite argument declaration (not a standalone call):

```cpp
PF_GetLayerChannelIndexedRefAndDesc(
  PF_ProgPtr       effect_ref,
  PF_ParamIndex    param_index,
  PF_ChannelIndex  channel_index,
  PF_Boolean       *foundPB,
  PF_ChannelRef    *channel_refP,
  PF_ChannelDesc   *channel_descP);
```
