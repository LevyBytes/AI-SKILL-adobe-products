# Document.loadMasters

Community declaration reference: InDesign/2023.

Loads masterpages from an InDesign file.
@param from InDesign file used as the masters source.
@param globalStrategyForMasterPage Global clash resolution strategy for loading master pages.

```typescript
declare class Document {
    loadMasters(from: File, globalStrategyForMasterPage?: GlobalClashResolutionStrategyForMasterPage): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
