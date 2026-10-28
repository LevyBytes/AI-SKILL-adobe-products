# Guides collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Guides {
    /**
    - Provides any Guide from the collection.
      */
      anyItem(): Guide
    /**
    - Provides all Guide entries in the collection.
      */
      everyItem(): Guide[]
    /**
    - Provides the collection's first Guide.
      */
      firstItem(): Guide
    /**
    - Provides the collection's final Guide.
      */
      lastItem(): Guide
    /**
    - Provides the Guide positioned in the middle of the collection.
      */
      middleItem(): Guide
    /**
    - Provides the Guide immediately after the specified Guide in collection order.
    - @param obj Guide that precedes the requested Guide.
      */
      nextItem(obj: Guide): Guide
    /**
    - Provides the Guide positioned before the specified index.
    - @param obj Index for the Guide that follows the requested Guide.
      */
      previousItem(obj: Guide): Guide
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
