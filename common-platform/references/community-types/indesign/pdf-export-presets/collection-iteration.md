# PDFExportPresets collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class PDFExportPresets {
    /**
    - Gets an arbitrary PDFExportPreset from the collection.
      */
      anyItem(): PDFExportPreset
    /**
    - Gets all PDFExportPreset objects in the collection.
      */
      everyItem(): PDFExportPreset[]
    /**
    - Gets the collection's first PDFExportPreset.
      */
      firstItem(): PDFExportPreset
    /**
    - Gets the collection's last PDFExportPreset.
      */
      lastItem(): PDFExportPreset
    /**
    - Gets the PDFExportPreset positioned in the middle of the collection.
      */
      middleItem(): PDFExportPreset
    /**
    - Gets the PDFExportPreset positioned after the supplied PDFExportPreset.
    - @param obj PDFExportPreset positioned before the wanted PDFExportPreset.
      */
      nextItem(obj: PDFExportPreset): PDFExportPreset
    /**
    - Gets the PDFExportPreset positioned before the supplied index.
    - @param obj Index of the PDFExportPreset positioned after the wanted PDFExportPreset.
      */
      previousItem(obj: PDFExportPreset): PDFExportPreset
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
