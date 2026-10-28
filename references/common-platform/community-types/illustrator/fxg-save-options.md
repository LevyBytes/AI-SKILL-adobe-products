# FXGSaveOptions

Community declaration reference: Illustrator/2022.

Configuration accepted when saving a document as an FXG file..

```typescript
declare class FXGSaveOptions {
    /**
    - For SaveMultipleArtboards=true, this value names the artboard range used in multi-asset extraction. Empty string means every artboard; Default is empty string.
      */
      static artboardRange: string
    /**

    - Policy used by FXG to expand blends.
      */
      static blendsPolicy: BlendsExpandPolicy
    /**

    - Controls whether to downsample the linked images(72ppi).
      */
      static downsampleLinkedImages: boolean
    /**

    - Policy used by FXG to preserve filters.
      */
      static filtersPolicy: FiltersPreservePolicy
    /**

    - Policy used by FXG to preserve gradients.
      */
      static gradientsPolicy: GradientsPreservePolicy
    /**

    - Controls whether to include metadata (XMP).
      */
      static includeMetadata: boolean
    /**

    - Controls whether to include unused symbols.
      */
      static includeUnusedSymbols: boolean
    /**

    - Controls whether to preserve the editing capabilities of FXG.
      */
      static preserveEditingCapabilities: boolean
    /**

    - Saves either all artboards or the specified artboard range.
      */
      static saveMultipleArtboards: boolean
    /**

    - Policy used by FXG to preserve text.
      */
      static textPolicy: TextPreservePolicy
    /**

    - Version of the FXG file format to create.
      */
      static version: FXGVersion
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
