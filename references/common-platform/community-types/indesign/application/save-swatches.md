# Application.saveSwatches

Community declaration reference: InDesign/2023.

Writes the selected swatch or swatches to a swatchbook file.
@param to Swatchbook file used for saving.
@param swatchList Swatch or swatches selected for saving.
@param versionComments Comment for this version.
@param forceSave true forces version saving.

```typescript
declare class Application {
    saveSwatches(to: File, swatchList: Swatch[], versionComments: string, forceSave?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
