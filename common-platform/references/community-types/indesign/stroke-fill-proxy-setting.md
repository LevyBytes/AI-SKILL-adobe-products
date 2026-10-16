# StrokeFillProxySetting

Community declaration reference: InDesign/2023.

Stroke/fill proxy configuration.

```typescript
declare class StrokeFillProxySetting extends Preference {
    /**
    - Currently active part of the stroke/fill proxy.
      */
      active: StrokeFillProxyOptions
    /**

    - Swatch (color, gradient, tint, or mixed ink) used for the StrokeFillProxySetting fill.
      */
      fillColor: Swatch | string
    /**

    - Swatch (color, gradient, tint, or mixed ink) used for the StrokeFillProxySetting stroke.
      */
      strokeColor: Swatch | string
    /**

    - Target affected by stroke/fill proxy changes.
      */
      target: StrokeFillTargetOptions
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
