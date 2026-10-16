# AnimationBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class AnimationBehaviors {
    /**
    - Retrieves an arbitrary AnimationBehavior from the collection.
      */
      anyItem(): AnimationBehavior
    /**
    - Retrieves all AnimationBehavior objects in the collection.
      */
      everyItem(): AnimationBehavior[]
    /**
    - Retrieves the first AnimationBehavior in collection order.
      */
      firstItem(): AnimationBehavior
    /**
    - Retrieves the final AnimationBehavior in collection order.
      */
      lastItem(): AnimationBehavior
    /**
    - Retrieves the collection's middle AnimationBehavior.
      */
      middleItem(): AnimationBehavior
    /**
    - Retrieves the AnimationBehavior that comes immediately after the supplied AnimationBehavior in collection order.
    - @param obj AnimationBehavior positioned immediately before the requested AnimationBehavior.
      */
      nextItem(obj: AnimationBehavior): AnimationBehavior
    /**
    - Retrieves the AnimationBehavior immediately before the supplied index.
    - @param obj Index for the AnimationBehavior positioned immediately after the requested AnimationBehavior.
      */
      previousItem(obj: AnimationBehavior): AnimationBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
