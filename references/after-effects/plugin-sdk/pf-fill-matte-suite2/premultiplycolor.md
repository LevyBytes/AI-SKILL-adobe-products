# premultiply_color

premultiply_color

Converts to (and from) having r, g, and b color values premultiplied with any color to represent the alpha channel.

```cpp
PF_Err premultiply_color (
  PF_ProgPtr      effect_ref,
  PF_EffectWorld  *src,
  PF_Pixel        *color,
  A_long          forward,
  PF_EffectWorld  *dst);
```
