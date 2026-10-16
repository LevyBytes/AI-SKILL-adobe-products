# AEGP_SetInSpecDimensions

`AEGP_SetInSpecDimensions`

Tells After Effects the width and height of image data in AEIO_InSpecH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetInSpecDimensions(
  AEIO_InSpecH  inH,
  A_long        widthL,
  A_long        heightL);
```

`AEGP_InSpecGetRational` Dimensions

Retrieves the width, height, bounding rect, and scaling factor applied to AEIO_InSpecH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_InSpecGetRationalDimensions(
  AEIO_InSpecH              inH,
  const AEIO_RationalScale  *rs0,
  A_long                    *width0,
  A_long                    *height0,
  A_Rect                    *r0);
```
