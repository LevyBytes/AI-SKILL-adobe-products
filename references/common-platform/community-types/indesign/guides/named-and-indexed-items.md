# Guides named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class Guides {
    /**
    - Finds a Guide by the supplied index or name.
    - @param index Index or name identifying the item.
      */
      item(index: number | string): Guide
    /**
    - Finds the Guide with the supplied ID.
    - @param id ID to locate.
      */
      itemByID(id: number): Guide
    /**
    - Finds the Guide identified by name.
    - @param name Name used to locate the item.
      */
      itemByName(name: string): Guide
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
