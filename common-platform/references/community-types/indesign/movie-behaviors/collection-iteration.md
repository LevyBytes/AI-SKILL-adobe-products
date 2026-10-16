# MovieBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class MovieBehaviors {
    /**
    - Retrieves an arbitrary MovieBehavior from the collection.
      */
      anyItem(): MovieBehavior
    /**
    - Retrieves all MovieBehavior objects in the collection.
      */
      everyItem(): MovieBehavior[]
    /**
    - Retrieves the first MovieBehavior in collection order.
      */
      firstItem(): MovieBehavior
    /**
    - Retrieves the final MovieBehavior in collection order.
      */
      lastItem(): MovieBehavior
    /**
    - Retrieves the collection's middle MovieBehavior.
      */
      middleItem(): MovieBehavior
    /**
    - Retrieves the MovieBehavior that comes immediately after the supplied MovieBehavior in collection order.
    - @param obj MovieBehavior positioned immediately before the requested MovieBehavior.
      */
      nextItem(obj: MovieBehavior): MovieBehavior
    /**
    - Retrieves the MovieBehavior immediately before the supplied index.
    - @param obj Index for the MovieBehavior positioned immediately after the requested MovieBehavior.
      */
      previousItem(obj: MovieBehavior): MovieBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
