# ExportOptionsWebOptimizedSVG

Community declaration reference: Illustrator/2022.

Configuration for Web optimized SVG export from a document.

```typescript
declare class ExportOptionsWebOptimizedSVG {
    /**
    - For SaveMultipleArtboards=true, this value names the artboard range used in multi-asset extraction. Empty string means every artboard; Default is empty string.
      */
      static artboardRange: string
    /**

    - Reference note: decimal precision for element coordinate values.
      */
      static coordinatePrecision: number
    /**

    - Included in the document behavior for the CSS properties of the document.
      */
      static cssProperties: SVGCSSPropertyLocation
    /**

    - Export font-type setting.
      */
      static fontType: SVGFontType
    /**

    - Whether the raster images in the exported file be included.
      */
      static rasterImageLocation: RasterImageLocation
    /**

    - Saves either all artboards or the specified artboard range.
      */
      static saveMultipleArtboards: boolean
    /**

    - Controls exported SVG object-name (ID) generation.
      */
      static svgId: SVGIdType
    /**

    - Minifies the svg output.
      */
      static svgMinify: boolean
    /**

    - Enables responsive SVG output.
      */
      static svgResponsive: boolean
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
