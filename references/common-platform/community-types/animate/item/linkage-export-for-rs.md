# Item.linkageExportForRS

Community declaration reference: Animate/22.0.

Boolean flag; true exports the item for run-time sharing. item.linkageExportForAS and item.linkageExportInFirstFrame can also be set to true.
When this property is true, item.linkageImportForRS must be false, and both item.linkageIdentifier and item.linkageURL must be specified.

```typescript
declare class Item {
    linkageExportForRS: boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
