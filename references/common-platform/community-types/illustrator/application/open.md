# Application.open

Community declaration reference: Illustrator/2022.

Opens the specified document file.
@param file Specifies the file to be opened.
@param documentColorSpace Color-space override for pre-Illustrator 9 documents with multiple color models.
@param options Open options for that file type.

```typescript
declare class Application {
    open(file: File, documentColorSpace?: DocumentColorSpace, options?: any): Document
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
