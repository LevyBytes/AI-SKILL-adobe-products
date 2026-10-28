# MasterSpreads collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class MasterSpreads {
    /**
    - Gets any MasterSpread from the collection.
      */
      anyItem(): MasterSpread
    /**
    - Gets all MasterSpread entries in the collection.
      */
      everyItem(): MasterSpread[]
    /**
    - Gets the first MasterSpread in this collection.
      */
      firstItem(): MasterSpread
    /**
    - Gets the final MasterSpread in this collection.
      */
      lastItem(): MasterSpread
    /**
    - Gets the middle MasterSpread in this collection.
      */
      middleItem(): MasterSpread
    /**
    - Gets the MasterSpread positioned immediately after the supplied MasterSpread.
    - @param obj MasterSpread whose following neighbor is wanted.
      */
      nextItem(obj: MasterSpread): MasterSpread
    /**
    - Gets the MasterSpread positioned immediately before the supplied index.
    - @param obj Index belonging to the MasterSpread that follows the wanted one.
      */
      previousItem(obj: MasterSpread): MasterSpread
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
