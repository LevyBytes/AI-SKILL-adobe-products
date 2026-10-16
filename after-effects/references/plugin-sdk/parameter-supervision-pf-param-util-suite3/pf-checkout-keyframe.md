# PF_CheckoutKeyframe

`PF_CheckoutKeyframe`

Suite argument declaration (not a standalone call):

```cpp
PF_CheckoutKeyframe(
  PF_ProgPtr     effect_ref,
  PF_ParamIndex  param_index,
  PF_KeyIndex    key_index,
  A_long         *key_timeP0,
  A_u_long       *key_timescaleP0,
  PF_ParamDef    *paramP0);
```

From our keyframe database, retrieves one keyframe belonging to the parameter you name. param_index counts from zero. Request time, timescale, or neither, as you prefer; handy when you roll your own motion blur.
