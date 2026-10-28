# PlacedVectorProfilePolicy

Community declaration reference: InDesign/2023.

Color profile policy choices for placed vector files (PDF or EPS).

```typescript
declare enum PlacedVectorProfilePolicy {
    /**
    - Honors every profile and output intent.
      */
      HONOR_ALL_PROFILES = 1148217441,
    /**

    - Ignores every profile and output intent.
      */
      IGNORE_ALL = 1148217697,
    /**

    - Ignores output intent while honoring calibrated spaces.
      */
      IGNORE_OUTPUT_INTENT = 1148217711,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
