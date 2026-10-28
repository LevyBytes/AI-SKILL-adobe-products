# ResampleMethod

Community declaration reference: Photoshop/2015.5.

Resampling method for the image.

```typescript
declare enum ResampleMethod {
    /**
    - */
      AUTOMATIC = 8,
    /**

    - Determines pixel color with a weighted average, typically improving on simple average downsampling.
    - Slowest and most precise option, producing the smoothest gradations.
      */
      BICUBIC = 4,
    /**

    - */
      BICUBICAUTOMATIC = 7,
    /**

    - Reduces image size through Bicubic interpolation with enhanced sharpening, preserving detail in the resampled image.
      */
      BICUBICSHARPER = 5,
    /**

    - Enlarges images with Bicubic interpolation while targeting smoother results.
      */
      BICUBICSMOOTHER = 6,
    /**

    - Computes the average for pixels in a sample area, then replaces that area with the average pixel color at the requested resolution. Same as average downsampling.
      */
      BILINEAR = 3,
    /**

    - Selects the center pixel in the sample area, then replaces that whole area with that pixel color. Same as subsampling.
    - Much faster than downsampling, but converted images are less smooth and continuous.
      */
      NEARESTNEIGHBOR = 2,
    /**

    - Leaves sampling unchanged.
      */
      NONE = 1,
    /**

    - */
      PRESERVEDETAILS = 9,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
