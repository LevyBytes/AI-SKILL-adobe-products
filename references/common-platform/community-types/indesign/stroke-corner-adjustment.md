# StrokeCornerAdjustment

Community declaration reference: InDesign/2023.

Automatic dash-or-dot stroke pattern adjustment for covering path corner points.

```typescript
declare enum StrokeCornerAdjustment {
    /**
    - Alters dash lengths so dashes always appear at path ends and corners while preserving the configured gap length. Note: shapes with unequal side lengths, such as rectangles, can end up with uneven dash lengths.
      */
      DASHES = 1162113896,
    /**

    - Alters both dashes and gaps to cover corner and endpoint positions. Note: dash and gap sizes stay consistent around every side of the shape.
      */
      DASHES_AND_GAPS = 1148405616,
    /**

    - Alters gap lengths so dashes or dots always appear at ends and corners while preserving dash length or dot diameter. Note: shapes with unequal side lengths, such as rectangles, can end up with uneven gaps.
      */
      GAPS = 1164406899,
    /**

    - Makes no adjustment.
      */
      NONE = 1852796517,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
