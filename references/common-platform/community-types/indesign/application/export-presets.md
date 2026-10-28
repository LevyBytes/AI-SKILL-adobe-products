# Application.exportPresets

Community declaration reference: InDesign/2023.

Writes presets into a file.
@param format Preset format.
@param to Export target file.
@param versionComments Comments attached to this version.
@param forceSave Forces version saving.

```typescript
declare class Application {
    exportPresets(format: ExportPresetFormat, to: File, versionComments: string, forceSave?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
