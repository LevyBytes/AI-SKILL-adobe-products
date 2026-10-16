# DrawImage

DrawImage

Draw an image created using NewImageFromBuffer() on the surface. Alpha = [0.0f, 1.0f ].

Suite argument declaration (not a standalone call):

```cpp
DrawImage(
  DRAWBOT_SurfaceRef      in_surface_ref,
  DRAWBOT_ImageRef        in_image_ref,
  const DRAWBOT_PointF32  *in_originP,
  float                   in_alpha);
```
