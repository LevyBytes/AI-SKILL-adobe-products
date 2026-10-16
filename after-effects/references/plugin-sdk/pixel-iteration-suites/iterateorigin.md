# iterate_origin

iterate_origin

Lets you specify an offset from the input into the output.

For example, if your output buffer is smaller than your input buffer, pass (in_- data>output_origin_x, in_data>output_origin_y) as the origin, and NULL for area, and this function will offset the src pixel pointer appropriately for your pixel function.

The signature below shows the 8-bit `PF_Iterate8Suite1` callback. Use `PF_Pixel16` with the 16-bit suite and `PF_PixelFloat` with the floating-point suite.

Suite argument declaration (not a standalone call):

```cpp
iterate_origin(
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
