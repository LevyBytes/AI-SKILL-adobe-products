# PICTCompression

Community declaration reference: Photoshop/2015.5.

Compression type used when saving as PICT.

```typescript
declare enum PICTCompression {
    /**
    - Uses high-quality JPEG encoding.
      */
      JPEGHIGHPICT = 5,
    /**

    - Uses low-quality JPEG encoding with heavy compression.
      */
      JPEGLOWPICT = 2,
    /**

    - Uses maximum-quality JPEG encoding with very little compression.
      */
      JPEGMAXIMUMPICT = 6,
    /**

    - Uses medium-quality JPEG encoding with a medium amount of compression.
      */
      JPEGMEDIUMPICT = 4,
    /**

    - Applies no compression.
      */
      NONE = 1,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
