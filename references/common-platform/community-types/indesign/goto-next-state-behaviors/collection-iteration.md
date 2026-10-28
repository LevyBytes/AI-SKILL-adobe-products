# GotoNextStateBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class GotoNextStateBehaviors {
    /**
    - Retrieves an arbitrary GotoNextStateBehavior from the collection.
      */
      anyItem(): GotoNextStateBehavior
    /**
    - Retrieves all GotoNextStateBehavior objects in the collection.
      */
      everyItem(): GotoNextStateBehavior[]
    /**
    - Retrieves the first GotoNextStateBehavior in collection order.
      */
      firstItem(): GotoNextStateBehavior
    /**
    - Retrieves the final GotoNextStateBehavior in collection order.
      */
      lastItem(): GotoNextStateBehavior
    /**
    - Retrieves the collection's middle GotoNextStateBehavior.
      */
      middleItem(): GotoNextStateBehavior
    /**
    - Retrieves the GotoNextStateBehavior that comes immediately after the supplied GotoNextStateBehavior in collection order.
    - @param obj GotoNextStateBehavior positioned immediately before the requested GotoNextStateBehavior.
      */
      nextItem(obj: GotoNextStateBehavior): GotoNextStateBehavior
    /**
    - Retrieves the GotoNextStateBehavior immediately before the supplied index.
    - @param obj Index for the GotoNextStateBehavior positioned immediately after the requested GotoNextStateBehavior.
      */
      previousItem(obj: GotoNextStateBehavior): GotoNextStateBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
