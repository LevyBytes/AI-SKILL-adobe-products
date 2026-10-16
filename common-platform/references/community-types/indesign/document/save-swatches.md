# Document.saveSwatches

Community declaration reference: InDesign/2023.

Saves the specified swatches to a swatchbook file.
@param to Swatchbook file destination.
@param swatchList Swatches to save.
@param versionComments Comment saved with this version.
@param forceSave True forces a version save.

```typescript
declare class Document {
    saveSwatches(to: File, swatchList: Swatch[], versionComments: string, forceSave?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
