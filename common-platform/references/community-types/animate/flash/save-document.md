# Flash.saveDocument

Community declaration reference: Animate/22.0.

Saves the supplied document as a FLA document.
The method saves the file whether it is new, changed, or unchanged.
@returns Boolean result: true when the save operation completes successfully; otherwise false.
@param document Document object specifying what to save. If document is null, the active document is saved.
@param fileURI String expressed as a file:/// URI, specifying the saved document name. When fileURI is null or absent, the document keeps its current name during save. This parameter is optional.

```typescript
declare class Flash {
    saveDocument(document: Document | null, fileURI?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
