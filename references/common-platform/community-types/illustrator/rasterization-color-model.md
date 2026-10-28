# RasterizationColorModel

Community declaration reference: Illustrator/2022.

Selects the color model used during rasterization.

```typescript
declare enum RasterizationColorModel {
    /**
    - Rasterize to a 1-bit bitmap.
      */
      BITMAP = 3,
    /**

    - Rasterize using the document's default color space.
      */
      DEFAULTCOLORMODEL = 1,
    /**

    - Rasterize to a grayscale image.
      */
      GRAYSCALE = 2,
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
