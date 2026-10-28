# Color

Community declaration reference: InDesign/2023.

Color swatch object.

```typescript
declare class Color extends Swatch {
    /**
    - Ink values used to define the color, given per ink as percentages. Note: the color space determines how many values are required and what limits apply. RGB uses three values, each 0 to 255; CMYK uses four values for C, M, Y, and K, each 0 to 100; LAB uses three values for L (Range: 0 to 100), A (Range: -128 to 127), and B (Range: -128 to 127); mixed ink uses one value for every ink in inkList, each 0 to 100.
      */
      colorValue: number[]
    /**

    - ColorModel assigned to the swatch.
      */
      model: ColorModel
    /**

    - ColorSpace assigned to the swatch.
      */
      space: ColorSpace
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
