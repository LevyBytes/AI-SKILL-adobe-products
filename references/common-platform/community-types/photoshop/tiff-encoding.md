# TIFFEncoding

Community declaration reference: Photoshop/2015.5.

Encoding used when saving to TIFF format.

```typescript
declare enum TIFFEncoding {
    /**
    - Uses lossy JPEG compression, recommended for continuous-tone images such as photographs.
      */
      JPEG = 3,
    /**

    - Applies no compression.
      */
      NONE = 1,
    /**

    - Uses lossless LZW compression, especially useful for images with large single-color areas.
      */
      TIFFLZW = 2,
    /**

    - Uses lossless Zip compression, most effective for images containing large single-color areas.
      */
      TIFFZIP = 4,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
