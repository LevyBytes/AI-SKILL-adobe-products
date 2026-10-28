# ViewZoomBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class ViewZoomBehaviors {
    /**
    - Retrieves an arbitrary ViewZoomBehavior from the collection.
      */
      anyItem(): ViewZoomBehavior
    /**
    - Retrieves all ViewZoomBehavior objects in the collection.
      */
      everyItem(): ViewZoomBehavior[]
    /**
    - Retrieves the first ViewZoomBehavior in collection order.
      */
      firstItem(): ViewZoomBehavior
    /**
    - Retrieves the final ViewZoomBehavior in collection order.
      */
      lastItem(): ViewZoomBehavior
    /**
    - Retrieves the collection's middle ViewZoomBehavior.
      */
      middleItem(): ViewZoomBehavior
    /**
    - Retrieves the ViewZoomBehavior that comes immediately after the supplied ViewZoomBehavior in collection order.
    - @param obj ViewZoomBehavior positioned immediately before the requested ViewZoomBehavior.
      */
      nextItem(obj: ViewZoomBehavior): ViewZoomBehavior
    /**
    - Resolves the ViewZoomBehavior positioned just before the supplied index.
    - @param obj The index for the ViewZoomBehavior after the one being requested.
      */
      previousItem(obj: ViewZoomBehavior): ViewZoomBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
