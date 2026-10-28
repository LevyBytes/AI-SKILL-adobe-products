# TableStyles named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class TableStyles {
    /**
    - Gets the TableStyle matching the specified index or name.
    - @param index Index or name.
      */
      item(index: number | string): TableStyle
    /**
    - Gets the TableStyle matching the specified ID.
    - @param id ID value.
      */
      itemByID(id: number): TableStyle
    /**
    - Gets the TableStyle matching the specified name.
    - @param name Name value.
      */
      itemByName(name: string): TableStyle
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
