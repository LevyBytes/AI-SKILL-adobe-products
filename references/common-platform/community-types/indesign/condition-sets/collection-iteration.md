# ConditionSets collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class ConditionSets {
    /**
    - Returns an arbitrary ConditionSet from the collection.
      */
      anyItem(): ConditionSet
    /**
    - Returns all ConditionSet entries from the collection.
      */
      everyItem(): ConditionSet[]
    /**
    - Gets the first ConditionSet from the collection.
      */
      firstItem(): ConditionSet
    /**
    - Gets the last ConditionSet from the collection.
      */
      lastItem(): ConditionSet
    /**
    - Gets the middle ConditionSet from the collection.
      */
      middleItem(): ConditionSet
    /**
    - Returns the ConditionSet immediately after the supplied ConditionSet in the collection.
    - @param obj ConditionSet whose index precedes the desired ConditionSet.
      */
      nextItem(obj: ConditionSet): ConditionSet
    /**
    - Returns the ConditionSet immediately before the supplied index.
    - @param obj Index for the ConditionSet immediately after the desired ConditionSet.
      */
      previousItem(obj: ConditionSet): ConditionSet
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
