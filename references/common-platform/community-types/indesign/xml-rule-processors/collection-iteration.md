# XMLRuleProcessors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class XMLRuleProcessors {
    /**
    - Yields an arbitrary XMLRuleProcessor from this collection.
      */
      anyItem(): XMLRuleProcessor
    /**
    - Yields all XMLRuleProcessor entries in this collection.
      */
      everyItem(): XMLRuleProcessor[]
    /**
    - Yields the leading XMLRuleProcessor in this collection.
      */
      firstItem(): XMLRuleProcessor
    /**
    - Yields the final XMLRuleProcessor in this collection.
      */
      lastItem(): XMLRuleProcessor
    /**
    - Yields the central XMLRuleProcessor in this collection.
      */
      middleItem(): XMLRuleProcessor
    /**
    - Yields the XMLRuleProcessor positioned after the supplied XMLRuleProcessor.
    - @param obj XMLRuleProcessor immediately before the requested XMLRuleProcessor.
      */
      nextItem(obj: XMLRuleProcessor): XMLRuleProcessor
    /**
    - Yields the XMLRuleProcessor positioned before the supplied index.
    - @param obj Index belonging to the XMLRuleProcessor after the requested XMLRuleProcessor.
      */
      previousItem(obj: XMLRuleProcessor): XMLRuleProcessor
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
