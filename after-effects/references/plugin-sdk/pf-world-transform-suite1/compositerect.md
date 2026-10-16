# composite_rect

composite_rect

Composite a rectangle from one PF_EffectWorld into another, using one of After Effects' transfer modes.

```cpp
PF_Err composite_rect (
  PF_ProgPtr      effect_ref,
  PF_Rect         *src_rect,
  A_long          src_opacity,
  PF_EffectWorld  *src_world,
  A_long          dst_x,
  A_long          dst_y,
  PF_Field        field_rdr,
  PF_XferMode     xfer_mode,
  PF_EffectWorld  *dst);
```

field*rdr can be upper, lower or both. xfer_mode is one of the following: - `PF_Xfer_COPY` - `PF_Xfer_BEHIND` - `PF_Xfer_IN_FRONT`
