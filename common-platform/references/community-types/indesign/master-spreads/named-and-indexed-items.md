# MasterSpreads named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class MasterSpreads {
    /**
    - Gets the MasterSpread by index or by name.
    - @param index Index or name to resolve.
      */
      item(index: number | string): MasterSpread
    /**
    - Gets the MasterSpread with the given ID.
    - @param id ID to resolve.
      */
      itemByID(id: number): MasterSpread
    /**
    - Gets the MasterSpread with the given name.
    - @param name Name to resolve.
      */
      itemByName(name: string): MasterSpread
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
