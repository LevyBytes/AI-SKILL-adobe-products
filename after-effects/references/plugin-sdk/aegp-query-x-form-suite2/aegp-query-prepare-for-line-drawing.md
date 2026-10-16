# AEGP_QueryPrepareForLineDrawing

`AEGP_QueryPrepareForLineDrawing`

Tells After Effects about the context it will draw into.

Suite argument declaration (not a standalone call):

```cpp
AEGP_QueryPrepareForLineDrawing(
  PR_QueryContextH        query_contextH,
  AEGP_PlatformWindowRef  *window_refP,
  A_LegacyRect            *viewportP,
  A_LPoint                *originP,
  A_FloatPoint            *scaleP);
```
