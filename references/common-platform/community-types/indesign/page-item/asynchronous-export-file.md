# PageItem.asynchronousExportFile

Community declaration reference: InDesign/2023.

Exports the object(s) to a file asynchronously.
@param format Export format, given as an enumeration value or a file extension listed by the Export dialog's Save as type or Format menu.
@param to Path of the export file.
@param showingOptions When true, the export options dialog is displayed.
@param using Export style.
@param versionComments Comment for this version.
@param forceSave When true, a version is saved forcibly.

```typescript
declare class PageItem {
    asynchronousExportFile(format: ExportFormat | string, to: File, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): BackgroundTask
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
