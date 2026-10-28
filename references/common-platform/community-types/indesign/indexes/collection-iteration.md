# Indexes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Indexes {
    /**
    - Retrieves an arbitrary Index from this collection.
      */
      anyItem(): Index
    /**
    - Retrieves all Index entries from this collection.
      */
      everyItem(): Index[]
    /**
    - Retrieves the initial Index from this collection.
      */
      firstItem(): Index
    /**
    - Retrieves the final Index from this collection.
      */
      lastItem(): Index
    /**
    - Retrieves the center Index from this collection.
      */
      middleItem(): Index
    /**
    - Retrieves the Index immediately after the supplied Index in this collection.
    - @param obj Index positioned immediately before the target Index.
      */
      nextItem(obj: Index): Index
    /**
    - Retrieves the Index immediately before the supplied index.
    - @param obj Index belonging to the Index immediately after the target Index.
      */
      previousItem(obj: Index): Index
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
