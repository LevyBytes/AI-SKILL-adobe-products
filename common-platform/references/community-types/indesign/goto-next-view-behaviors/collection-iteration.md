# GotoNextViewBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class GotoNextViewBehaviors {
    /**
    - Retrieves an arbitrary GotoNextViewBehavior from the collection.
      */
      anyItem(): GotoNextViewBehavior
    /**
    - Retrieves all GotoNextViewBehavior objects in the collection.
      */
      everyItem(): GotoNextViewBehavior[]
    /**
    - Retrieves the first GotoNextViewBehavior in collection order.
      */
      firstItem(): GotoNextViewBehavior
    /**
    - Retrieves the final GotoNextViewBehavior in collection order.
      */
      lastItem(): GotoNextViewBehavior
    /**
    - Retrieves the collection's middle GotoNextViewBehavior.
      */
      middleItem(): GotoNextViewBehavior
    /**
    - Retrieves the GotoNextViewBehavior that comes immediately after the supplied GotoNextViewBehavior in collection order.
    - @param obj GotoNextViewBehavior positioned immediately before the requested GotoNextViewBehavior.
      */
      nextItem(obj: GotoNextViewBehavior): GotoNextViewBehavior
    /**
    - Retrieves the GotoNextViewBehavior immediately before the supplied index.
    - @param obj Index for the GotoNextViewBehavior positioned immediately after the requested GotoNextViewBehavior.
      */
      previousItem(obj: GotoNextViewBehavior): GotoNextViewBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
