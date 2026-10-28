# FirstBaseline

Community declaration reference: InDesign/2023.

Choices for where the first text baseline starts.

```typescript
declare enum FirstBaseline {
    /**
    - Uses the font tallest-character ascent below the object top inset.
      */
      ASCENT_OFFSET = 1296135023,
    /**

    - Places uppercase letter tops against the object top inset.
      */
      CAP_HEIGHT = 1296255087,
    /**

    - Measures from the text baseline to the object top inset using text em-box height.
      */
      EMBOX_HEIGHT = 1296386159,
    /**

    - Uses the minimum first baseline offset value for the text-baseline to object-top-inset distance.
      */
      FIXED_HEIGHT = 1313228911,
    /**

    - Uses text leading as the baseline-to-top-inset distance.
      */
      LEADING_OFFSET = 1296852079,
    /**

    - Places lowercase letter tops against the object top inset.
      */
      X_HEIGHT = 1299728495,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
