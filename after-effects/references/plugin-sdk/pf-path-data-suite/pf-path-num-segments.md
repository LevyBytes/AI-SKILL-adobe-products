# PF_PathNumSegments

`PF_PathNumSegments`

Retrieves the number of segments in the path.

N segments means there are segments [0.N-1]; segment J is defined by vertex J and J+1.

Suite argument declaration (not a standalone call):

```cpp
PF_PathNumSegments(
  PF_ProgPtr         effect_ref0,
  PF_PathOutlinePtr  pathP,
  A_long             *num_segmentsPL);
```
