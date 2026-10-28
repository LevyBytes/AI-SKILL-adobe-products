# area_sample

area_sample

Use this to calculate the appropriate alpha weighted average of an axis-aligned non-integral rectangle of color in a source image, in high quality. Nearest neighbor sampling is used in low quality. Because of overflow issues, this can only average a maximum of a 256 x 256 pixel area (i.e. x and y radius < 128 pixels).

Note

The sampling radius must be at least one in both x and y.

```cpp
PF_Err area_sample (
  PF_ProgPtr       effect_ref,
  PF_Fixed         x,
  PF_Fixed         y,
  const PF_SampPB  *params,
  PF_Pixel         *dst_pixel);
```

Note

Areas outside the boundaries of the layer are considered the same as zero alpha, for sampling purposes.
