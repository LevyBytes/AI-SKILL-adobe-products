# Sampling

Community declaration reference: InDesign/2023.

Resampling-method choice.

```typescript
declare enum Sampling {
    /**
    - Determines pixel color with a weighted average.
      */
      BICUBIC_DOWNSAMPLE = 1650742125,
    /**

    - Computes the average pixel color for a sample area and replaces that whole area with the result.
      */
      DOWNSAMPLE = 1684951917,
    /**

    - Performs no resampling.
      */
      NONE = 1852796517,
    /**

    - Picks the center pixel of the sample area and uses that color for the entire area.
      */
      SUBSAMPLE = 1935823725,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
