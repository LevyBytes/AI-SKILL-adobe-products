# PF_GetKeyframeCount

`PF_GetKeyframeCount`

Suite argument declaration (not a standalone call):

```cpp
PF_GetKeyframeCount(
  PF_ProgPtr     effect_ref,
  PF_ParamIndex  param_index,
  PF_KeyIndex    *key_countP);
```

Hands back, for the given parameter, how many keyframes its stream holds.
