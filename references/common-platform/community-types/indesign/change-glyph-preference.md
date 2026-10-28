# ChangeGlyphPreference

Community declaration reference: InDesign/2023.

Preferences for changing glyphs.

```typescript
declare class ChangeGlyphPreference extends Preference {
    /**
    - Font assigned to ChangeGlyphPreference, supplied either as a font object or as the font family name.
      */
      appliedFont: Font | string | NothingEnum
    /**

    - Design Axes values.
      */
      designAxes: number[] | NothingEnum
    /**

    - Font style name.
      */
      fontStyle: string | NothingEnum
    /**

    - Glyph GID/CID value.
      */
      glyphID: number | NothingEnum
    /**

    - When true, the Nth design axis of a variable font is hidden.
    - @param nthAxisIndex Design axis index.
      */
      isNthDesignAxisHidden(nthAxisIndex: number): boolean
    /**

    - Sets the Nth design axis on a variable font.
    - @param nthAxisIndex Design axis index.
    - @param nthAxisValue Nth design axis value.
      */
      setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
