# Conditions named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class Conditions {
    /**
    - Returns the Condition addressed by index or name.
    - @param index Index or name.
      */
      item(index: number | string): Condition
    /**
    - Returns the Condition addressed by ID.
    - @param id ID value.
      */
      itemByID(id: number): Condition
    /**
    - Returns the Condition addressed by name.
    - @param name Name value.
      */
      itemByName(name: string): Condition
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
