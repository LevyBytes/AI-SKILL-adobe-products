# PF_PathEvalSegLength

`PF_PathEvalSegLength`

Retrieves the location of a point lengthF along the given path segment.

Suite argument declaration (not a standalone call):

```cpp
PF_PathEvalSegLength(
  PF_ProgPtr         effect_ref0,
  PF_PathOutlinePtr  pathP,
  PF_PathSegPrepPtr  *lengthPrepPP0,
  A_long             which_segL,
  PF_FpLong          lengthF,
  PF_FpLong          *x,
  PF_FpLong          *y);
```
