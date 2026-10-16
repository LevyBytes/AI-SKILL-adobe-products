# DocumentPresets named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class DocumentPresets {
    /**
    - Resolves a DocumentPreset by the specified index or name.
    - @param index Index or name to use.
      */
      item(index: number | string): DocumentPreset
    /**
    - Resolves a DocumentPreset by the specified ID.
    - @param id ID to use.
      */
      itemByID(id: number): DocumentPreset
    /**
    - Resolves a DocumentPreset by the specified name.
    - @param name Name to use.
      */
      itemByName(name: string): DocumentPreset
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
