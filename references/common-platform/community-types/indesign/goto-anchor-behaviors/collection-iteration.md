# GotoAnchorBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class GotoAnchorBehaviors {
    /**
    - Selects an arbitrary GotoAnchorBehavior from the collection.
      */
      anyItem(): GotoAnchorBehavior
    /**
    - Expands the collection to all GotoAnchorBehavior entries.
      */
      everyItem(): GotoAnchorBehavior[]
    /**
    - Gets the leading GotoAnchorBehavior in the collection.
      */
      firstItem(): GotoAnchorBehavior
    /**
    - Gets the final GotoAnchorBehavior in the collection.
      */
      lastItem(): GotoAnchorBehavior
    /**
    - Gets the central GotoAnchorBehavior in the collection.
      */
      middleItem(): GotoAnchorBehavior
    /**
    - Gets the GotoAnchorBehavior whose index comes after the supplied GotoAnchorBehavior.
    - @param obj GotoAnchorBehavior before the desired entry.
      */
      nextItem(obj: GotoAnchorBehavior): GotoAnchorBehavior
    /**
    - Resolves the GotoAnchorBehavior positioned just before the supplied index.
    - @param obj Index for the GotoAnchorBehavior after the requested one.
      */
      previousItem(obj: GotoAnchorBehavior): GotoAnchorBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
