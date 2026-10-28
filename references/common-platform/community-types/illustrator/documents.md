# Documents

Community declaration reference: Illustrator/2022.

Collection containing Document objects.

```typescript
declare class Documents extends Array<Document> {
    /**
    - Count of items held by this collection.
      */
      readonly length: number
    /**

    - Container object for this object.
      */
      readonly parent: object
    /**

    - Class-name string for this object.
      */
      readonly typename: string
    /**

    - Creates a document.
    - @param documentColorSpace Color model applied to the document.
    - @param width Artboard width.
    - @param height Artboard height.
    - @param numArtboards Artboard count for a new document.Range (1:100).
    - @param artboardLayout Artboard layout for the new document.
    - @param artboardSpacing Gap between artboards in the new document.
    - @param artboardRowsOrCols For rows layout, row count; for column layouts, column count. Valid artboards.Range values run from 1 through (docNumArtboards - 1), with 1 used for single-row or single-column layouts.
      */
      add(
      documentColorSpace?: DocumentColorSpace,
      width?: number,
      height?: number,
      numArtboards?: number,
      artboardLayout?: DocumentArtboardLayout,
      artboardSpacing?: number,
      artboardRowsOrCols?: number,
      ): Document
    /**

    - Builds a new document from a preset.
    - @param startupPreset Startup document preset name.
    - @param presetSettings Custom settings applied to the preset.
    - @param showOptionsDialog When false, the Options dialog is not shown.
      */
      static addDocument(
      startupPreset: string,
      presetSettings?: DocumentPreset,
      showOptionsDialog?: boolean,
      ): Document
    /**

    - Builds a document from the preset and can show a dialog for present settings customization.
    - @param startupPreset Startup document preset name.
    - @param showOptionsDialog Controls whether the options Dialog appears.
      */
      static addDocumentWithDialogOption(startupPreset: string, showOptionsDialog?: boolean): Document
    /**

    - Lays out documents using the requested style.
    - @param layoutStyle Document layout style.
      */
      arrange(layoutStyle: DocumentLayoutStyle): boolean
    /**

    - Returns the first collection item that has the supplied name.
    - @param name
      */
      getByName(name: string): Document
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
