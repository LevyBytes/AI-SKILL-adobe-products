# Cells collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Cells {
    /**
    - Provides any Cell from the collection.
      */
      anyItem(): Cell
    /**
    - Provides all Cell entries in the collection.
      */
      everyItem(): Cell[]
    /**
    - Provides the first Cell from the collection.
      */
      firstItem(): Cell
    /**
    - Provides the last Cell from the collection.
      */
      lastItem(): Cell
    /**
    - Provides the middle Cell from the collection.
      */
      middleItem(): Cell
    /**
    - Provides the Cell immediately after the supplied Cell in the collection.
    - @param obj Cell immediately before the desired Cell.
      */
      nextItem(obj: Cell): Cell
    /**
    - Provides the Cell immediately before the supplied index.
    - @param obj Index for the Cell immediately after the desired Cell.
      */
      previousItem(obj: Cell): Cell
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
