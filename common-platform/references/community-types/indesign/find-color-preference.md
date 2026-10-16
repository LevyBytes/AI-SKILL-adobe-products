# FindColorPreference

Community declaration reference: InDesign/2023.

Preferences for finding colors.

```typescript
declare class FindColorPreference extends Preference {
    /**
    - Swatch color being searched for.
      */
      findWhat: Swatch | NothingEnum
    /**

    - Tint value being searched for.
      */
      tint: number | NothingEnum
    /**

    - Lower tint boundary used for searching.
      */
      tintLowerLimit: number | NothingEnum
    /**

    - Upper tint boundary used for searching.
      */
      tintUpperLimit: number | NothingEnum
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
