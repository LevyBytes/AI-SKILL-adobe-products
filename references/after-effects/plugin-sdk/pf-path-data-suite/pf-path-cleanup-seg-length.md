# PF_PathCleanupSegLength

`PF_PathCleanupSegLength`

Call this when you're finished evaluating that segment length, so After Effects can properly clean up the PF_PathSegPrepPtr.

Suite argument declaration (not a standalone call):

```cpp
PF_PathCleanupSegLength(
  PF_ProgPtr         effect_ref0,
  PF_PathOutlinePtr  pathP,
  A_long             which_segL,
  PF_PathSegPrepPtr  *lengthPrepPP);
```
