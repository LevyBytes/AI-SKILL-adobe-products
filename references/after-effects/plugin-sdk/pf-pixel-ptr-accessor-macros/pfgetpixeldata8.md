# PF_GET_PIXEL_DATA8

`PF_GET_PIXEL_DATA8`

Obtain a pointer to a 8-bpc pixel within the specified world.

The returned pixel pointer will be NULL if the world is not 8- bpc.

The second parameter is optional; if it is not NULL, the returned pixel will be an interpretation of the values in the passed-in pixel, as if it were in the specified PF_EffectWorld.

Suite argument declaration (not a standalone call):

```cpp
PF_GET_PIXEL_DATA8 (
  PF_EffectWorld wP,
  PF_PixelPtr    pP0,
  PF_Pixel8      *outPP);
```


Picture `PF_GET_PIXEL_DATA16` and `PF_GET_PIXEL_DATA8` as your (cough) safe casting helpers.

Pulling a `PF_Pixel16`\* out of the `PF_EffectWorld` output takes remarkably little code:

```cpp
{
    PF_Pixel16 *deep_pixelP = NULL;
    PF_Err     err = PF_Err_NONE;
    err = PF_GET_PIXEL_DATA16(output, NULL, &deep_pixelP);
}
```

Should the world lack deep pixels, deep_pixelP comes back as NULL.

You'll rarely need the second parameter, so pass NULL for it; feed in a `PF_PixelPtr` that lives outside any `PF_EffectWorld` when you want to force it to that `PF_EffectWorld`'s depth.
