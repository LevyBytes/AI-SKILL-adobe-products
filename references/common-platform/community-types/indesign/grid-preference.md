# GridPreference

Community declaration reference: InDesign/2023.

Preferences for grids.

```typescript
declare class GridPreference extends Preference {
    /**
    - Color for the baseline grid; supply a UI color or an R, G, and B array of three doubles, each in the range 0 to 255.
      */
      baselineColor: [number, number, number] | UIColors
    /**

    - Spacing amount between baseline grid lines.
      */
      baselineDivision: number | string
    /**

    - Zero point used for the baseline grid offset.
      */
      baselineGridRelativeOption: BaselineGridRelativeOption
    /**

    - When true, the baseline grid is shown.
      */
      baselineGridShown: boolean
    /**

    - Offset amount for the baseline grid from the zero point.
      */
      baselineStart: number | string
    /**

    - Magnification percentage below which ruler guides are hidden. (Range: 5 to 4000)
      */
      baselineViewThreshold: number
    /**

    - When true, the document grid is shown.
      */
      documentGridShown: boolean
    /**

    - When true, created, moved, or resized objects snap to the closest grid line.
      */
      documentGridSnapto: boolean
    /**

    - Color for the document grid; supply a UI color or an R, G, and B array of three doubles, each in the range 0 to 255.
      */
      gridColor: [number, number, number] | UIColors
    /**

    - When true, grids sit behind every other object on the spread.
      */
      gridsInBack: boolean
    /**

    - Number of rows used to subdivide space between horizontal document-grid lines.
      */
      horizontalGridSubdivision: number
    /**

    - Spacing amount between major horizontal lines in the document grid.
      */
      horizontalGridlineDivision: number | string
    /**

    - Number of columns used to subdivide space between vertical document-grid lines.
      */
      verticalGridSubdivision: number
    /**

    - Spacing amount between major vertical lines in the document grid.
      */
      verticalGridlineDivision: number | string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
