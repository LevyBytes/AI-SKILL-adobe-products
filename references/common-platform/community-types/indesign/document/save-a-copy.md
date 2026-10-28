# Document.saveACopy

Community declaration reference: InDesign/2023.

Saves a copy of the document.
@param to File path for the copy. Note: the original document remains open and the copy is not opened.
@param stationery True writes a stationery file on Mac OS or a template file on Windows. Note: those formats use extensions that differ from regular files.

```typescript
declare class Document {
    saveACopy(to: File, stationery?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
