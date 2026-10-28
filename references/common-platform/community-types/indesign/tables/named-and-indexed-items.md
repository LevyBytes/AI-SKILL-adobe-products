# Tables named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class Tables {
    /**
    - Returns the Table at the specified index or name.
    - @param index Index value or name.
      */
      item(index: number | string): Table
    /**
    - Finds a Table by ID.
    - @param id ID value.
      */
      itemByID(id: number): Table
    /**
    - Finds a Table by name.
    - @param name Name value.
      */
      itemByName(name: string): Table
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
