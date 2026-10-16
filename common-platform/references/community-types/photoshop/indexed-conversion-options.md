# IndexedConversionOptions

Community declaration reference: Photoshop/2015.5.

Settings for converting an RGB image into indexed color.

```typescript
declare class IndexedConversionOptions extends DocumentConversionOptions {
    /**
    - Palette color count. Not accepted by every palette type.
      */
      colors: number
    /**

    - Dither type selection.
      */
      dither: Dither
    /**

    - Dither strength. Applies only when 'dither' = diffusion.
      */
      ditherAmount: number
    /**

    - Color-forcing mode used for the color palette.
      */
      forced: ForcedColors
    /**

    - Matte fill used along anti-aliased edges next to transparent image areas. When transparency = false, this matte color fills transparent areas.
      */
      matte: MatteType
    /**

    - Palette type selection.
      */
      palette: PaletteType
    /**

    - When true, protects image colors that have color-table entries from dither changes. Applies only when 'dither' = diffusion.
      */
      preserveExactColors: boolean
    /**

    - When true, keeps image transparency while converting to GIF format.
      */
      transparency: boolean
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
