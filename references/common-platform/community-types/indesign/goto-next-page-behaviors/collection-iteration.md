# GotoNextPageBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class GotoNextPageBehaviors {
    /**
    - Retrieves an arbitrary GotoNextPageBehavior from the collection.
      */
      anyItem(): GotoNextPageBehavior
    /**
    - Retrieves all GotoNextPageBehavior objects in the collection.
      */
      everyItem(): GotoNextPageBehavior[]
    /**
    - Retrieves the first GotoNextPageBehavior in collection order.
      */
      firstItem(): GotoNextPageBehavior
    /**
    - Retrieves the final GotoNextPageBehavior in collection order.
      */
      lastItem(): GotoNextPageBehavior
    /**
    - Retrieves the collection's middle GotoNextPageBehavior.
      */
      middleItem(): GotoNextPageBehavior
    /**
    - Retrieves the GotoNextPageBehavior that comes immediately after the supplied GotoNextPageBehavior in collection order.
    - @param obj GotoNextPageBehavior positioned immediately before the requested GotoNextPageBehavior.
      */
      nextItem(obj: GotoNextPageBehavior): GotoNextPageBehavior
    /**
    - Retrieves the GotoNextPageBehavior immediately before the supplied index.
    - @param obj Index for the GotoNextPageBehavior positioned immediately after the requested GotoNextPageBehavior.
      */
      previousItem(obj: GotoNextPageBehavior): GotoNextPageBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
