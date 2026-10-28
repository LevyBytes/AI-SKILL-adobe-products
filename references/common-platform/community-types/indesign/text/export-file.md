# Text.exportFile

Community declaration reference: InDesign/2023.

Exports the object or objects to a file.
@param format Export format supplied as an enumeration value, or as an extension shown by the Export dialog's Save as type / Format choices.
@param to Path for the exported file.
@param showingOptions When true, the export options dialog is shown.
@param using Export style to use.
@param versionComments Comment associated with this version.
@param forceSave When true, a version is saved forcibly.

```typescript
declare class Text {
    exportFile(format: ExportFormat | string, to: File, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
