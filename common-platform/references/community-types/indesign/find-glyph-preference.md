# FindGlyphPreference

Community declaration reference: InDesign/2023.

Preferences used for glyph find operations.

```typescript
declare class FindGlyphPreference extends Preference {
    /**
    - Font for FindGlyphPreference, supplied as a font object or by font-family name.
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

    - Registry Ordered font grouping.
      */
      rosFontGroup: [string, string] | NothingEnum
    /**

    - When true, Nth design axis of variable font is hidden.
    - @param nthAxisIndex Design axis index.
      */
      isNthDesignAxisHidden(nthAxisIndex: number): boolean
    /**

    - Assigns Nth design axis of a variable font.
    - @param nthAxisIndex Design axis index.
    - @param nthAxisValue Value for nth design axis.
      */
      setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
