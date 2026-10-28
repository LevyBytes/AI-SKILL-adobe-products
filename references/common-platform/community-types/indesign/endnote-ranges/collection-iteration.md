# EndnoteRanges collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class EndnoteRanges {
    /**
    - Gets an arbitrary EndnoteRange from the collection.
      */
      anyItem(): EndnoteRange
    /**
    - Gets all EndnoteRange objects from the collection.
      */
      everyItem(): EndnoteRange[]
    /**
    - Gets the first EndnoteRange in collection order.
      */
      firstItem(): EndnoteRange
    /**
    - Gets the final EndnoteRange in collection order.
      */
      lastItem(): EndnoteRange
    /**
    - Gets the middle EndnoteRange from the collection.
      */
      middleItem(): EndnoteRange
    /**
    - Gets the EndnoteRange immediately after the supplied EndnoteRange in collection order.
    - @param obj EndnoteRange positioned before the requested EndnoteRange.
      */
      nextItem(obj: EndnoteRange): EndnoteRange
    /**
    - Gets the EndnoteRange immediately before the supplied index.
    - @param obj Index of the EndnoteRange positioned after the requested EndnoteRange.
      */
      previousItem(obj: EndnoteRange): EndnoteRange
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
