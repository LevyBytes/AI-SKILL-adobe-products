# PF_GET_PIXEL_DATA16

`PF_GET_PIXEL_DATA16`

Obtain a pointer to a 16-bpc pixel within the specified world.

The returned pixel pointer will be NULL if the world is not 16-bpc.

The second parameter is optional; if it is not NULL, the returned pixel will be an interpretation of the values in the passed-in pixel, as if it were in the specified PF_EffectWorld.

Suite argument declaration (not a standalone call):

```cpp
PF_GET_PIXEL_DATA16 (
  PF_EffectWorld wP,
  PF_PixelPtr    pP0,
  PF_Pixel16     *outPP);
```
