# OpenFileBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class OpenFileBehaviors {
    /**
    - Retrieves an arbitrary OpenFileBehavior from the collection.
      */
      anyItem(): OpenFileBehavior
    /**
    - Retrieves all OpenFileBehavior objects in the collection.
      */
      everyItem(): OpenFileBehavior[]
    /**
    - Retrieves the first OpenFileBehavior in collection order.
      */
      firstItem(): OpenFileBehavior
    /**
    - Retrieves the final OpenFileBehavior in collection order.
      */
      lastItem(): OpenFileBehavior
    /**
    - Retrieves the collection's middle OpenFileBehavior.
      */
      middleItem(): OpenFileBehavior
    /**
    - Retrieves the OpenFileBehavior that comes immediately after the supplied OpenFileBehavior in collection order.
    - @param obj OpenFileBehavior positioned immediately before the requested OpenFileBehavior.
      */
      nextItem(obj: OpenFileBehavior): OpenFileBehavior
    /**
    - Retrieves the OpenFileBehavior immediately before the supplied index.
    - @param obj Index for the OpenFileBehavior positioned immediately after the requested OpenFileBehavior.
      */
      previousItem(obj: OpenFileBehavior): OpenFileBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
