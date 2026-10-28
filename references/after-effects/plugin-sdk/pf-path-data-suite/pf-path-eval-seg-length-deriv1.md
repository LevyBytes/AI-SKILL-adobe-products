# PF_PathEvalSegLengthDeriv1

`PF_PathEvalSegLengthDeriv1`

Retrieves the location, and the first derivative, of a point lengthF along the given path segment.

If you're not sure why you'd ever need this, don't use it. Math is hard.

Suite argument declaration (not a standalone call):

```cpp
PF_PathEvalSegLengthDeriv1(
  PF_ProgPtr         effect_ref0,
  PF_PathOutlinePtr  pathP,
  PF_PathSegPrepPtr  *lengthPrepPP0,
  A_long             which_segL,
  PF_FpLong          lengthF,
  PF_FpLong          *x,
  PF_FpLong          *y,
  PF_FpLong          *deriv1x,
  PF_FpLong          *deriv1y);
```
