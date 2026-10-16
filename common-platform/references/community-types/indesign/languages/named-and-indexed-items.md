# Languages named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class Languages {
    /**
    - Gets a Language by index or name.
    - @param index Index or name identifying the item.
      */
      item(index: number | string): Language
    /**
    - Gets the Language matching the supplied ID.
    - @param id ID to look up.
      */
      itemByID(id: number): Language
    /**
    - Gets the Language matching the supplied name.
    - @param name Name to look up.
      */
      itemByName(name: string): Language
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
