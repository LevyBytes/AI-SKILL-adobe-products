# Application.exportFolioToDirectory

Community declaration reference: InDesign/2023.

Writes the selected documents into a directory.
@param destination Directory that receives the folio.
@param miniFolioList Mini folio or folios added to the folio.
@param folioMetadata Folio meta data. Can accept: Ordered array containing key:String, value:String.
@param exportFolioParams Extra folio export options. Can accept: Ordered array containing dataField:String, dataValue:Any Type.

```typescript
declare class Application {
    exportFolioToDirectory(destination: File, miniFolioList: File | File[], folioMetadata: any[], exportFolioParams: any[]): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
