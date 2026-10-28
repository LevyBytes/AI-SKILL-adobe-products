# PreflightRules collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class PreflightRules {
    /**
    - Gets any PreflightRule from the collection.
      */
      anyItem(): PreflightRule
    /**
    - Gets every PreflightRule in the collection.
      */
      everyItem(): PreflightRule[]
    /**
    - Gets the first PreflightRule in the collection.
      */
      firstItem(): PreflightRule
    /**
    - Gets the last PreflightRule in the collection.
      */
      lastItem(): PreflightRule
    /**
    - Gets the middle PreflightRule in the collection.
      */
      middleItem(): PreflightRule
    /**
    - Gets the collection item after the specified PreflightRule.
    - @param obj PreflightRule positioned before the desired PreflightRule.
      */
      nextItem(obj: PreflightRule): PreflightRule
    /**
    - Gets the PreflightRule before the specified index.
    - @param obj Index of the PreflightRule after the desired PreflightRule.
      */
      previousItem(obj: PreflightRule): PreflightRule
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
