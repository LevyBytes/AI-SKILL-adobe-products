# Tints named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class Tints {
    /**
    - Finds a Tint by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): Tint
    /**
    - Finds the Tint associated with the supplied ID.
    - @param id ID selector.
      */
      itemByID(id: number): Tint
    /**
    - Finds the Tint associated with the supplied name.
    - @param name Name selector.
      */
      itemByName(name: string): Tint
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
