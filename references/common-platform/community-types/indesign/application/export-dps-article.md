# Application.exportDpsArticle

Community declaration reference: InDesign/2023.

Exports the requested document into a DPS article.
Note: This call is related to @method(exportMiniFolio), with a different parameter set.
@param destination File-writing destination.
@param document Source InDesign document.
@param dpsArticleParams DPS article export options. Can accept: Ordered array containing dataField:String, dataValue:Any Type.

```typescript
declare class Application {
    exportDpsArticle(destination: File, document: Document, dpsArticleParams: any[]): string[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
