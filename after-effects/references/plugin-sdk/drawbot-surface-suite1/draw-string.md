# DrawString

DrawString

Draw a string.

Suite argument declaration (not a standalone call):

```cpp
DrawString(
  DRAWBOT_SurfaceRef       in_surface_ref,
  DRAWBOT_BrushRef         in_brush_ref,
  DRAWBOT_FontRef          in_font_ref,
  const DRAWBOT_UTF16Char  *in_stringP,
  const DRAWBOT_PointF32   *in_originP,
  DRAWBOT_TextAlignment    in_alignment_style,
  DRAWBOT_TextTruncation   in_truncation_style,
  float                    in_truncation_width);
```

`DRAWBOT_TextAlignment` is one of the following: - `kDRAWBOT_TextAlignment_Left` - `kDRAWBOT_TextAlignment_Center` - `kDRAWBOT_TextAlignment_Right` `DRAWBOT_TextTruncation` is one of the following: - `kDRAWBOT_TextTruncation_None` - `kDRAWBOT_TextTruncation_End` - `kDRAWBOT_TextTruncation_EndEllipsis` - `kDRAWBOT_TextTruncation_PathEllipsis`
