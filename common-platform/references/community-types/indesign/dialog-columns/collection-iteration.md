# DialogColumns collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class DialogColumns {
    /**
    - Selects an arbitrary DialogColumn from the collection.
      */
      anyItem(): DialogColumn
    /**
    - Provides every DialogColumn in the collection.
      */
      everyItem(): DialogColumn[]
    /**
    - Provides the first DialogColumn in the collection.
      */
      firstItem(): DialogColumn
    /**
    - Provides the final DialogColumn in the collection.
      */
      lastItem(): DialogColumn
    /**
    - Provides the middle DialogColumn in the collection.
      */
      middleItem(): DialogColumn
    /**
    - Provides the DialogColumn after obj in collection order.
    - @param obj DialogColumn positioned before the requested DialogColumn.
      */
      nextItem(obj: DialogColumn): DialogColumn
    /**
    - Provides the DialogColumn before obj in collection order.
    - @param obj Index positioned after the requested DialogColumn.
      */
      previousItem(obj: DialogColumn): DialogColumn
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
