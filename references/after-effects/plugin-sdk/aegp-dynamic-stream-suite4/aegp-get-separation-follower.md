# AEGP_GetSeparationFollower

`AEGP_GetSeparationFollower`

Fetch whichever Follower stream lines up with a given one of the Leader stream's dimensions.

dimS can range from 0 to AEGP_GetStreamValueDimensionality(lea der_streamH) - 1.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetSeparationFollower(
  AEGP_StreamRefH leader_streamH,
  A_short dimS,
  AEGP_StreamRefH *follower_streamPH);
```
