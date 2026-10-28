# Document.close

Community declaration reference: InDesign/2023.

Closes the Document.
@param saving Save option to use before closing the Document.
@param savingIn File destination for saving the Document.
@param versionComments Comment saved with this version.
@param forceSave Force a version save.

```typescript
declare class Document {
    close(saving?: SaveOptions, savingIn?: File, versionComments?: string, forceSave?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
