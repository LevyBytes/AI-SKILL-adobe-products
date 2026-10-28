# premultiply

premultiply

Converts to (and from) r, g, and b color values pre-multiplied with black to represent the alpha channel.

Quality independent.

- forward is used as a boolean

- true means convert non-premultiplied to pre-multiplied

- false mean un-pre-multiply.

```cpp
PF_Err premultiply (
  A_long          forward,
  PF_EffectWorld  *dst);
```
