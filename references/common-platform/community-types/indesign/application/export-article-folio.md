# Application.exportArticleFolio

Community declaration reference: InDesign/2023.

Exports the requested documents into an article folio.
Note: Return data is the difference from @method(exportMiniFolio): @method(exportMiniFolio) supplies an array of warning strings, while this method supplies an XML structure.
@param destination File-writing destination.
@param portraitDocument InDesign document used for the stack's portrait orientation.
@param landscapeDocument InDesign document used for the stack's landscape orientation.
@param folioMetadata Optional mini folio meta data. Can accept: Ordered array containing key:String, value:String.
@param miniFolioParams Mini folio export options. Can accept: Ordered array containing dataField:String, dataValue:Any Type.

```typescript
declare class Application {
    exportArticleFolio(destination: File, portraitDocument: Document, landscapeDocument: Document, folioMetadata: any[], miniFolioParams: any[]): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
