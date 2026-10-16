# Document.save

Community declaration reference: InDesign/2023.

Saves the document.
@param to Destination for saving the document. If it has already been saved, a copy is written to this path, the original closes, and the new copy opens.
@param stationery Whether to save the file as stationery.
@param versionComments Comment saved with this version.
@param forceSave Force a version save.

```typescript
declare class Document {
    save(to: File, stationery?: boolean, versionComments?: string, forceSave?: boolean): Document
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
