# EPS

Community declaration reference: InDesign/2023.

Placed EPS file.

```typescript
declare class EPS extends Graphic {
    /**
    - Native resolution for a placed graphic.
      */
      readonly actualPpi: number[]
    /**

    - Settings for the clipping path.
      */
      readonly clippingPath: ClippingPathSettings
    /**

    - Color profile policy applied to CMYK content in a placed vector.
      */
      cmykVectorPolicy: PlacedVectorProfilePolicy
    /**

    - Graphic resolution after resizing.
      */
      readonly effectivePpi: number[]
    /**

    - Color profile policy applied to grayscale content in a placed vector.
      */
      grayVectorPolicy: PlacedVectorProfilePolicy
    /**

    - Color profile policy applied to RGB content in a placed vector.
      */
      rgbVectorPolicy: PlacedVectorProfilePolicy
    /**

    - Color space value.
      */
      readonly space: string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
