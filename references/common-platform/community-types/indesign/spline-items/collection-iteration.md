# SplineItems collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class SplineItems {
    /**
    - Provides any SplineItem from the collection.
      */
      anyItem(): SplineItem
    /**
    - Provides all SplineItem entries in the collection.
      */
      everyItem(): SplineItem[]
    /**
    - Provides the collection's first SplineItem.
      */
      firstItem(): SplineItem
    /**
    - Provides the collection's final SplineItem.
      */
      lastItem(): SplineItem
    /**
    - Provides the SplineItem positioned in the middle of the collection.
      */
      middleItem(): SplineItem
    /**
    - Provides the SplineItem immediately after the specified SplineItem in collection order.
    - @param obj SplineItem that precedes the requested SplineItem.
      */
      nextItem(obj: SplineItem): SplineItem
    /**
    - Provides the SplineItem positioned before the specified index.
    - @param obj Index for the SplineItem that follows the requested SplineItem.
      */
      previousItem(obj: SplineItem): SplineItem
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
