# ShowHideFieldsBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class ShowHideFieldsBehaviors {
    /**
    - Retrieves an arbitrary ShowHideFieldsBehavior from the collection.
      */
      anyItem(): ShowHideFieldsBehavior
    /**
    - Retrieves all ShowHideFieldsBehavior objects in the collection.
      */
      everyItem(): ShowHideFieldsBehavior[]
    /**
    - Retrieves the first ShowHideFieldsBehavior in collection order.
      */
      firstItem(): ShowHideFieldsBehavior
    /**
    - Retrieves the final ShowHideFieldsBehavior in collection order.
      */
      lastItem(): ShowHideFieldsBehavior
    /**
    - Retrieves the collection's middle ShowHideFieldsBehavior.
      */
      middleItem(): ShowHideFieldsBehavior
    /**
    - Retrieves the ShowHideFieldsBehavior that comes immediately after the supplied ShowHideFieldsBehavior in collection order.
    - @param obj ShowHideFieldsBehavior positioned immediately before the requested ShowHideFieldsBehavior.
      */
      nextItem(obj: ShowHideFieldsBehavior): ShowHideFieldsBehavior
    /**
    - Retrieves the ShowHideFieldsBehavior immediately before the supplied index.
    - @param obj Index for the ShowHideFieldsBehavior positioned immediately after the requested ShowHideFieldsBehavior.
      */
      previousItem(obj: ShowHideFieldsBehavior): ShowHideFieldsBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
