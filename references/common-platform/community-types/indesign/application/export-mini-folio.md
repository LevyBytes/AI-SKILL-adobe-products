# Application.exportMiniFolio

Community declaration reference: InDesign/2023.

Exports the requested documents into a mini-folio.
@param destination File-writing destination.
@param portraitDocument InDesign document used for the stack's portrait orientation.
@param landscapeDocument InDesign document used for the stack's landscape orientation.
@param folioMetadata Optional mini folio meta data. Can accept: Ordered array containing key:String, value:String.
@param miniFolioParams Mini folio export options. Can accept: Ordered array containing dataField:String, dataValue:Any Type.

```typescript
declare class Application {
    exportMiniFolio(destination: File, portraitDocument: Document, landscapeDocument: Document, folioMetadata: any[], miniFolioParams: any[]): string[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
