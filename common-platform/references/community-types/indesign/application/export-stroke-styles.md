# Application.exportStrokeStyles

Community declaration reference: InDesign/2023.

Writes stroke styles or presets out.
@param to File used for saving.
@param strokeStyleList Stroke styles selected for saving.
@param versionComments Comment for this version.
@param forceSave Forces version saving.

```typescript
declare class Application {
    exportStrokeStyles(to: File, strokeStyleList: StrokeStyle[], versionComments: string, forceSave?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
