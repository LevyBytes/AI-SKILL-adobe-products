# ColorReductionType

Community declaration reference: Photoshop/2015.5.

Chooses the color reduction algorithm.

```typescript
declare enum ColorReductionType {
    /**
    - Samples from the color spectrum most common in the image.
      */
      ADAPTIVE = 2,
    /**

    - Uses a fixed palette of colors.
      */
      BLACKWHITE = 5,
    /**

    - Uses a color palette created or changed by the user. Opening an existing GIF or PNG-8 file gives it a custom color palette.
      */
      CUSTOM = 4,
    /**

    - Uses a fixed palette of colors.
      */
      GRAYSCALE = 6,
    /**

    - Uses a fixed palette of colors.
      */
      MACINTOSH = 7,
    /**

    - Prioritizes colors to which human vision is more sensitive.
      */
      PERCEPTUAL = 0,
    /**

    - Uses the standard 216-color table shared by Windows and Mac OS 8-bit output, also called a 256-color or web-safe palette; prevents browser dithering when the image is shown with 8-bit color.
      */
      RESTRICTIVE = 3,
    /**

    - Prioritizes broad color areas and preserving web colors; this usually gives images the strongest color integrity.
      */
      SELECTIVE = 1,
    /**

    - Uses a fixed palette of colors.
      */
      WINDOWS = 8,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
