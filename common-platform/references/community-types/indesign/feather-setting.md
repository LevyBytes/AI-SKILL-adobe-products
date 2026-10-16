# FeatherSetting

Community declaration reference: InDesign/2023.

Settings for feather effects.

```typescript
declare class FeatherSetting extends Preference {
    /**
    - Amount used to choke the feather, as a percentage of feather width. (Range: 0 to 100)
      */
      chokeAmount: number
    /**

    - Corner effect used by the feather.
      */
      cornerType: FeatherCornerType
    /**

    - Feather mode value.
      */
      mode: FeatherMode
    /**

    - Noise added to the feather, as a percentage. (Range: 0 to 100)
      */
      noise: number
    /**

    - Feather width. (Unit-specific limits: points 0 to 1000; picas 0 to 83p4; inches 0 to 13.8889; mm 0 to 352.778; cm 0 to 35.277; ciceros 0 to 78c2.389.)
      */
      width: number | string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
