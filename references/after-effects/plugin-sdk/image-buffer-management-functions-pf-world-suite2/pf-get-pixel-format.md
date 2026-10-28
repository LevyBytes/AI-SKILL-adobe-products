# PF_GetPixelFormat

`PF_GetPixelFormat`

Get the pixel format for a given PF_EffectWorld.

```cpp
PF_Err PF_GetPixelFormat(
  const PF_EffectWorld  *worldP,
  PF_PixelFormat        *pixel_formatP);
```

pixel_formatP can be: - `PF_PixelFormat_ARGB32` - standard 8-bit RGB - `PF_PixelFormat_ARGB64` - 16-bit RGB - `PF_PixelFormat_ARGB128` - 32-bit floating point RGB
