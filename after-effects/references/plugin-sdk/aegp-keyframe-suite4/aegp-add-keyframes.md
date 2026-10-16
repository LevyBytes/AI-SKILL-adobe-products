# AEGP_AddKeyframes

`AEGP_AddKeyframes`

Drops a keyframe onto the named stream at the layer or composition time you specify.

Note: the stream's value itself is left untouched by this.

Suite argument declaration (not a standalone call):

```cpp
AEGP_AddKeyframes(
  AEGP_AddKeyframesInfoH  akH,
  AEGP_LTimeMode          time_mode,
  const A_Time            *timePT,
  A_long                  *indexPL);
```
