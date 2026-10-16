# DefaultRenderingIntent

Community declaration reference: InDesign/2023.

Default rendering intent choices.

```typescript
declare enum DefaultRenderingIntent {
    /**
    - Prioritizes color accuracy over relationships between colors and fits proofing workflows that simulate a specific output device. Note: Colors within the destination gamut remain unchanged, while out-of-gamut colors are clipped.
      */
      ABSOLUTE_COLORIMETRIC = 1380540771,
    /**

    - Maintains the perceived visual relationship among colors so the result looks natural to the human eye, even if individual color values change.
      */
      PERCEPTUAL = 1380544611,
    /**

    - Compares the source color space's extreme highlight with the destination color space highlight, then shifts all colors from that comparison. Out-of-gamut colors move to the nearest reproducible destination color. Note: This retains more original image color than perceptual rendering intent.
      */
      RELATIVE_COLORIMETRIC = 1380545123,
    /**

    - Favors vivid image color, trading away some color accuracy.
      */
      SATURATION = 1380545377,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
