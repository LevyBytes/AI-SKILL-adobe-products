# GraphicLayers named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class GraphicLayers {
    /**
    - Gets the GraphicLayer matching an index or name.
    - @param index Index or name.
      */
      item(index: number | string): GraphicLayer
    /**
    - Gets the GraphicLayer with the given ID.
    - @param id ID value.
      */
      itemByID(id: number): GraphicLayer
    /**
    - Gets the GraphicLayer with the given name.
    - @param name Name value.
      */
      itemByName(name: string): GraphicLayer
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
