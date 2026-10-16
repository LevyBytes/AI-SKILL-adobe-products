# Pages named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class Pages {
    /**
    - Retrieves a Page by index or name.
    - @param index Index or name used for lookup.
      */
      item(index: number | string): Page
    /**
    - Retrieves a Page by ID.
    - @param id ID used for lookup.
      */
      itemByID(id: number): Page
    /**
    - Retrieves a Page by name.
    - @param name Name used for lookup.
      */
      itemByName(name: string): Page
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
