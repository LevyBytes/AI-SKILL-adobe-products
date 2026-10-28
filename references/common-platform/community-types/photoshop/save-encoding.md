# SaveEncoding

Community declaration reference: Photoshop/2015.5.

Encoding used when saving documents.

```typescript
declare enum SaveEncoding {
    /**
    - Uses ASCII.
      */
      ASCII = 3,
    /**

    - Uses binary encoding.
      */
      BINARY = 1,
    /**

    - Uses high-quality JPEG encoding.
      */
      JPEGHIGH = 5,
    /**

    - Uses low-quality JPEG encoding with heavy compression.
      */
      JPEGLOW = 2,
    /**

    - Uses maximum-quality JPEG encoding with very little compression.
      */
      JPEGMAXIMUM = 6,
    /**

    - Uses medium-quality JPEG encoding with medium compression.
      */
      JPEGMEDIUM = 4,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
