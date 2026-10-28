# BMPDepthType

Community declaration reference: Photoshop/2015.5.

Specifies channel depth, also called pixel depth or color depth. The selected number acts as an exponent of 2; for example, EIGHT maps to 2^8 possible values, which is 256.

```typescript
declare enum BMPDepthType {
    /**
    - Advanced bit-depth specification A1 R5 G5 B5.
      */
      BMP_A1R5G5B5 = 61,
    /**

    - Advanced bit-depth specification A4 R4 G4 B4.
      */
      BMP_A4R4G4B4 = 64,
    /**

    - Advanced bit-depth specification A8 R8 G8 B8, equivalent to normal 32 bit mode.
      */
      BMP_A8R8G8B8 = 67,
    /**

    - Advanced bit-depth specification R5 G6 B5.
      */
      BMP_R5G6B5 = 62,
    /**

    - Advanced bit-depth specification R8 G8 B8, equivalent to normal 24 bit mode.
      */
      BMP_R8G8B8 = 65,
    /**

    - Advanced bit-depth specification X1 R5 G5 B5, equivalent to normal 16 bit mode.
      */
      BMP_X1R5G5B5 = 60,
    /**

    - Advanced bit-depth specification X4 R4 G4 B4.
      */
      BMP_X4R4G4B4 = 63,
    /**

    - Advanced bit-depth specification X8 R8 G8 B8.
      */
      BMP_X8R8G8B8 = 66,
    /**

    - 8-bit depth.
      */
      EIGHT = 8,
    /**

    - 4-bit depth.
      */
      FOUR = 4,
    /**

    - 1-bit depth.
      */
      ONE = 1,
    /**

    - 16-bit depth.
      */
      SIXTEEN = 16,
    /**

    - 32-bit depth.
      */
      THIRTYTWO = 32,
    /**

    - 24-bit depth.
      */
      TWENTYFOUR = 24,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
