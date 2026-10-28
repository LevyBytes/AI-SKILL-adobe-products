# PF_CheckoutLayerChannel

`PF_CheckoutLayerChannel`

Retrieves the PF_ChannelChunk containing the data associated with the given PF_ChannelRefPtr.

Suite argument declaration (not a standalone call):

```cpp
PF_CheckoutLayerChannel(
  PF_ProgPtr effect_ref,
  PF_ChannelRefPtr channel_refP,
  A_long what_time,
  A_long duration,
  A_u_long time_scale,
  PF_DataType data_type,
  PF_ChannelChunk *channel_chunkP);
```
