# EPSSaveOptions

Community declaration reference: Illustrator/2022.

Configuration accepted when saving a document as an Illustrator EPS file..

```typescript
declare class EPSSaveOptions {
    /**
    - For SaveMultipleArtboards=true, this value names the artboard range used in multi-asset extraction. Empty string means every artboard; Default is empty string.
      */
      static artboardRange: string
    /**

    - Uses CMYK PostScript.
      */
      static cmykPostScript: boolean
    /**

    - Illustrator file format version to create.
      */
      static compatibility: Compatibility
    /**

    - Rasterizes a gradient or gradient mesh so a PostScript Level 2 printer can output it.
      */
      static compatibleGradientPrinting: boolean
    /**

    - Saved file embeds every document font (version 7 or later).
      */
      static embedAllFonts: boolean
    /**

    - Controls linked-image inclusion in the saved document.
      */
      static embedLinkedFiles: boolean
    /**

    - Flattening choice for transparency in older file format versions (pre-version 9).
      */
      static flattenOutput: OutputFlattening
    /**

    - Includes thumbnail image of the EPS artwork.
      */
      static includeDocumentThumbnails: boolean
    /**

    - */
      static overprint: PDFOverprint
    /**

    - Selected PostScript level; level 1 applies to file format version 8 or older.
      */
      static postScript: EPSPostScriptLevelEnum
    /**

    - Reference note: ePS preview format.
      */
      static preview: EPSPreview
    /**

    - Saves either all artboards or the specified artboard range.
      */
      static saveMultipleArtboards: boolean
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
