# PICTs collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class PICTs {
    /**
    - Gets any PICT from the collection.
      */
      anyItem(): PICT
    /**
    - Gets all PICT entries in the collection.
      */
      everyItem(): PICT[]
    /**
    - Gets the first PICT from the collection.
      */
      firstItem(): PICT
    /**
    - Gets the last PICT from the collection.
      */
      lastItem(): PICT
    /**
    - Gets the middle PICT from the collection.
      */
      middleItem(): PICT
    /**
    - Gets the PICT positioned after the specified PICT in the collection.
    - @param obj PICT preceding the requested PICT.
      */
      nextItem(obj: PICT): PICT
    /**
    - Gets the PICT at the index before the specified index.
    - @param obj Index of the PICT after the requested PICT.
      */
      previousItem(obj: PICT): PICT
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
