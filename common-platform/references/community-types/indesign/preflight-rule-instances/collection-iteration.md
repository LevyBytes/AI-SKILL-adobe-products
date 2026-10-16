# PreflightRuleInstances collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class PreflightRuleInstances {
    /**
    - Gets an arbitrary PreflightRuleInstance from the collection.
      */
      anyItem(): PreflightRuleInstance
    /**
    - Gets all PreflightRuleInstance objects from the collection.
      */
      everyItem(): PreflightRuleInstance[]
    /**
    - Gets the first PreflightRuleInstance from the collection.
      */
      firstItem(): PreflightRuleInstance
    /**
    - Gets the last PreflightRuleInstance from the collection.
      */
      lastItem(): PreflightRuleInstance
    /**
    - Gets the middle PreflightRuleInstance from the collection.
      */
      middleItem(): PreflightRuleInstance
    /**
    - Gets the PreflightRuleInstance positioned after the supplied PreflightRuleInstance in the collection.
    - @param obj PreflightRuleInstance positioned immediately before the requested PreflightRuleInstance.
      */
      nextItem(obj: PreflightRuleInstance): PreflightRuleInstance
    /**
    - Gets the PreflightRuleInstance positioned before the specified index.
    - @param obj Index for the PreflightRuleInstance positioned after the requested PreflightRuleInstance.
      */
      previousItem(obj: PreflightRuleInstance): PreflightRuleInstance
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
