# Indexes named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class Indexes {
    /**
    - Retrieves the Index identified by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): Index
    /**
    - Retrieves the Index matching the supplied ID.
    - @param id ID value.
      */
      itemByID(id: number): Index
    /**
    - Retrieves the Index matching the supplied name.
    - @param name Name value.
      */
      itemByName(name: string): Index
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
