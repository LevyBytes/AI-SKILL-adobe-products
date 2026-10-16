# DisplaySettingOptions

Community declaration reference: InDesign/2023.

Display-performance choices.

```typescript
declare enum DisplaySettingOptions {
    /**
    - Uses the container object's default display-performance preference. For information, see default display settings.
      */
      DEFAULT_VALUE = 1147563124,
    /**

    - Slower performance; shows high-resolution graphics and high-quality transparencies, with anti-aliasing enabled.
      */
      HIGH_QUALITY = 1346922866,
    /**

    - Best performance; grays out graphics while disabling transparency and anti-aliasing.
      */
      OPTIMIZED = 1349480564,
    /**

    - Moderate performance speed; shows proxy graphics and low-quality transparencies, with anti-aliasing enabled.
      */
      TYPICAL = 1349810544,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
