# ClearFormBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class ClearFormBehaviors {
    /**
    - Selects an arbitrary ClearFormBehavior from the collection.
      */
      anyItem(): ClearFormBehavior
    /**
    - Expands the collection to all ClearFormBehavior entries.
      */
      everyItem(): ClearFormBehavior[]
    /**
    - Gets the leading ClearFormBehavior in the collection.
      */
      firstItem(): ClearFormBehavior
    /**
    - Gets the final ClearFormBehavior in the collection.
      */
      lastItem(): ClearFormBehavior
    /**
    - Gets the central ClearFormBehavior in the collection.
      */
      middleItem(): ClearFormBehavior
    /**
    - Gets the ClearFormBehavior whose index comes after the supplied ClearFormBehavior.
    - @param obj ClearFormBehavior before the desired entry.
      */
      nextItem(obj: ClearFormBehavior): ClearFormBehavior
    /**
    - Resolves the ClearFormBehavior positioned just before the supplied index.
    - @param obj Index for the ClearFormBehavior after the requested one.
      */
      previousItem(obj: ClearFormBehavior): ClearFormBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
