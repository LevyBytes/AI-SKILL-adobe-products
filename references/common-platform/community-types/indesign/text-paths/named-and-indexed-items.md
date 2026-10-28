# TextPaths named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class TextPaths {
    /**
    - Finds a TextPath by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): TextPath
    /**
    - Finds a TextPath by ID.
    - @param id ID value.
      */
      itemByID(id: number): TextPath
    /**
    - Finds a TextPath by name.
    - @param name Name value.
      */
      itemByName(name: string): TextPath
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
