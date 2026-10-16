# StoryGridDataInformation

Community declaration reference: InDesign/2023.

Default settings specific to frame grids.

```typescript
declare class StoryGridDataInformation extends Preference {
    /**
    - Font assigned to the StoryGridDataInformation, supplied as a font object or font-family name.
      */
      appliedFont: Font | string
    /**

    - White-space amount between characters.
      */
      characterAki: number
    /**

    - Alignment of small characters against the largest character in the line.
      */
      characterAlignment: CharacterAlignment
    /**

    - Character count location. Restriction: show character count must be true.
      */
      characterCountLocation: CharacterCountLocation
    /**

    - Character size used for the character count display.
      */
      characterCountSize: number
    /**

    - Font style name.
      */
      fontStyle: string
    /**

    - Alignment target for the frame grid or baseline grid.
      */
      gridAlignment: GridAlignment
    /**

    - Grid view setting.
      */
      gridView: GridViewSettings
    /**

    - Horizontal scaling assigned to the StoryGridDataInformation.
      */
      horizontalScale: number
    /**

    - White-space amount between lines.
      */
      lineAki: number
    /**

    - Line justification setting.
      */
      lineAlignment: LineAlignment
    /**

    - Text size.
      */
      pointSize: number | string
    /**

    - Vertical scaling assigned to the StoryGridDataInformation.
      */
      verticalScale: number
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
