# RuleDataObjects named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class RuleDataObjects {
    /**
    - Looks up a RuleDataObject by index or name.
    - @param index Index or name value.
      */
      item(index: number | string): RuleDataObject
    /**
    - Finds a RuleDataObject by ID.
    - @param id ID value.
      */
      itemByID(id: number): RuleDataObject
    /**
    - Finds a RuleDataObject by name.
    - @param name Name value.
      */
      itemByName(name: string): RuleDataObject
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
