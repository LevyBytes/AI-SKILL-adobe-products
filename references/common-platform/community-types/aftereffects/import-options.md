# ImportOptions

Community declaration reference: AfterEffects/26.0.

ImportOptions wraps the options used when Project.importFile imports a file.

```typescript
declare class ImportOptions {
    constructor(file?: File)
    /* File type requested for import. */
    importAs: ImportAsType
    /* True imports a file sequence instead of one file. */
    sequence: boolean
    /* True when the "Force alphabetical order" option is enabled. */
    forceAlphabetical: boolean
    /* File to import, or the first file in the sequence. */
    file: File
    /* Limits input to a specified file type. */
    canImportAs(type: ImportAsType): boolean
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
