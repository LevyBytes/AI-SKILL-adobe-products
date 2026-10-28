# BaselineFrameGridOption

Community declaration reference: InDesign/2023.

Options for baseline frame grids.

```typescript
declare class BaselineFrameGridOption extends Preference {
    /**
    - Grid line color, supplied either as an array of three doubles with values from 0 to 255 for R, G, and B, or as a UI color.
      */
      baselineFrameGridColor: [number, number, number] | UIColors
    /**

    - Distance separating grid lines.
      */
      baselineFrameGridIncrement: number | string
    /**

    - Basis location for the custom baseline grid: top of page, top margin, top of frame, or frame inset.
      */
      baselineFrameGridRelativeOption: BaselineFrameGridRelativeOption
    /**

    - Offset amount applied to the baseline grid.
      */
      startingOffsetForBaselineFrameGrid: number | string
    /**

    - When true, a custom baseline frame grid is used.
      */
      useCustomBaselineFrameGrid: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
