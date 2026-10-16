# Libraries collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Libraries {
    /**
    - Supplies any Library from this collection.
      */
      anyItem(): Library
    /**
    - Supplies all Library entries from the collection.
      */
      everyItem(): Library[]
    /**
    - Supplies the collection's initial Library.
      */
      firstItem(): Library
    /**
    - Supplies the final Library in the collection.
      */
      lastItem(): Library
    /**
    - Supplies the central Library in the collection.
      */
      middleItem(): Library
    /**
    - Gets the Library positioned after the given Library.
    - @param obj Library immediately before the desired one.
      */
      nextItem(obj: Library): Library
    /**
    - Gets the Library positioned before the given index.
    - @param obj Index of the Library that comes after the desired one.
      */
      previousItem(obj: Library): Library
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
