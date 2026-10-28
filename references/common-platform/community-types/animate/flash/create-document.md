# Flash.createDocument

Community declaration reference: Animate/22.0.

Creates and selects a new document. Size, resolution, and color use the current defaults.
@returns Document object for the new document when creation succeeds. If an error occurs, the value is undefined.
@param docType Optional string specifying the requested document type. "timeline" is the sole accepted value and also the default; using it matches File > New > Flash File (ActionScript 3.0).

```typescript
declare class Flash {
    createDocument(docType?: string): Document | undefined
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
