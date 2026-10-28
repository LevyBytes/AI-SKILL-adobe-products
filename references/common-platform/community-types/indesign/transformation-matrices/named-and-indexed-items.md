# TransformationMatrices named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class TransformationMatrices {
    /**
    - Finds a TransformationMatrix by the supplied index or name.
    - @param index Index or name identifying the item.
      */
      item(index: number | string): TransformationMatrix
    /**
    - Finds the TransformationMatrix identified by name.
    - @param name Name used to locate the item.
      */
      itemByName(name: string): TransformationMatrix
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
