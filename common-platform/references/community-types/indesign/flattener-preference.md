# FlattenerPreference

Community declaration reference: InDesign/2023.

Preferences for transparency flattening.

```typescript
declare class FlattenerPreference extends Preference {
    /**
    - When true, boundaries between vector artwork and rasterized artwork are forced onto object paths.
      */
      clipComplexRegions: boolean
    /**

    - When true, every stroke is converted to an outline, keeping stroke widths unchanged through flattening. Note: thin strokes can look slightly heavier than the original. This applies to all strokes, not just transparency-related strokes.
      */
      convertAllStrokesToOutlines: boolean
    /**

    - When true, text on spreads with transparency becomes outlines and type glyph data is discarded, preserving text stroke width during flattening. Note: small fonts can appear slightly heavier in Acrobat or on low-quality desktop printers, while high-resolution printers or imagesetters keep type quality unaffected.
      */
      convertAllTextToOutlines: boolean
    /**

    - Resolution for gradients rasterized by flattening and for printed or exported drop shadows and feathers. (Range: 0 to 1200) Note: Values above 300 ppi usually add file size and printing time without improving image quality.
      */
      gradientAndMeshResolution: number
    /**

    - Resolution used for vector objects rasterized during flattening. (Range: 1 to 9600) For details, see raster vector balance.
      */
      lineArtAndTextResolution: number
    /**

    - How much vector artwork is rasterized during flattening, given as an enumerator or a percentage from 0 to 100.
      */
      rasterVectorBalance: FlattenerLevel | number
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
