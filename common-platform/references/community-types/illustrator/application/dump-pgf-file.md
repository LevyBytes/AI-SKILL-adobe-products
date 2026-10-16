# Application.dumpPGFFile

Community declaration reference: Illustrator/2022.

Dumps the PGF portion of ai file to txt file.
@param file Specifies the AI file to be opened.
@param documentColorSpace Color-space override for pre-Illustrator 9 documents with multiple color models.
@param pGFFile Destination folder for the output PGF file.

```typescript
declare class Application {
    dumpPGFFile(file: File, documentColorSpace?: DocumentColorSpace, pGFFile?: File): boolean
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
