# Flash.openDocument

Community declaration reference: Animate/22.0.

A Flash document (FLA file) is opened for editing in a new Flash Document window, and that window receives focus. For a user, this has the same result as choosing File > Open and then choosing a file. If the file is already open, its containing window is brought forward and becomes the selected document.
@returns Document object for the opened document when successful. If the file cannot be found or is not valid as a FLA file, an error is reported and the script is canceled.
@param fileURI String expressed as a file:/// URI, specifying the name of the file to open.

```typescript
declare class Flash {
    openDocument(fileURI: string): Document
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
