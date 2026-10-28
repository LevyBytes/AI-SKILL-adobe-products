# GotoFirstPageBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class GotoFirstPageBehaviors {
    /**
    - Retrieves an arbitrary GotoFirstPageBehavior from the collection.
      */
      anyItem(): GotoFirstPageBehavior
    /**
    - Retrieves all GotoFirstPageBehavior objects in the collection.
      */
      everyItem(): GotoFirstPageBehavior[]
    /**
    - Retrieves the first GotoFirstPageBehavior in collection order.
      */
      firstItem(): GotoFirstPageBehavior
    /**
    - Retrieves the final GotoFirstPageBehavior in collection order.
      */
      lastItem(): GotoFirstPageBehavior
    /**
    - Retrieves the collection's middle GotoFirstPageBehavior.
      */
      middleItem(): GotoFirstPageBehavior
    /**
    - Retrieves the GotoFirstPageBehavior that comes immediately after the supplied GotoFirstPageBehavior in collection order.
    - @param obj GotoFirstPageBehavior positioned immediately before the requested GotoFirstPageBehavior.
      */
      nextItem(obj: GotoFirstPageBehavior): GotoFirstPageBehavior
    /**
    - Retrieves the GotoFirstPageBehavior immediately before the supplied index.
    - @param obj Index for the GotoFirstPageBehavior positioned immediately after the requested GotoFirstPageBehavior.
      */
      previousItem(obj: GotoFirstPageBehavior): GotoFirstPageBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
