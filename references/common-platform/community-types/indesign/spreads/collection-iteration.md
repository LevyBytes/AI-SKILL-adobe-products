# Spreads collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Spreads {
    /**
    - Chooses any Spread from this collection.
      */
      anyItem(): Spread
    /**
    - Retrieves all Spread entries from the collection.
      */
      everyItem(): Spread[]
    /**
    - Retrieves the first Spread in the collection.
      */
      firstItem(): Spread
    /**
    - Retrieves the final Spread in the collection.
      */
      lastItem(): Spread
    /**
    - Retrieves the middle Spread in the collection.
      */
      middleItem(): Spread
    /**
    - Retrieves the Spread immediately after the supplied Spread.
    - @param obj Spread that precedes the requested one.
      */
      nextItem(obj: Spread): Spread
    /**
    - Retrieves the Spread immediately before the supplied index.
    - @param obj Index whose previous Spread is requested.
      */
      previousItem(obj: Spread): Spread
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
