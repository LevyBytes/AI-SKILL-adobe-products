# PF_PathPrepareSegLength

`PF_PathPrepareSegLength`

This fairly counter-intuitive function informs After Effects that you're going to ask for the length of a segment (using PF_PathGetSegLength below), and it'd better get ready.

frequencyL indicates how many times you'd like us to sample the length; our internal effects use 100.

Suite argument declaration (not a standalone call):

```cpp
PF_PathPrepareSegLength(
  PF_ProgPtr         effect_ref0,
  PF_PathOutlinePtr  pathP,
  A_long             which_segL,
  A_long             frequencyL,
  PF_PathSegPrepPtr  *lengthPrepPP);
```
