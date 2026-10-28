# PF_IsIdenticalCheckout

`PF_IsIdenticalCheckout`

Suite argument declaration (not a standalone call):

```cpp
PF_IsIdenticalCheckout(
  PF_ProgPtr     effect_ref,
  PF_ParamIndex  param_index,
  A_long         what_time1,
  A_long         time_step1,
  A_u_long       time_scale1,
  A_long         what_time2,
  A_long         time_step2,
  A_u_long       time_scale2,
  PF_Boolean     *identicalPB);
```

Hands back TRUE when a parameter holds the identical value at both supplied times. Note: those times don't have to be adjacent; differing values could sit in between.
