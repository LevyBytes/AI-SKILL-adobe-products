# TOCStyles named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class TOCStyles {
    /**
    - Provides the TOCStyle selected by index or name.
    - @param index Index or name value.
      */
      item(index: number | string): TOCStyle
    /**
    - Provides the TOCStyle selected by ID.
    - @param id ID value.
      */
      itemByID(id: number): TOCStyle
    /**
    - Provides the TOCStyle selected by name.
    - @param name Name value.
      */
      itemByName(name: string): TOCStyle
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
