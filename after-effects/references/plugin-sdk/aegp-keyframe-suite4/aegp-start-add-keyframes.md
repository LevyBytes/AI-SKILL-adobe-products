# AEGP_StartAddKeyframes

`AEGP_StartAddKeyframes`

Lets After Effects know you're about to drop several keyframes onto the named stream. In return After Effects gives you an allocated, opaque AEGP_AddKeyframesInfoH for the calls below.

Suite argument declaration (not a standalone call):

```cpp
AEGP_StartAddKeyframes(
  AEGP_StreamRefH         streamH,
  AEGP_AddKeyframesInfoH  *akPH);
```
