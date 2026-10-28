# GotoStateBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class GotoStateBehaviors {
    /**
    - Retrieves an arbitrary GotoStateBehavior from the collection.
      */
      anyItem(): GotoStateBehavior
    /**
    - Retrieves all GotoStateBehavior objects in the collection.
      */
      everyItem(): GotoStateBehavior[]
    /**
    - Retrieves the first GotoStateBehavior in collection order.
      */
      firstItem(): GotoStateBehavior
    /**
    - Retrieves the final GotoStateBehavior in collection order.
      */
      lastItem(): GotoStateBehavior
    /**
    - Retrieves the collection's middle GotoStateBehavior.
      */
      middleItem(): GotoStateBehavior
    /**
    - Retrieves the GotoStateBehavior that comes immediately after the supplied GotoStateBehavior in collection order.
    - @param obj GotoStateBehavior positioned immediately before the requested GotoStateBehavior.
      */
      nextItem(obj: GotoStateBehavior): GotoStateBehavior
    /**
    - Retrieves the GotoStateBehavior immediately before the supplied index.
    - @param obj Index for the GotoStateBehavior positioned immediately after the requested GotoStateBehavior.
      */
      previousItem(obj: GotoStateBehavior): GotoStateBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
