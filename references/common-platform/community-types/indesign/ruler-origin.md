# RulerOrigin

Community declaration reference: InDesign/2023.

Zero-point placement choices.

```typescript
declare enum RulerOrigin {
    /**
    - Sets a separate horizontal-ruler zero point at each page top-left corner.
      */
      PAGE_ORIGIN = 1380143215,
    /**

    - Sets zero at the left-most page top-left and at the binding-spine top. The horizontal ruler measures leftmost page to binding edge, then binding spine to the right-most page edge, and the zero point is locked against manual changes.
      */
      SPINE_ORIGIN = 1380143984,
    /**

    - Sets zero at the spread top-left corner and lets ruler values continue across every spread page.
      */
      SPREAD_ORIGIN = 1380143983,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
