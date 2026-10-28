# ExportOptionsTIFF

Community declaration reference: Illustrator/2022.

Configuration accepted when exporting a document as a TIFF file..

```typescript
declare class ExportOptionsTIFF {
    /**
    - Whether the resulting image be antialiased.
      */
      static antiAliasing: AntiAliasingMethod
    /**

    - For SaveMultipleArtboards=true, this value names the artboard range used in multi-asset extraction. Empty string means every artboard; Default is empty string.
      */
      static artboardRange: string
    /**

    - Reference note: mac or PC byte order when exporting.
      */
      static byteOrder: TIFFByteOrder
    /**

    - Embeds an ICC profile when exporting.
      */
      static embedICCProfile: boolean
    /**

    - Color space of the exported file.
      */
      static imageColorSpace: ImageColorSpace
    /**

    - Compresses TIFF file with LZW Compression when exporting.
      */
      static lZWCompression: boolean
    /**

    - Resolution of the exported file.
      */
      static resolution: number
    /**

    - Exports either all artboards or the specified artboard range.
      */
      static saveMultipleArtboards: boolean
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
