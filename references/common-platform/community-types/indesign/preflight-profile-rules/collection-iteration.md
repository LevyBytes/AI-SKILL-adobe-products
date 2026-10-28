# PreflightProfileRules collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class PreflightProfileRules {
    /**
    - Gets an arbitrary PreflightProfileRule from the collection.
      */
      anyItem(): PreflightProfileRule
    /**
    - Gets all PreflightProfileRule objects from the collection.
      */
      everyItem(): PreflightProfileRule[]
    /**
    - Gets the first PreflightProfileRule from the collection.
      */
      firstItem(): PreflightProfileRule
    /**
    - Gets the last PreflightProfileRule from the collection.
      */
      lastItem(): PreflightProfileRule
    /**
    - Gets the middle PreflightProfileRule from the collection.
      */
      middleItem(): PreflightProfileRule
    /**
    - Gets the PreflightProfileRule positioned after the supplied PreflightProfileRule in the collection.
    - @param obj PreflightProfileRule positioned immediately before the requested PreflightProfileRule.
      */
      nextItem(obj: PreflightProfileRule): PreflightProfileRule
    /**
    - Gets the PreflightProfileRule positioned before the specified index.
    - @param obj Index for the PreflightProfileRule positioned after the requested PreflightProfileRule.
      */
      previousItem(obj: PreflightProfileRule): PreflightProfileRule
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
