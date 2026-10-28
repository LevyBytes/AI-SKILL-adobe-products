# PaletteType

Community declaration reference: Photoshop/2015.5.

Palette choice used while converting an image to indexed color.

```typescript
declare enum PaletteType {
    /**
    - Uses exactly the colors present in the RGB image, and only applies when the image has 256 or fewer colors.
    - Since the palette already contains every image color, dithering is not needed.
      */
      EXACT = 1,
    /**

    - Builds a palette from the portions of the image spectrum that occur most often.
    - For example, an RGB image containing only green and blue yields a palette composed mainly of greens and blues.
      */
      LOCALADAPTIVE = 8,
    /**

    - Builds a custom palette that prioritizes image colors to which human vision is more sensitive.
      */
      LOCALPERCEPTUAL = 6,
    /**

    - Builds a color table like the Perceptual color table, but gives preference to large color regions and preserved web colors.
    - This usually gives images the strongest color fidelity.
      */
      LOCALSELECTIVE = 7,
    /**

    - Mac OS supplies this default 8-bit palette, based on evenly sampled RGB colors.
      */
      MACOSPALETTE = 2,
    /**

    - Creates a palette by sampling the most common spectrum colors across open images that use the same color palette.
      */
      MASTERADAPTIVE = 11,
    /**

    - Creates a custom palette from open images sharing one color palette, emphasizing colors that human vision detects more readily.
      */
      MASTERPERCEPTUAL = 9,
    /**

    - Creates a color table like the Master Perceptual color table, while emphasizing broad color areas and keeping web colors.
      */
      MASTERSELECTIVE = 10,
    /**

    - Reuses the custom palette from the last conversion so multiple images can share that palette.
      */
      PREVIOUSPALETTE = 12,
    /**

    - Samples colors evenly from the RGB color cube to create the palette.
    - For example, when Photoshop chooses six evenly spaced levels for red, green, and blue, the result is a 216-color uniform palette (6 cubed = 6 x 6 x 6 = 216). The displayed color count is the nearest perfect cube (8, 27, 64, 125, or 216) below the value entered in the Colors text box.
      */
      UNIFORM = 5,
    /**

    - Web browsers on any platform use this 216-color palette for images shown on monitors limited to 256 colors.
    - It is a subset of the Mac OS 8-bit palette. Use it to avoid browser dithering on monitor displays limited to 256 colors.
      */
      WEBPALETTE = 4,
    /**

    - Windows supplies this default 8-bit palette, based on evenly sampled RGB colors.
      */
      WINDOWSPALETTE = 3,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
