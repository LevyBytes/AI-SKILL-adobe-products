# RenderingIntent

Community declaration reference: InDesign/2023.

Rendering intent choices.

```typescript
declare enum RenderingIntent {
    /**
    - Keeps color values accurate rather than preserving color relationships; useful for checking how paper color affects printed output.
      */
      ABSOLUTE_COLORIMETRIC = 1380540771,
    /**

    - Keeps the visual relationships among colors while sacrificing exact color values; best for photographs with high out-of-gamut percentages.
      */
      PERCEPTUAL = 1380544611,
    /**

    - Matches the source color space highlight against the destination highlight, then shifts all colors; colors outside gamut move to the nearest reproducible destination color.
      */
      RELATIVE_COLORIMETRIC = 1380545123,
    /**

    - Favors vivid color over accuracy; best for business graphics such as graphs or charts.
      */
      SATURATION = 1380545377,
    /**

    - Applies the active color settings.
      */
      USE_COLOR_SETTINGS = 1380541299,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
