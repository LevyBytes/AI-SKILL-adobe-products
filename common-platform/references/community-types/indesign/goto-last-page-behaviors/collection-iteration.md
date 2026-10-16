# GotoLastPageBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class GotoLastPageBehaviors {
    /**
    - Retrieves an arbitrary GotoLastPageBehavior from the collection.
      */
      anyItem(): GotoLastPageBehavior
    /**
    - Retrieves all GotoLastPageBehavior objects in the collection.
      */
      everyItem(): GotoLastPageBehavior[]
    /**
    - Retrieves the first GotoLastPageBehavior in collection order.
      */
      firstItem(): GotoLastPageBehavior
    /**
    - Retrieves the final GotoLastPageBehavior in collection order.
      */
      lastItem(): GotoLastPageBehavior
    /**
    - Retrieves the collection's middle GotoLastPageBehavior.
      */
      middleItem(): GotoLastPageBehavior
    /**
    - Retrieves the GotoLastPageBehavior that comes immediately after the supplied GotoLastPageBehavior in collection order.
    - @param obj GotoLastPageBehavior positioned immediately before the requested GotoLastPageBehavior.
      */
      nextItem(obj: GotoLastPageBehavior): GotoLastPageBehavior
    /**
    - Retrieves the GotoLastPageBehavior immediately before the supplied index.
    - @param obj Index for the GotoLastPageBehavior positioned immediately after the requested GotoLastPageBehavior.
      */
      previousItem(obj: GotoLastPageBehavior): GotoLastPageBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
