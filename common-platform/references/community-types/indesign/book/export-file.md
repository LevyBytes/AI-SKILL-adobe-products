# Book.exportFile

Community declaration reference: InDesign/2023.

Writes the book out to a file.
@param format Export format, supplied either as an enumeration value or as an extension shown in the Save as type or Format menu of the Export dialog.
@param to Destination file for the exported book.
@param showingOptions Specifies whether the PDF Export Options Dialog should be shown.
@param using Specifies export presets; this may be a preset-type object, an enumeration for existing or user-defined presets, or a string naming the preset. When Showing Options is true, the preset chosen in the Export Dialog overrides this parameter.
@param whichDocuments Specifies book content references from the current book; the list may include duplicates, and omitting it exports the entire book contents.
@param versionComments Comment attached to this version.
@param forceSave When true, saves a version forcibly.

```typescript
declare class Book {
    exportFile(format: ExportFormat | string, to: File, showingOptions?: boolean, using?: PDFExportPreset, whichDocuments?: BookContent[], versionComments?: string, forceSave?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
