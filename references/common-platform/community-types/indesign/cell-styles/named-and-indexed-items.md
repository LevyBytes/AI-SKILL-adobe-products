# CellStyles named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class CellStyles {
    /**
    - Retrieves the CellStyle at the supplied index or name.
    - @param index Index or name to retrieve.
      */
      item(index: number | string): CellStyle
    /**
    - Retrieves the CellStyle with the supplied ID.
    - @param id ID to retrieve.
      */
      itemByID(id: number): CellStyle
    /**
    - Retrieves the CellStyle with the supplied name.
    - @param name Name to retrieve.
      */
      itemByName(name: string): CellStyle
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
