# GotoPageBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class GotoPageBehaviors {
    /**
    - Selects an arbitrary GotoPageBehavior from the collection.
      */
      anyItem(): GotoPageBehavior
    /**
    - Expands the collection to all GotoPageBehavior entries.
      */
      everyItem(): GotoPageBehavior[]
    /**
    - Gets the leading GotoPageBehavior in the collection.
      */
      firstItem(): GotoPageBehavior
    /**
    - Gets the final GotoPageBehavior in the collection.
      */
      lastItem(): GotoPageBehavior
    /**
    - Gets the central GotoPageBehavior in the collection.
      */
      middleItem(): GotoPageBehavior
    /**
    - Gets the GotoPageBehavior whose index comes after the supplied GotoPageBehavior.
    - @param obj GotoPageBehavior before the desired entry.
      */
      nextItem(obj: GotoPageBehavior): GotoPageBehavior
    /**
    - Resolves the GotoPageBehavior positioned just before the supplied index.
    - @param obj Index for the GotoPageBehavior after the requested one.
      */
      previousItem(obj: GotoPageBehavior): GotoPageBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
