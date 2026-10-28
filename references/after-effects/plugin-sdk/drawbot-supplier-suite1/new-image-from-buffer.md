# NewImageFromBuffer

NewImageFromBuffer

Create a new image from buffer passed to in_dataP.

Release this using ReleaseObject from Drawbot_SupplierSuite.

Suite argument declaration (not a standalone call):

```cpp
NewImageFromBuffer(
  DRAWBOT_SupplierRef  in_supplier_ref,
  int                  in_width,
  int                  in_height,
  int                  in_row_bytes,
  DRAWBOT_PixelLayout  in_pl,
  const void           *in_dataP,
  DRAWBOT_ImageRef     *out_imageP);
```

`DRAWBOT_PixelLayout` can be one of the following: - `kDRAWBOT_PixelLayout_24RGB` - `kDRAWBOT_PixelLayout_24BGR` - `kDRAWBOT_PixelLayout_32RGB` - ARGB (A is ignored) - `kDRAWBOT_PixelLayout_32BGR` - BGRA (A is ignored) - `kDRAWBOT_PixelLayout_32ARGB_Straight` - `kDRAWBOT_PixelLayout_32ARGB_Premul` - `kDRAWBOT_PixelLayout_32BGRA_Straight` - `kDRAWBOT_PixelLayout_32BGRA_Premul`
