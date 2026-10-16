# EPSColorSpace

Community declaration reference: InDesign/2023.

Color-space choices used when an EPS export needs color representation.

```typescript
declare enum EPSColorSpace {
    /**
    - Produces a separable output file with every color value mapped into the CYMK process-ink gamut.
      */
      CMYK = 1129142603,
    /**

    - Turns all colors into high-quality grayscale imagery, with resulting gray levels derived from source-object luminosity.
      */
      GRAY = 1766290041,
    /**

    - Applies PostScript color management, including profile handling.
      */
      POSTSCRIPT_COLOR_MANAGEMENT = 1164208483,
    /**

    - Encodes color values in RGB, which suits documents intended for screen display.
      */
      RGB = 1666336578,
    /**

    - Keeps every image in the color space it already uses.
      */
      UNCHANGED_COLOR_SPACE = 1970161251,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
