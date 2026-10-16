# CjkGridPreference

Community declaration reference: InDesign/2023.

Preferences for character grids.

```typescript
declare class CjkGridPreference extends Preference {
    /**
    - Applies grid color to every nth cell, with n provided by this property.
      */
      colorEveryNthCell: number
    /**

    - When true, grid cells use ICF mode. When false, virtual body mode is used.
      */
      icfMode: boolean
    /**

    - Layout grid color, supplied either as an array of three doubles with values from 0 to 255 for R, G, and B, or as a UI color.
      */
      layoutGridColorIndex: [number, number, number] | UIColors
    /**

    - View magnification percentage below which grids are hidden. (Range: 5 to 4000)
      */
      minimumScale: number
    /**

    - When true, frame (story) grids are shown.
      */
      showAllFrameGrids: boolean
    /**

    - When true, layout grids are shown.
      */
      showAllLayoutGrids: boolean
    /**

    - When true, the frame shows its character total.
      */
      showCharacterCount: boolean
    /**

    - True starts grid coloring from the line edge; false starts it from the frame corner.
      */
      singleLineColorMode: boolean
    /**

    - With this enabled, objects align by snapping onto the layout grid.
      */
      snapToLayoutGrid: boolean
    /**

    - True selects circular cells; false uses rectangular cells instead.
      */
      useCircularCells: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
