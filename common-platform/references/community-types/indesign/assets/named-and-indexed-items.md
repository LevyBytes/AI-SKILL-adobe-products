# Assets named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class Assets {
    /**
    - Locates an Asset by index or name.
    - @param index Index or name value.
      */
      item(index: number | string): Asset
    /**
    - Locates an Asset by ID.
    - @param id ID value.
      */
      itemByID(id: number): Asset
    /**
    - Locates an Asset by name.
    - @param name Name value.
      */
      itemByName(name: string): Asset
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
