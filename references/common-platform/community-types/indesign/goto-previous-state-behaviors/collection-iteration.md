# GotoPreviousStateBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class GotoPreviousStateBehaviors {
    /**
    - Retrieves an arbitrary GotoPreviousStateBehavior from the collection.
      */
      anyItem(): GotoPreviousStateBehavior
    /**
    - Retrieves all GotoPreviousStateBehavior objects in the collection.
      */
      everyItem(): GotoPreviousStateBehavior[]
    /**
    - Retrieves the first GotoPreviousStateBehavior in collection order.
      */
      firstItem(): GotoPreviousStateBehavior
    /**
    - Retrieves the final GotoPreviousStateBehavior in collection order.
      */
      lastItem(): GotoPreviousStateBehavior
    /**
    - Retrieves the collection's middle GotoPreviousStateBehavior.
      */
      middleItem(): GotoPreviousStateBehavior
    /**
    - Retrieves the GotoPreviousStateBehavior that comes immediately after the supplied GotoPreviousStateBehavior in collection order.
    - @param obj GotoPreviousStateBehavior positioned immediately before the requested GotoPreviousStateBehavior.
      */
      nextItem(obj: GotoPreviousStateBehavior): GotoPreviousStateBehavior
    /**
    - Retrieves the GotoPreviousStateBehavior immediately before the supplied index.
    - @param obj Index for the GotoPreviousStateBehavior positioned immediately after the requested GotoPreviousStateBehavior.
      */
      previousItem(obj: GotoPreviousStateBehavior): GotoPreviousStateBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
