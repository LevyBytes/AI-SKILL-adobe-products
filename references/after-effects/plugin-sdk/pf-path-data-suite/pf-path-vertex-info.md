# PF_PathVertexInfo

`PF_PathVertexInfo`

Retrieves the PF_PathVertex for the specified path.

The range of points is [0.num_segments]; for closed paths, vertex[0] == vertex[num_segments].

Suite argument declaration (not a standalone call):

```cpp
PF_PathVertexInfo(
  PF_ProgPtr         effect_ref0,
  PF_PathOutlinePtr  pathP,
  A_long             which_pointL,
  PF_PathVertex      *vertexP);
```
