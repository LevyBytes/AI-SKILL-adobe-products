# RuleDataObjects collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class RuleDataObjects {
    /**
    - Gets an arbitrary RuleDataObject from the collection.
      */
      anyItem(): RuleDataObject
    /**
    - Gets all RuleDataObject objects from the collection.
      */
      everyItem(): RuleDataObject[]
    /**
    - Gets the first RuleDataObject from the collection.
      */
      firstItem(): RuleDataObject
    /**
    - Gets the last RuleDataObject from the collection.
      */
      lastItem(): RuleDataObject
    /**
    - Gets the middle RuleDataObject from the collection.
      */
      middleItem(): RuleDataObject
    /**
    - Gets the RuleDataObject positioned after the supplied RuleDataObject in the collection.
    - @param obj RuleDataObject positioned immediately before the requested RuleDataObject.
      */
      nextItem(obj: RuleDataObject): RuleDataObject
    /**
    - Gets the RuleDataObject positioned before the specified index.
    - @param obj Index for the RuleDataObject positioned after the requested RuleDataObject.
      */
      previousItem(obj: RuleDataObject): RuleDataObject
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
