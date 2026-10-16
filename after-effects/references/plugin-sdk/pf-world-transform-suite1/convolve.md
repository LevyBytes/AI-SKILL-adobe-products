# convolve

convolve

Convolve an image with an arbitrary size kernel on each of the a, r, g, and b channels separately.

You can specify a rectangle to convolve (for instance, the extent_hint from PF_EffectWorld Structure), or pass 0 to convolve the entire image.

Do not use if the source is the destination.

Describe the convolution using Kernel Flags.

```cpp
PF_Err convolve(
  PF_EffectWorld  *src,
  const PF_Rect   *area,
  PF_KernelFlags  flags,
  A_long          kernel_size,
  void            *a_kernel,
  void            *r_kernel,
  void            *g_kernel,
  void            *b_kernel,
  PF_EffectWorld  *dst);
```
