# Endnotes named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class Endnotes {
    /**
    - Gets an Endnote by index or name.
    - @param index Index or name identifying the item.
      */
      item(index: number | string): Endnote
    /**
    - Gets the Endnote matching the supplied ID.
    - @param id ID to look up.
      */
      itemByID(id: number): Endnote
    /**
    - Gets the Endnote matching the supplied name.
    - @param name Name to look up.
      */
      itemByName(name: string): Endnote
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
