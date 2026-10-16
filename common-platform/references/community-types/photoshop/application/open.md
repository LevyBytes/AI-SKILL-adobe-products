# Application.open

Community declaration reference: Photoshop/2015.5.

Opens the requested document file or files.
@param document Document File or Files to open.
@param as Document type; by default Photoshop infers the format.
@param asSmartObject When true, wraps the document as a smart object.

```typescript
declare class Application {
    open(document: File, as?: any, asSmartObject?: boolean): Document
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
