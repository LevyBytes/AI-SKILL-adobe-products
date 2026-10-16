# fill

fill

Fills a rect with a color (or, if the color pointer is null, fills with black and alpha zero).

If the rect is null, it fills the entire image.

```cpp
PF_Err fill (
  PF_ProgPtr      effect_ref,
  const PF_Pixel  *color,
  const PF_Rect   *dst_rect,
  PF_EffectWorld  *world);
```
