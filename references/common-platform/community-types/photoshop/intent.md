# Intent

Community declaration reference: Photoshop/2015.5.

Rendering intent for color conversion.

```typescript
declare enum Intent {
    /**
    - Prioritizes color accuracy over preserving color relationships and works for proofing a simulated device output. It is especially useful when previewing how paper color influences printed color.
    - Colors already inside the destination gamut remain unchanged. Out-of-gamut colors are clipped, and colors are not scaled to the destination white point.
      */
      ABSOLUTECOLORIMETRIC = 4,
    /**

    - Gives priority to colors that the human eye perceives most strongly.
    - Useful for photographic images containing many out-of-gamut colors; it is the Japanese printing industry's standard rendering intent.
      */
      PERCEPTUAL = 1,
    /**

    - Compares the source color space's extreme highlight with the destination color space's highlight, then shifts all colors from that comparison. Out-of-gamut colors move to the nearest reproducible color in the destination color space.
    - Standard rendering intent for printing in North America and Europe.
      */
      RELATIVECOLORIMETRIC = 3,
    /**

    - Seeks vivid image colors while accepting less exact color accuracy.
    - Suitable for business graphics such as graphs or charts, where bright saturated colors matter more than exact color relationships.
      */
      SATURATION = 2,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
