# StaticTexts named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class StaticTexts {
    /**
    - Finds the StaticText by index or name.
    - @param index Index or name value.
      */
      item(index: number | string): StaticText
    /**
    - Finds the StaticText by ID.
    - @param id ID value.
      */
      itemByID(id: number): StaticText
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
