# Flash.findDocumentIndex

Community declaration reference: Animate/22.0.

Returns integer positions where the document name appears in the fl.documents array. Multiple open documents can share a name when they are stored in different folders.
@returns Integer array containing positions for the document name in fl.documents.
@param name Document name whose index should be found. The document must be open.

```typescript
declare class Flash {
    findDocumentIndex(name: string): number[]
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
