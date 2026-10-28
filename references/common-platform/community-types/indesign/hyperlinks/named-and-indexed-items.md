# Hyperlinks named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class Hyperlinks {
    /**
    - Gets the Hyperlink by index or name.
    - @param index Index or name to retrieve.
      */
      item(index: number | string): Hyperlink
    /**
    - Gets the Hyperlink by ID.
    - @param id ID to retrieve.
      */
      itemByID(id: number): Hyperlink
    /**
    - Gets the Hyperlink by name.
    - @param name Name to retrieve.
      */
      itemByName(name: string): Hyperlink
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
