# Flash.revertDocument

Community declaration reference: Animate/22.0.

Restores the supplied FLA document to its most recently saved state. Unlike the File > Revert menu command, this method does not open a confirmation warning. See also document.revert() and document.canRevert().
@returns Boolean result: true when Revert completes successfully; otherwise false.
@param documentObject A Document object. When documentObject is the active document, the Document window may not revert until the calling script finishes.

```typescript
declare class Flash {
    revertDocument(documentObject: Document): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
