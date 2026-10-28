# PDFEncoding

Community declaration reference: Photoshop/2015.5.

Compression type used when saving a document in PDF format.

```typescript
declare enum PDFEncoding {
    /**
    - Uses JPEG compression.
      */
      JPEG = 2,
    /**

    - Uses JPEG2000 compression with high image quality.
      */
      JPEG2000HIGH = 9,
    /**

    - Uses lossless JPEG2000 compression.
      */
      JPEG2000LOSSLESS = 14,
    /**

    - Uses JPEG2000 compression with low image quality.
      */
      JPEG2000LOW = 13,
    /**

    - Uses JPEG2000 compression with medium image quality.
      */
      JPEG2000MED = 11,
    /**

    - Uses JPEG2000 compression with medium-high image quality.
      */
      JPEG2000MEDHIGH = 10,
    /**

    - Uses JPEG2000 compression with medium-low image quality.
      */
      JPEG2000MEDLOW = 12,
    /**

    - Uses JPEG compression with high image quality.
      */
      JPEGHIGH = 4,
    /**

    - Uses JPEG compression with low image quality.
      */
      JPEGLOW = 8,
    /**

    - Uses JPEG compression with medium image quality.
      */
      JPEGMED = 6,
    /**

    - Uses JPEG compression with medium-high image quality.
      */
      JPEGMEDHIGH = 5,
    /**

    - Uses JPEG compression with medium-low image quality.
      */
      JPEGMEDLOW = 7,
    /**

    - Uses no encoding.
      */
      NONE = 0,
    /**

    - Uses Zip compression.
      */
      PDFZIP = 1,
    /**

    - Uses Zip compression with 4-bit image quality.
      */
      PDFZIP4BIT = 3,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
