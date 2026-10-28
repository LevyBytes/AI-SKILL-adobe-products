# XMLElements named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class XMLElements {
    /**
    - Fetches an XMLElement by supplied index or name.
    - @param index Index or name.
      */
      item(index: number | string): XMLElement
    /**
    - Fetches an XMLElement by its provided ID.
    - @param id ID value.
      */
      itemByID(id: number): XMLElement
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
