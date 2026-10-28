# Preview

Community declaration reference: Photoshop/2015.5.

Low-resolution preview image type for the destination application.

```typescript
declare enum Preview {
    /**
    - Uses 8-bit TIFF.
      */
      EIGHTBITTIFF = 3,
    /**

    - Uses 8-bit.
      */
      MACOSEIGHTBIT = 5,
    /**

    - Uses JPEG.
      */
      MACOSJPEG = 6,
    /**

    - Uses monochrome.
      */
      MACOSMONOCHROME = 4,
    /**

    - Uses monochrome TIFF.
      */
      MONOCHROMETIFF = 2,
    /**

    - Does not include a preview.
      */
      NONE = 1,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
