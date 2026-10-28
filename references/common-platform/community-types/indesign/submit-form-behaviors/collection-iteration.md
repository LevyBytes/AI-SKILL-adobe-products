# SubmitFormBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class SubmitFormBehaviors {
    /**
    - Selects an arbitrary SubmitFormBehavior from the collection.
      */
      anyItem(): SubmitFormBehavior
    /**
    - Expands the collection to all SubmitFormBehavior entries.
      */
      everyItem(): SubmitFormBehavior[]
    /**
    - Gets the leading SubmitFormBehavior in the collection.
      */
      firstItem(): SubmitFormBehavior
    /**
    - Gets the final SubmitFormBehavior in the collection.
      */
      lastItem(): SubmitFormBehavior
    /**
    - Gets the central SubmitFormBehavior in the collection.
      */
      middleItem(): SubmitFormBehavior
    /**
    - Gets the SubmitFormBehavior whose index comes after the supplied SubmitFormBehavior.
    - @param obj SubmitFormBehavior before the desired entry.
      */
      nextItem(obj: SubmitFormBehavior): SubmitFormBehavior
    /**
    - Resolves the SubmitFormBehavior positioned just before the supplied index.
    - @param obj Index for the SubmitFormBehavior after the requested one.
      */
      previousItem(obj: SubmitFormBehavior): SubmitFormBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
