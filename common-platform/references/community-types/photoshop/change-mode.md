# ChangeMode

Community declaration reference: Photoshop/2015.5.

Target color mode for conversion. Note: Color images must be converted to Grayscale mode before conversion to Bitmap mode.

```typescript
declare enum ChangeMode {
    /**
    - Bitmap mode. Note: Color images must be converted to Grayscale mode before conversion to Bitmap mode.
      */
      BITMAP = 5,
    /**

    - CMYK mode.
      */
      CMYK = 3,
    /**

    - Grayscale mode.
      */
      GRAYSCALE = 1,
    /**

    - Indexed color conversion reduces the image palette to at most 256 colors, the common GIF and PNG-8 limit and a frequent multimedia constraint.
    - This conversion shrinks file size by discarding color data. To convert to indexed color, begin with an image that is 8 bits per channel and in Grayscale or RGB mode.
      */
      INDEXEDCOLOR = 6,
    /**

    - Lab mode.
      */
      LAB = 4,
    /**

    - Image mode with multiple color channels.
    - Each channel uses 256 gray levels. This mode is useful for specialized printing. Original image color channels become spot color channels after conversion. Converting CMYK to Multichannel mode produces cyan, magenta, yellow, and black spot channels. Converting RGB to Multichannel mode produces cyan, magenta, and yellow spot channels. The new grayscale data comes from pixel color values in each channel. Multichannel mode images may be saved as Photoshop, Photoshop 2.0, Photoshop Raw, or Photoshop DCS 2.0. Export a multichannel image by saving it in Photoshop DCS 2.0 format.
      */
      MULTICHANNEL = 7,
    /**

    - RGB mode.
      */
      RGB = 2,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
