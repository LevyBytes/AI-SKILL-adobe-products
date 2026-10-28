# Color Space Conversion - Pixel Types For Different Color Spaces

```cpp
typedef struct {
  A_u_char alpha, red, green, blue;
} PF_Pixel8;
```

```cpp
typedef struct {
  A_u_short alpha, red, green, blue;
} PF_Pixel16;
```

```cpp
typedef struct {
  PF_FpShort alpha, red, green, blue;
} PF_PixelFloat, PF_Pixel32;
```

```cpp
typedef PF_Fixed PF_HLS_PIXEL[3];
```

```cpp
typedef PF_Fixed PF_YIQ_PIXEL[3];
```

| Pixel Type | Data Structure |
| --- | --- |
| 8 bpc ARGB |  |
| 16 bpc ARGB |  |
| 32 bpc ARGB |  |
| HLS (Hue, Lightness, Saturation) |  |
| YIQ (luminance, in-phase chrominance, quadrature chrominance) |  |

Because the callbacks below convert between color spaces, you can reuse image-processing algorithms originally authored for almost any space within your plug-in.
