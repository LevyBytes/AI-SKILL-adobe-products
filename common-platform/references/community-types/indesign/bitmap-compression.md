# BitmapCompression

Community declaration reference: InDesign/2023.

Compression choices for bitmap images.

```typescript
declare enum BitmapCompression {
    /**
    - Automatic JPEG 2000 compression method.
      */
      AUTOMATIC_JPEG_2000 = 1634365490,
    /**

    - Applies JPEG compression while automatically selecting quality. Requires acrobat compatibility of acrobat 6 or higher.
      */
      AUTO_COMPRESSION = 1631808880,
    /**

    - Applies JPEG compression.
      */
      JPEG = 1785751398,
    /**

    - Applies JPEG 2000 compression. Requires acrobat compatibility of acrobat 6 or higher.
      */
      JPEG_2000 = 1785751346,
    /**

    - Applies no compression.
      */
      NONE = 1852796517,
    /**

    - Applies ZIP compression.
      */
      ZIP = 2053730371,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
