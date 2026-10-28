# PF_KeyIndexToTime

`PF_KeyIndexToTime`

Suite argument declaration (not a standalone call):

```cpp
PF_KeyIndexToTime(
  PF_ProgPtr     effect_ref,
  PF_ParamIndex  param_index,
  PF_KeyIndex    key_indexP,
  A_long         *key_timeP,
  A_u_long       *key_timescaleP);
```

Hands back the named keyframe's time, together with its timescale.
