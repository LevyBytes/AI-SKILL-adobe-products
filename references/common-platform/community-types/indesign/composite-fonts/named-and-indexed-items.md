# CompositeFonts named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class CompositeFonts {
    /**
    - Finds a CompositeFont by index or by name.
    - @param index Index value or name string.
      */
      item(index: number | string): CompositeFont
    /**
    - Finds a CompositeFont by ID.
    - @param id ID value.
      */
      itemByID(id: number): CompositeFont
    /**
    - Finds a CompositeFont by name.
    - @param name Name value.
      */
      itemByName(name: string): CompositeFont
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
