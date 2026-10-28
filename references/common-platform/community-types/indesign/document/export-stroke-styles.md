# Document.exportStrokeStyles

Community declaration reference: InDesign/2023.

Writes stroke styles or presets to a file.
@param to File destination for saving.
@param strokeStyleList Stroke styles to save.
@param versionComments Comment saved with this version.
@param forceSave Force a version save.

```typescript
declare class Document {
    exportStrokeStyles(to: File, strokeStyleList: StrokeStyle[], versionComments: string, forceSave?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
