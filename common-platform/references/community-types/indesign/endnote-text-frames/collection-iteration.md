# EndnoteTextFrames collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class EndnoteTextFrames {
    /**
    - Gets an arbitrary EndnoteTextFrame from the collection.
      */
      anyItem(): EndnoteTextFrame
    /**
    - Gets all EndnoteTextFrame objects from the collection.
      */
      everyItem(): EndnoteTextFrame[]
    /**
    - Gets the first EndnoteTextFrame in collection order.
      */
      firstItem(): EndnoteTextFrame
    /**
    - Gets the final EndnoteTextFrame in collection order.
      */
      lastItem(): EndnoteTextFrame
    /**
    - Gets the middle EndnoteTextFrame from the collection.
      */
      middleItem(): EndnoteTextFrame
    /**
    - Gets the EndnoteTextFrame immediately after the supplied EndnoteTextFrame in collection order.
    - @param obj EndnoteTextFrame positioned before the requested EndnoteTextFrame.
      */
      nextItem(obj: EndnoteTextFrame): EndnoteTextFrame
    /**
    - Gets the EndnoteTextFrame immediately before the supplied index.
    - @param obj Index of the EndnoteTextFrame positioned after the requested EndnoteTextFrame.
      */
      previousItem(obj: EndnoteTextFrame): EndnoteTextFrame
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
