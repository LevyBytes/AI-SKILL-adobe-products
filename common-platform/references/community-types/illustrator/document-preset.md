# DocumentPreset

Community declaration reference: Illustrator/2022.

New-document preset used when creating a new document.

```typescript
declare class DocumentPreset {
    /**
    - Reference note: layout for artboards.
      */
      static artboardLayout: DocumentArtboardLayout
    /**

    - For artboards.Range row layouts, this is 1 to (docNumArtboards - 1), or 1 for a single-row or single-column layout; column layouts use the equivalent column count.
      */
      static artboardRowsOrCols: number
    /**

    - Distance between artboards.
      */
      static artboardSpacing: number
    /**

    - Specifies the color mode for the new document.
      */
      static colorMode: DocumentColorSpace
    /**

    - Specifies the height for the new document.
      */
      static height: number
    /**

    - Specifies: Number of artboards for new document.Range (1:100).
      */
      static numArtboards: number
    /**

    - Specifies the preview mode for the new document.
      */
      static previewMode: DocumentPreviewMode
    /**

    - Specifies the raster resolution for the new document.
      */
      static rasterResolution: DocumentRasterResolution
    /**

    - Specifies the title for the new document.
      */
      static title: string
    /**

    - Specifies the transparency grid for the new document.
      */
      static transparencyGrid: DocumentTransparencyGrid
    /**

    - Specifies the units for the new document.
      */
      static units: RulerUnits
    /**

    - Specifies the width for the new document.
      */
      static width: number
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
