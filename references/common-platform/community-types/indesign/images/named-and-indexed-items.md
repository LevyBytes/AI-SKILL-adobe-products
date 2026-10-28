# Images named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class Images {
    /**
    - Gets the Image selected by the specified index or name.
    - @param index Index or name value.
      */
      item(index: number | string): Image
    /**
    - Gets the Image identified by the specified ID.
    - @param id ID value.
      */
      itemByID(id: number): Image
    /**
    - Gets the Image identified by the specified name.
    - @param name Name value.
      */
      itemByName(name: string): Image
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
