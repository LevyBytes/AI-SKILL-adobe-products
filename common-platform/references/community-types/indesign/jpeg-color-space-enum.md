# JpegColorSpaceEnum

Community declaration reference: InDesign/2023.

Color space choices used to represent color in an exported JPEG.

```typescript
declare enum JpegColorSpaceEnum {
    /**
    - Represents every color value in the CMYK color space.
      */
      CMYK = 1129142603,
    /**

    - Converts all color values into high-quality black-and-white images. Gray levels in converted objects represent the original objects' luminosity.
      */
      GRAY = 1766290041,
    /**

    - Represents every color value in the RGB color space. Best suited for documents intended for on-screen viewing.
      */
      RGB = 1666336578,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
