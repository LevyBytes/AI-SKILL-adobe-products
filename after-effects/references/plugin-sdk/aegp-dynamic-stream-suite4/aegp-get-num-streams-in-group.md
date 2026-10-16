# AEGP_GetNumStreamsInGroup

`AEGP_GetNumStreamsInGroup`

Hands back how many streams belong to the given AEGP_StreamRefH.

Calling this on an AEGP_StreamRefH whose type is AEGP_StreamGroupingType_LEAF produces an error.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNumStreamsInGroup(
  AEGP_StreamRefH  streamH,
  A_long           *num_streamsPL);
```
