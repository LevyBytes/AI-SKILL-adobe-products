# CrossReferenceFormats named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class CrossReferenceFormats {
    /**
    - Resolves a CrossReferenceFormat by index or name.
    - @param index Index or name to resolve.
      */
      item(index: number | string): CrossReferenceFormat
    /**
    - Resolves a CrossReferenceFormat by ID.
    - @param id ID to resolve.
      */
      itemByID(id: number): CrossReferenceFormat
    /**
    - Resolves a CrossReferenceFormat by name.
    - @param name Name to resolve.
      */
      itemByName(name: string): CrossReferenceFormat
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
