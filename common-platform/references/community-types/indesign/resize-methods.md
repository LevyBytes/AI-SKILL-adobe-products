# ResizeMethods

Community declaration reference: InDesign/2023.

Resize-method choices.

```typescript
declare enum ResizeMethods {
    /**
    - Adds extra width and height to the current values
      */
      ADDING_CURRENT_DIMENSIONS_TO = 1215264592,
    /**

    - Multiplies the current width and height by the supplied factors
      */
      MULTIPLYING_CURRENT_DIMENSIONS_BY = 1215264589,
    /**

    - Replaces the current width and height values
      */
      REPLACING_CURRENT_DIMENSIONS_WITH = 1215264581,
    /**

    - Changes the width-to-height ratio while keeping the current area
      */
      RESHAPING_AREA_TO_RATIO = 1215264577,
    /**

    - Changes the width-to-height ratio while keeping the current perimeter
      */
      RESHAPING_BORDER_TO_RATIO = 1215264595,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
