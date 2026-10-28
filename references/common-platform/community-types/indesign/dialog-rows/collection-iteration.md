# DialogRows collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class DialogRows {
    /**
    - Provides an arbitrary DialogRow from the collection.
      */
      anyItem(): DialogRow
    /**
    - Provides all DialogRow members held by the collection.
      */
      everyItem(): DialogRow[]
    /**
    - Gets the collection's initial DialogRow.
      */
      firstItem(): DialogRow
    /**
    - Gets the collection's final DialogRow.
      */
      lastItem(): DialogRow
    /**
    - Gets the DialogRow located at the collection midpoint.
      */
      middleItem(): DialogRow
    /**
    - Gets the DialogRow positioned after the supplied DialogRow.
    - @param obj DialogRow immediately before the one wanted.
      */
      nextItem(obj: DialogRow): DialogRow
    /**
    - Gets the DialogRow positioned before the supplied index.
    - @param obj Index for the DialogRow immediately after the one wanted.
      */
      previousItem(obj: DialogRow): DialogRow
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
