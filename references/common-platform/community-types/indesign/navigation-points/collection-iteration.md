# NavigationPoints collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class NavigationPoints {
    /**
    - Gets any NavigationPoint from the collection.
      */
      anyItem(): NavigationPoint
    /**
    - Gets all NavigationPoint objects in the collection.
      */
      everyItem(): NavigationPoint[]
    /**
    - Gets the first NavigationPoint in the collection.
      */
      firstItem(): NavigationPoint
    /**
    - Gets the final NavigationPoint in the collection.
      */
      lastItem(): NavigationPoint
    /**
    - Gets the middle NavigationPoint in the collection.
      */
      middleItem(): NavigationPoint
    /**
    - Gets the NavigationPoint positioned after the supplied NavigationPoint.
    - @param obj NavigationPoint positioned immediately before the desired NavigationPoint.
      */
      nextItem(obj: NavigationPoint): NavigationPoint
    /**
    - Gets the NavigationPoint whose index comes before the supplied index.
    - @param obj Index belonging to the NavigationPoint after the desired NavigationPoint.
      */
      previousItem(obj: NavigationPoint): NavigationPoint
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
