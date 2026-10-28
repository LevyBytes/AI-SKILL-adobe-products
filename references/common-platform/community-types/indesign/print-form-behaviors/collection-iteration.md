# PrintFormBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class PrintFormBehaviors {
    /**
    - Selects an arbitrary PrintFormBehavior from the collection.
      */
      anyItem(): PrintFormBehavior
    /**
    - Expands the collection to all PrintFormBehavior entries.
      */
      everyItem(): PrintFormBehavior[]
    /**
    - Gets the leading PrintFormBehavior in the collection.
      */
      firstItem(): PrintFormBehavior
    /**
    - Gets the final PrintFormBehavior in the collection.
      */
      lastItem(): PrintFormBehavior
    /**
    - Gets the central PrintFormBehavior in the collection.
      */
      middleItem(): PrintFormBehavior
    /**
    - Gets the PrintFormBehavior whose index comes after the supplied PrintFormBehavior.
    - @param obj PrintFormBehavior before the desired entry.
      */
      nextItem(obj: PrintFormBehavior): PrintFormBehavior
    /**
    - Resolves the PrintFormBehavior positioned just before the supplied index.
    - @param obj Index for the PrintFormBehavior after the requested one.
      */
      previousItem(obj: PrintFormBehavior): PrintFormBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
