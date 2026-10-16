# PrintCoordinateOptions

Community declaration reference: Illustrator/2022.

Specifies the print coordinate options.

```typescript
declare class PrintCoordinateOptions {
    /**
    - Controls whether to flip artwork horizontally.
      */
      static emulsion: boolean
    /**

    - Toggles proportional scaling so artwork fits the page.
      */
      static fitToPage: boolean
    /**

    - Horizontal scale percentage; 100 = 100%.
      */
      static horizontalScale: number
    /**

    - Specifies the artwork orientation.
      */
      static orientation: PrintOrientation
    /**

    - Specifies the artwork position on media.
      */
      static position: PrintPosition
    /**

    - Specifies the page tiling mode.
      */
      static tiling: PrintTiling
    /**

    - Vertical scale percentage; 100 = 100%.
      */
      static verticalScale: number
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
