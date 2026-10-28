# RasterEffectOptions

Community declaration reference: Illustrator/2022.

Specifies the document raster effects settings.

```typescript
declare class RasterEffectOptions {
    /**
    - Controls whether the resulting image is antialiased.
      */
      static antiAliasing: boolean
    /**

    - Controls whether the resulting image receives a clipping mask.
      */
      static clippingMask: boolean
    /**

    - Specifies the color model for the rasterization.
      */
      static colorModel: RasterizationColorModel
    /**

    - Toggles conversion of spot colors to process colors for the resulting image.
      */
      static convertSpotColors: boolean
    /**

    - White-space amount, in points, added around the object while rasterizing.
      */
      static padding: number
    /**

    - Specifies: The rasterization resolution in dots-per-inch (dpi)
      */
      static resolution: number
    /**

    - Controls whether the resulting image uses transparency.
      */
      static transparency: boolean
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
