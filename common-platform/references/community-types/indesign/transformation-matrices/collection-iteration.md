# TransformationMatrices collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class TransformationMatrices {
    /**
    - Gets any TransformationMatrix from the collection.
      */
      anyItem(): TransformationMatrix
    /**
    - Provides all TransformationMatrix entries in this collection.
      */
      everyItem(): TransformationMatrix[]
    /**
    - Provides the collection's first TransformationMatrix.
      */
      firstItem(): TransformationMatrix
    /**
    - Provides the collection's final TransformationMatrix.
      */
      lastItem(): TransformationMatrix
    /**
    - Provides the TransformationMatrix positioned in the middle of the collection.
      */
      middleItem(): TransformationMatrix
    /**
    - Provides the TransformationMatrix immediately after the specified TransformationMatrix in the collection order.
    - @param obj TransformationMatrix that precedes the requested TransformationMatrix.
      */
      nextItem(obj: TransformationMatrix): TransformationMatrix
    /**
    - Provides the TransformationMatrix positioned before the specified index.
    - @param obj Index for the TransformationMatrix that follows the requested TransformationMatrix.
      */
      previousItem(obj: TransformationMatrix): TransformationMatrix
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
