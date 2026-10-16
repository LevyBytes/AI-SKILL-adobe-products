# AEIO_GetAuxChannelDesc

`AEIO_GetAuxChannelDesc`

Describes an auxiliary data channel's type, name, channel, and dimensionality.

Suite argument declaration (not a standalone call):

```cpp
AEIO_GetAuxChannelDesc(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  long            chan_indexL,
  PF_ChannelDesc  *descP);
```

Input

No
