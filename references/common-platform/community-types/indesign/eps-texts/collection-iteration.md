# EPSTexts collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class EPSTexts {
    /**
    - Provides any EPSText from the collection.
      */
      anyItem(): EPSText
    /**
    - Provides all EPSText entries in the collection.
      */
      everyItem(): EPSText[]
    /**
    - Provides the collection's first EPSText.
      */
      firstItem(): EPSText
    /**
    - Provides the collection's final EPSText.
      */
      lastItem(): EPSText
    /**
    - Provides the EPSText positioned in the middle of the collection.
      */
      middleItem(): EPSText
    /**
    - Provides the EPSText immediately after the specified EPSText in collection order.
    - @param obj EPSText that precedes the requested EPSText.
      */
      nextItem(obj: EPSText): EPSText
    /**
    - Provides the EPSText positioned before the specified index.
    - @param obj Index for the EPSText that follows the requested EPSText.
      */
      previousItem(obj: EPSText): EPSText
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
