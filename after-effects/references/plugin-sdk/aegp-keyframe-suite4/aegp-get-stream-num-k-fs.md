# AEGP_GetStreamNumKFs

`AEGP_GetStreamNumKFs`

Hands back how many keyframes sit on the given stream.

Returns AEGP_NumKF_NO_DATA when the stream can't take keyframes.

Bear in mind, too, that a stream lacking keyframes isn't automatically constant; expressions can still change it.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetStreamNumKFs(
  AEGP_StreamRefH  streamH,
  A_long           *num_kfsPL);
```
