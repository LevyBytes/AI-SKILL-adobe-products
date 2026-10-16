# Links collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Links {
    /**
    - Supplies any Link from this collection.
      */
      anyItem(): Link
    /**
    - Supplies all Link entries from the collection.
      */
      everyItem(): Link[]
    /**
    - Supplies the collection's initial Link.
      */
      firstItem(): Link
    /**
    - Supplies the final Link in the collection.
      */
      lastItem(): Link
    /**
    - Supplies the central Link in the collection.
      */
      middleItem(): Link
    /**
    - Gets the Link positioned after the given Link.
    - @param obj Link immediately before the desired one.
      */
      nextItem(obj: Link): Link
    /**
    - Gets the Link positioned before the given index.
    - @param obj Index of the Link that comes after the desired one.
      */
      previousItem(obj: Link): Link
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
