# Endnotes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Endnotes {
    /**
    - Gets an arbitrary Endnote from the collection.
      */
      anyItem(): Endnote
    /**
    - Gets all Endnote objects from the collection.
      */
      everyItem(): Endnote[]
    /**
    - Gets the first Endnote in collection order.
      */
      firstItem(): Endnote
    /**
    - Gets the final Endnote in collection order.
      */
      lastItem(): Endnote
    /**
    - Gets the middle Endnote from the collection.
      */
      middleItem(): Endnote
    /**
    - Gets the Endnote immediately after the supplied Endnote in collection order.
    - @param obj Endnote positioned before the requested Endnote.
      */
      nextItem(obj: Endnote): Endnote
    /**
    - Gets the Endnote immediately before the supplied index.
    - @param obj Index of the Endnote positioned after the requested Endnote.
      */
      previousItem(obj: Endnote): Endnote
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
