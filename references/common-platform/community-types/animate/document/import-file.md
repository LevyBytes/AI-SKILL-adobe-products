# Document.importFile

Community declaration reference: Animate/22.0.

Imports a file into a document. The operation matches Import To Library or Import To Stage. To import a publish profile, use document.importPublishProfile().
@param fileURI String as a file:/// URI giving the path of the file to import.
@param importToLibrary Boolean choosing library-only import (true) or import plus a Stage copy (false). Defaults to false.
@param showDialog Boolean choosing whether to show the Import dialog box. true shows it. false imports using specifications from the Preferences dialog. The default is true.
@param showImporterUI Boolean choosing visual error display, such as the Library Conflict dialog box. Default setting: off.

```typescript
declare class Document {
    importFile(
        fileURI: string,
        importToLibrary?: boolean,
        showDialog?: boolean,
        showImporterUI?: boolean,
        ): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
