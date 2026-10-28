# PNGColorSpaceEnum

Community declaration reference: InDesign/2023.

Color-space choices for exported PNG color representation.

```typescript
declare enum PNGColorSpaceEnum {
    /**
    - Converts all color values into high-quality black-and-white images. The converted objects' gray levels reflect the original objects' luminosity.
      */
      GRAY = 1766290041,
    /**

    - Uses the RGB color space for all color values. Best suited to documents intended for on-screen viewing.
      */
      RGB = 1666336578,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
