# PF_FindKeyframeTime

`PF_FindKeyframeTime`

Suite argument declaration (not a standalone call):

```cpp
PF_FindKeyframeTime(
  PF_ProgPtr     effect_ref,
  PF_ParamIndex  param_index,
  A_long         what_time,
  A_u_long       time_scale,
  PF_TimeDir     time_dir,
  PF_Boolean     *foundPB,
  PF_KeyIndex    *key_indexP0,
  A_long         *key_timeP0,
  A_u_long       *key_timescaleP0);
```

Looks, along the direction you specify, for the parameter stream's next keyframe. Those final three parameters can be omitted.
