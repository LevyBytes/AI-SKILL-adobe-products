# StrokeOrderTypes

Community declaration reference: InDesign/2023.

Display-order choices for row and column strokes at corners.

```typescript
declare enum StrokeOrderTypes {
    /**
    - Puts row strokes above column strokes when their colors differ; also joins striped strokes and connects crossing points.
      */
      BEST_JOINS = 1935828330,
    /**

    - Displays column strokes above row strokes.
      */
      COLUMN_ON_TOP = 1935896436,
    /**

    - Puts row strokes in front when row and column colors differ; striped strokes join only where strokes meet in a T shape.
      */
      INDESIGN_2_COMPATIBILITY = 1936286819,
    /**

    - Displays row strokes above column strokes.
      */
      ROW_ON_TOP = 1936879476,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
