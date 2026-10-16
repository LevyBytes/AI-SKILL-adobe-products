# FillPath

FillPath

Fill a path using a brush and fill type.

Suite argument declaration (not a standalone call):

```cpp
FillPath(
  DRAWBOT_SurfaceRef  in_surface_ref,
  DRAWBOT_BrushRef    in_brush_ref,
  DRAWBOT_PathRef     in_path_ref,
  DRAWBOT_FillType    in_fill_type);
```

`DRAWBOT_FillType` is one of the following: - `kDRAWBOT_FillType_EvenOdd` - `kDRAWBOT_FillType_Winding`
