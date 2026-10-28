# FootnoteFirstBaseline

Community declaration reference: InDesign/2023.

Settings for the vertical gap between the footnote container top and the first footnote text line.

```typescript
declare enum FootnoteFirstBaseline {
    /**
    - Positions the font's tallest character below the footnote container top.
      */
      ASCENT_OFFSET = 1296135023,
    /**

    - Makes uppercase letter tops meet the footnote container top.
      */
      CAP_HEIGHT = 1296255087,
    /**

    - Uses the text em box height to set the baseline-to-container-top distance.
      */
      EMBOX_HEIGHT = 1296386159,
    /**

    - Uses the footnote minimum first-baseline offset value for the baseline-to-container-top distance.
      */
      FIXED_HEIGHT = 1313228911,
    /**

    - Uses the text leading value for the baseline-to-container-top distance.
      */
      LEADING_OFFSET = 1296852079,
    /**

    - Makes tops of lowercase letters without ascenders, such as x, meet the footnote container top.
      */
      X_HEIGHT = 1299728495,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
