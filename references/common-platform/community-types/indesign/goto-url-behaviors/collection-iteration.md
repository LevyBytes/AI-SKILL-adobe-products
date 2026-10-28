# GotoURLBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class GotoURLBehaviors {
    /**
    - Retrieves an arbitrary GotoURLBehavior from the collection.
      */
      anyItem(): GotoURLBehavior
    /**
    - Retrieves all GotoURLBehavior objects in the collection.
      */
      everyItem(): GotoURLBehavior[]
    /**
    - Retrieves the first GotoURLBehavior in collection order.
      */
      firstItem(): GotoURLBehavior
    /**
    - Retrieves the final GotoURLBehavior in collection order.
      */
      lastItem(): GotoURLBehavior
    /**
    - Retrieves the collection's middle GotoURLBehavior.
      */
      middleItem(): GotoURLBehavior
    /**
    - Retrieves the GotoURLBehavior that comes immediately after the supplied GotoURLBehavior in collection order.
    - @param obj GotoURLBehavior positioned immediately before the requested GotoURLBehavior.
      */
      nextItem(obj: GotoURLBehavior): GotoURLBehavior
    /**
    - Retrieves the GotoURLBehavior immediately before the supplied index.
    - @param obj Index for the GotoURLBehavior positioned immediately after the requested GotoURLBehavior.
      */
      previousItem(obj: GotoURLBehavior): GotoURLBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
