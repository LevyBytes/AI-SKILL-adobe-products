# GridPrintingPreference

Community declaration reference: InDesign/2023.

Controls used when grids are printed or exported.

```typescript
declare class GridPrintingPreference extends Preference {
    /**
    - When enabled, printed or exported output includes frame (story) grids.
      */
      frameGridPrinting: boolean
    /**

    - Stroke weight, in points, used for the frame grid.
      */
      frameGridStrokeWeight: number
    /**

    - When enabled, printed or exported output includes layout grids.
      */
      layoutGridPrinting: boolean
    /**

    - Stroke weight, in points, used for the layout grid.
      */
      layoutGridStrokeWeight: number
    /**

    - When enabled, printed or exported output includes page items other than text, frame grids, and layout grids. For text and grid output details, see text printing, frame grid printing, and layout grid printing.
      */
      pageItemPrinting: boolean
    /**

    - When enabled, the printed or exported document includes text.
      */
      textPrinting: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
