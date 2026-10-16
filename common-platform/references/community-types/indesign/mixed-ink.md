# MixedInk

Community declaration reference: InDesign/2023.

MixedInk swatch object.

```typescript
declare class MixedInk extends Swatch {
    /**
    - MixedInkGroup used as the basis for this mixed ink swatch.
      */
      readonly baseColor: MixedInkGroup
    /**

    - Component Ink entries.
      */
      readonly inkList: Ink[]
    /**

    - Tint-percentage array aligned to the inks in inkList. Note: provide one value per ink.
      */
      inkPercentages: number[]
    /**

    - ColorModel assigned to the swatch.
      */
      model: ColorModel
    /**

    - ColorSpace assigned to the swatch.
      */
      space: ColorSpace
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
