# GotoPreviousViewBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class GotoPreviousViewBehaviors {
    /**
    - Retrieves an arbitrary GotoPreviousViewBehavior from the collection.
      */
      anyItem(): GotoPreviousViewBehavior
    /**
    - Retrieves all GotoPreviousViewBehavior objects in the collection.
      */
      everyItem(): GotoPreviousViewBehavior[]
    /**
    - Retrieves the first GotoPreviousViewBehavior in collection order.
      */
      firstItem(): GotoPreviousViewBehavior
    /**
    - Retrieves the final GotoPreviousViewBehavior in collection order.
      */
      lastItem(): GotoPreviousViewBehavior
    /**
    - Retrieves the collection's middle GotoPreviousViewBehavior.
      */
      middleItem(): GotoPreviousViewBehavior
    /**
    - Retrieves the GotoPreviousViewBehavior that comes immediately after the supplied GotoPreviousViewBehavior in collection order.
    - @param obj GotoPreviousViewBehavior positioned immediately before the requested GotoPreviousViewBehavior.
      */
      nextItem(obj: GotoPreviousViewBehavior): GotoPreviousViewBehavior
    /**
    - Retrieves the GotoPreviousViewBehavior immediately before the supplied index.
    - @param obj Index for the GotoPreviousViewBehavior positioned immediately after the requested GotoPreviousViewBehavior.
      */
      previousItem(obj: GotoPreviousViewBehavior): GotoPreviousViewBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
