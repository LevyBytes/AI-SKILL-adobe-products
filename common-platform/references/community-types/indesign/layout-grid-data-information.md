# LayoutGridDataInformation

Community declaration reference: InDesign/2023.

Default settings specific to layout grids.

```typescript
declare class LayoutGridDataInformation extends Preference {
    /**
    - Font assigned to the LayoutGridDataInformation, supplied as a font object or font-family name.
      */
      appliedFont: Font | string
    /**

    - White-space amount between characters.
      */
      characterAki: number
    /**

    - Font style name.
      */
      fontStyle: string
    /**

    - Horizontal scaling assigned to the LayoutGridDataInformation.
      */
      horizontalScale: number
    /**

    - White-space amount between lines.
      */
      lineAki: number
    /**

    - Text size.
      */
      pointSize: number | string
    /**

    - Vertical scaling assigned to the LayoutGridDataInformation.
      */
      verticalScale: number
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
