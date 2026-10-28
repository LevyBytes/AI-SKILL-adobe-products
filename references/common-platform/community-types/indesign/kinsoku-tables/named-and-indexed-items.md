# KinsokuTables named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class KinsokuTables {
    /**
    - Finds a KinsokuTable by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): KinsokuTable
    /**
    - Finds a KinsokuTable by ID.
    - @param id ID value.
      */
      itemByID(id: number): KinsokuTable
    /**
    - Finds a KinsokuTable by name.
    - @param name Name value.
      */
      itemByName(name: string): KinsokuTable
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
