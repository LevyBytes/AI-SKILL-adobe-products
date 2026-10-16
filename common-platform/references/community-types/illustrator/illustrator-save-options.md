# IllustratorSaveOptions

Community declaration reference: Illustrator/2022.

Configuration accepted when saving a document as an Illustrator file..

```typescript
declare class IllustratorSaveOptions {
    /**
    - For SaveMultipleArtboards=true, this value names the artboard range used in multi-asset extraction. Empty string means every artboard; Default is empty string.
      */
      static artboardRange: string
    /**

    - Illustrator file format version to create.
      */
      static compatibility: Compatibility
    /**

    - Controls saved-file compression (version 10 or later).
      */
      static compressed: boolean
    /**

    - Saved file includes the document's ICC profile (version 9 or later).
      */
      static embedICCProfile: boolean
    /**

    - Controls linked-image inclusion in the saved document (versions 7 or later).
      */
      static embedLinkedFiles: boolean
    /**

    - Flattening choice for transparency in older file format versions (pre-version 9).
      */
      static flattenOutput: OutputFlattening
    /**

    - Subsets fonts when usage is below this character percentage (version 9 or later).
      */
      static fontSubsetThreshold: number
    /**

    - Saves with PDF compatibility (version 10 or later).
      */
      static pdfCompatible: boolean
    /**

    - Saves either all artboards or the specified artboard range.
      */
      static saveMultipleArtboards: boolean
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
