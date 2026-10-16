# subpixel_sample

subpixel_sample

Queries the appropriate alpha-weighted interpolation of colors at a non-integral point in a source image, in high quality. Nearest neighbor sampling is used in low quality. Because the sampling routine, if used, will typically be called many times, it is convenient to copy the function pointer out to the callbacks structure and into a register or onto the stack to speed up your inner loop. See the sample code for an example.

Note

The sampling assumes that 0,0 is the center of the top left pixel.

```cpp
PF_Err subpixel_sample (
  PF_ProgPtr       effect_ref,
  PF_Fixed         x,
  PF_Fixed         y,
  const PF_SampPB  *params,
  PF_Pixel         *dst_pixel);
```
