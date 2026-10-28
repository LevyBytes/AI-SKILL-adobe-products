# AEGP_AreDimensionsSeparated

`AEGP_AreDimensionsSeparated`

Functions like AEGP_GetNewKeyframeValue that operate on keyframe indices will certainly not function on the Leader property; you'll have to fetch and act on the Followers yourself.

Suite argument declaration (not a standalone call):

```cpp
AEGP_AreDimensionsSeparated(
  AEGP_StreamRefH  streamH,
  A_Boolean        *separatedPB);
```
