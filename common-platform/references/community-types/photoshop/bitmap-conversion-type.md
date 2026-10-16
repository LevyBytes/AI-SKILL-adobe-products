# BitmapConversionType

Community declaration reference: Photoshop/2015.5.

Selects the quality mode for converting an image to bitmap mode.

```typescript
declare enum BitmapConversionType {
    /**
    - Simulates printing a grayscale image through a custom halftone screen. This option can apply an image texture, such as wood grain. A pattern must be defined before this option is used.
      */
      CUSTOMPATTERN = 5,
    /**

    - Uses a random pattern that is often less visible than pattern dither. The dither is spread through neighboring pixels. When this algorithm is chosen, provide a dither percentage to control how much dithering affects the image.
    - Visible seams can appear across slice boundaries. Linking slices spreads the dither pattern through all linked slices and removes those seams.
      */
      DIFFUSIONDITHER = 3,
    /**

    - 50% threshold conversion.
      */
      HALFTHRESHOLD = 1,
    /**

    - Converts a grayscale image to simulated halftone dots.
      */
      HALFTONESCREEN = 4,
    /**

    - Uses a square pattern similar to halftone screening to set pixel values.
      */
      PATTERNDITHER = 2,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
