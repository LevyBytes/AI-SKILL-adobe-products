# GIFSaveOptions

Community declaration reference: Photoshop/2015.5.

Save settings for a GIF-format document.

```typescript
declare class GIFSaveOptions {
    /**
    - Palette color count. Not valid for every palette type.
      */
      colors: number
    /**

    - Dither type.
      */
      dither: Dither
    /**

    - Dither amount. Applies only when 'dither type' is diffusion. Range: 1 to 100.
      */
      ditherAmount: number
    /**

    - Color type forced into the palette.
      */
      forced: ForcedColors
    /**

    - When true, rows are interlaced.
      */
      interlaced: boolean
    /**

    - Color filling anti-aliased edges next to transparent image areas. Default: white.
      */
      matte: MatteType
    /**

    - Palette type selection.
      */
      palette: PaletteType
    /**

    - When true, image colors with color-table entries are protected from dithering. Valid only when 'dither' = diffusion.
      */
      preserveExactColors: boolean
    /**

    - When true, transparent areas are preserved during GIF conversion.
      */
      transparency: boolean
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
