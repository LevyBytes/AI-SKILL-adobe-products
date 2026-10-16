# ExportOptionsGIF

Community declaration reference: Illustrator/2022.

Configuration accepted when exporting a document as a GIF file..

```typescript
declare class ExportOptionsGIF {
    /**
    - Whether the resulting image be antialiased.
      */
      static antiAliasing: boolean
    /**

    - Whether the resulting image be clipped to the artboard.
      */
      static artBoardClipping: boolean
    /**

    - Reference note: number of colors in exported color table.
      */
      static colorCount: number
    /**

    - Reference note: method used to dither colors.
      */
      static colorDither: ColorDitherMethod
    /**

    - Reference note: method used to reduce the number of colors.
      */
      static colorReduction: ColorReductionMethod
    /**

    - Amount the colors are dithered.
      */
      static ditherPercent: number
    /**

    - Reference note: horizontal scaling factor.
      */
      static horizontalScale: number
    /**

    - Reference note: level of information loss during compression.
      */
      static infoLossPercent: number
    /**

    - Whether the resulting image be interlaced.
      */
      static interlaced: boolean
    /**

    - Whether the artboard be matted with a color.
      */
      static matte: boolean
    /**

    - Matte color for the artboard (default: white).
      */
      static matteColor: RGBColor
    /**

    - Whether the resulting image be saved as HTML.
      */
      static saveAsHTML: boolean
    /**

    - Whether the resulting image use transparency.
      */
      static transparency: boolean
    /**

    - Reference note: vertical scaling factor.
      */
      static verticalScale: number
    /**

    - Amount the color table are changed to match the web pallet.
      */
      static webSnap: number
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
