# ExportOptionsPhotoshop

Community declaration reference: Illustrator/2022.

Configuration accepted when exporting a document as a Photoshop file..

```typescript
declare class ExportOptionsPhotoshop {
    /**
    - Whether the resulting image be antialiased.
      */
      static antiAliasing: boolean
    /**

    - For SaveMultipleArtboards=true, this value names the artboard range used in multi-asset extraction. Empty string means every artboard; Default is empty string.
      */
      static artboardRange: string
    /**

    - Exports text objects as editable text layers.
      */
      static editableText: boolean
    /**

    - Embeds an ICC profile when exporting.
      */
      static embedICCProfile: boolean
    /**

    - Color space of the exported file.
      */
      static imageColorSpace: ImageColorSpace
    /**

    - Keeps maximum possible original document structure during export.
      */
      static maximumEditability: boolean
    /**

    - Resolution of the exported file.
      */
      static resolution: number
    /**

    - Exports either all artboards or the specified artboard range.
      */
      static saveMultipleArtboards: boolean
    /**

    - Whether export-setting conflicts show a warning dialog.
      */
      static warnings: boolean
    /**

    - Preserves document layers when exporting.
      */
      static writeLayers: boolean
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
