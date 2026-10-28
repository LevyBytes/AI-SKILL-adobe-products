# XMLRuleProcessors named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class XMLRuleProcessors {
    /**
    - Yields the XMLRuleProcessor identified by index or name.
    - @param index Index or name to look up.
      */
      item(index: number | string): XMLRuleProcessor
    /**
    - Yields the XMLRuleProcessor identified by ID.
    - @param id ID to look up.
      */
      itemByID(id: number): XMLRuleProcessor
    /**
    - Yields the XMLRuleProcessor identified by name.
    - @param name Name to look up.
      */
      itemByName(name: string): XMLRuleProcessor
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
