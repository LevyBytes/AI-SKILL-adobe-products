# AddArc

AddArc

Add a arc to the path. Zero start degrees == 3 o'clock.

Sweep is clockwise. Units for angle are in degrees.

Suite argument declaration (not a standalone call):

```cpp
AddArc(
  DRAWBOT_PathRef         in_path_ref,
  const DRAWBOT_PointF32  *in_centerP,
  float                   in_radius,
  float                   in_start_angle,
  float                   in_sweep);
```
