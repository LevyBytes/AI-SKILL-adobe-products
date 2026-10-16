# ViewDisplaySettings

Community declaration reference: InDesign/2023.

Display-performance settings that trade object redraw speed against visual quality.

```typescript
declare enum ViewDisplaySettings {
    /**
    - Prioritizes quality by showing high-resolution graphics, high-quality transparency, and anti-aliasing.
      */
      HIGH_QUALITY = 1346922866,
    /**

    - Prioritizes speed by graying graphics and disabling both transparency and anti-aliasing.
      */
      OPTIMIZED = 1349480564,
    /**

    - Balances speed and quality with proxy graphics, low-quality transparency, and anti-aliasing.
      */
      TYPICAL = 1349810544,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
