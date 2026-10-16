# Flash.closeDocument

Community declaration reference: Animate/22.0.

Closes the supplied document.
@param documentObject A Document object. When documentObject is the active document, the Document window may remain open until the calling script finishes.
@param bPromptToSaveChanges Boolean value. With false, unsaved changes do not trigger a prompt; the file closes and those changes are discarded. With true, unsaved changes show the usual yes-or-no dialog. The parameter is optional, and its default value is true.

```typescript
declare class Flash {
    closeDocument(documentObject: Document, bPromptToSaveChanges?: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
