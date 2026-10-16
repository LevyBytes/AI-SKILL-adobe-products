# PDFColorSpace

Community declaration reference: InDesign/2023.

Color-information representation choices for exported PDF output.

```typescript
declare enum PDFColorSpace {
    /**
    - Encodes all color values in CYMK color space.
      */
      CMYK = 1129142603,
    /**

    - Converts every color value into high-quality black-and-white imagery, with gray levels reflecting source-object luminosity.
      */
      GRAY = 1766290041,
    /**

    - Repurposes CMYK colors.
      */
      REPURPOSE_CMYK = 1917013337,
    /**

    - Repurposes RGB colors.
      */
      REPURPOSE_RGB = 1917994818,
    /**

    - Encodes color values in RGB, best for documents intended to be viewed onscreen.
      */
      RGB = 1666336578,
    /**

    - Keeps every image in its original color space.
      */
      UNCHANGED_COLOR_SPACE = 1970161251,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
