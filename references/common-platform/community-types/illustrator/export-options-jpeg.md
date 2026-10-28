# ExportOptionsJPEG

Community declaration reference: Illustrator/2022.

Configuration accepted when exporting a document as a JPEG file..

```typescript
declare class ExportOptionsJPEG {
    /**
    - Whether the resulting image be antialiased.
      */
      static antiAliasing: boolean
    /**

    - Whether the resulting image be clipped to the artboard.
      */
      static artBoardClipping: boolean
    /**

    - Reference note: blur the resulting image this much.
      */
      static blurAmount: number
    /**

    - Reference note: horizontal scaling factor.
      */
      static horizontalScale: number
    /**

    - Whether the artboard be matted with a color.
      */
      static matte: boolean
    /**

    - Matte color for the artboard (default: white).
      */
      static matteColor: RGBColor
    /**

    - Whether the image be optimized for web viewing.
      */
      static optimization: boolean
    /**

    - Reference note: quality of resulting image.
      */
      static qualitySetting: number
    /**

    - Whether the resulting image be saved as HTML.
      */
      static saveAsHTML: boolean
    /**

    - Reference note: vertical scaling factor.
      */
      static verticalScale: number
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
