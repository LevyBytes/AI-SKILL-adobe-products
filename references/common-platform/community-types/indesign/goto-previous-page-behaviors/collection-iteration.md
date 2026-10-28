# GotoPreviousPageBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class GotoPreviousPageBehaviors {
    /**
    - Retrieves an arbitrary GotoPreviousPageBehavior from the collection.
      */
      anyItem(): GotoPreviousPageBehavior
    /**
    - Retrieves all GotoPreviousPageBehavior objects in the collection.
      */
      everyItem(): GotoPreviousPageBehavior[]
    /**
    - Retrieves the first GotoPreviousPageBehavior in collection order.
      */
      firstItem(): GotoPreviousPageBehavior
    /**
    - Retrieves the final GotoPreviousPageBehavior in collection order.
      */
      lastItem(): GotoPreviousPageBehavior
    /**
    - Retrieves the collection's middle GotoPreviousPageBehavior.
      */
      middleItem(): GotoPreviousPageBehavior
    /**
    - Retrieves the GotoPreviousPageBehavior that comes immediately after the supplied GotoPreviousPageBehavior in collection order.
    - @param obj GotoPreviousPageBehavior positioned immediately before the requested GotoPreviousPageBehavior.
      */
      nextItem(obj: GotoPreviousPageBehavior): GotoPreviousPageBehavior
    /**
    - Retrieves the GotoPreviousPageBehavior immediately before the supplied index.
    - @param obj Index for the GotoPreviousPageBehavior positioned immediately after the requested GotoPreviousPageBehavior.
      */
      previousItem(obj: GotoPreviousPageBehavior): GotoPreviousPageBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
