# Document.exportFile

Community declaration reference: InDesign/2023.

Exports object or objects to a file.
@param format Export format, either an enumeration value or an extension shown in the Export dialog's Save as type or Format menu.
@param to Export file path.
@param showingOptions True displays the export options dialog.
@param using Export style.
@param versionComments Comment saved with this version.
@param forceSave True forces a version save.

```typescript
declare class Document {
    exportFile(format: ExportFormat | string, to: File, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
