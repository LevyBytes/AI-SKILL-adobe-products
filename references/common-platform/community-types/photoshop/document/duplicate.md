# Document.duplicate

Community declaration reference: Photoshop/2015.5.

Builds a second Document from this one.
@param name Name for the new Document.
@param mergeLayersOnly When true, only merged layers are duplicated.

```typescript
declare class Document {
    duplicate(name?: string, mergeLayersOnly?: boolean): Document
}
```

Creates another instance.
@param relativeObject
@param insertionLocation

```typescript
declare class Document {
    duplicate(relativeObject: object, insertionLocation: ElementPlacement): Document
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
