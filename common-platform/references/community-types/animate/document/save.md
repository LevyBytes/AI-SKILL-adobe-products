# Document.save

Community declaration reference: Animate/22.0.

Saves the document to its default location. This matches choosing File > Save.
To save under a different file name, use fl.saveDocument().
Note: If the file is new and unmodified or unsaved, or has not changed since its last save, this method does nothing and returns false. Use fl.saveDocumentAs() to allow saving an unsaved or unmodified file.
@returns true when saving completes successfully; otherwise false.
@param bOkToSaveAs Optional parameter. If true or omitted for a never-saved file, the Save As dialog box opens. If false for a never-saved file, no save occurs.

```typescript
declare class Document {
    save(bOkToSaveAs?: boolean): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
