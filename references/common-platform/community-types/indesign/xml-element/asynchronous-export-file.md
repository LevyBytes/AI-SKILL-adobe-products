# XMLElement.asynchronousExportFile

Community declaration reference: InDesign/2023.

Exports the object(s) to a file in the background.
@param format ExportFormat value or extension listed by the Export dialog under Save as type or Format.
@param to Export file path.
@param showingOptions When true, the export options dialog is shown.
@param using Export style.
@param versionComments Comment attached to this version.
@param forceSave When true, a version is saved forcibly.

```typescript
declare class XMLElement extends XMLItem {
    asynchronousExportFile(format: ExportFormat | string, to: File, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): BackgroundTask
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
