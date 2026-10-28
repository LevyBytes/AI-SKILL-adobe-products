# copy

copy

Copies a region from one PF_EffectWorld to another, preserving alpha (unlike the macOS CopyBits).

```cpp
PF_Err copy (
  PF_EffectWorld  *src,
  PF_EffectWorld  *dst,
  PF_Rect         *src_r,
  PF_Rect         *dst_r);
```
