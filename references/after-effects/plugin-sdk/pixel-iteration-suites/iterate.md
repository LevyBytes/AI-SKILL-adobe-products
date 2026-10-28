# iterate

iterate

Iterates across pixels from a source image, alters them, and populates a destination image.

You may specify a rectangular region of pixels across which to iterate; if you don't, After Effects will iterate over every overlapping pixel.

You give a refcon, and the function is invoked with that refcon, plus the x and y coordinates of the current pixel, plus pointers to that pixel in the source and destination images.

If you pass a NULL source, it will iterate over the dst. This function is quality independent.

Don't depend upon the pixels being traversed in any particular order.

The image may be subset to different CPUs, so consider all the parameters (except dst) to be read-only while After Effects is processing.

This callback automatically includes progress and abort checking, so don't do so in your pixel function.

The signature below shows the 8-bit `PF_Iterate8Suite1` callback. Use `PF_Pixel16` with the 16-bit suite and `PF_PixelFloat` with the floating-point suite.

Suite argument declaration (not a standalone call):

```cpp
iterate(
  PF_InData       *in_data,
  A_long          progress_base,
  A_long          progress_final,
  PF_EffectWorld  *src,
  const PF_Rect   *area,
  void            *refcon,
  PF_Err (*pix_fn)(
    void      *refcon,
    A_long    x,
    A_long    y,
    PF_Pixel  *in,
    PF_Pixel  *out),
  PF_EffectWorld  *dst);
```
