# iterate_origin_non_clip_src

iterate_origin_non_clip_src

Allows for iteration across pixels outside the intersection of the source and destination layers. For these pixels, you will be passed a PF_Pixel with values {0,0,0,0}.

The signature below shows the 8-bit `PF_Iterate8Suite1` callback. Use `PF_Pixel16` with the 16-bit suite and `PF_PixelFloat` with the floating-point suite.

Suite argument declaration (not a standalone call):

```cpp
iterate_origin_non_clip_src(
  PF_InData       *in_data,
  A_long          progress_base,
  A_long          progress_final,
  PF_EffectWorld  *src,
  const PF_Rect   *area,
  const PF_Point  *origin,
  void            *refcon,
  PF_Err (*pix_fn)(
    void      *refcon,
    A_long    x,
    A_long    y,
    PF_Pixel  *in,
    PF_Pixel  *out),
  PF_EffectWorld  *dst);
```
