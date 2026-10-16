# AEGP_GetStreamDepth

`AEGP_GetStreamDepth`

Hands back how many sub-streams hang off the given AEGP_StreamRefH. A depth of 0 belongs to the starting layer.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetStreamDepth(
  AEGP_StreamRefH  streamH,
  A_long           *depthPL);
```
