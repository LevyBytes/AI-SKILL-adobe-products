# Images collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Images {
    /**
    - Gets any Image from the collection.
      */
      anyItem(): Image
    /**
    - Gets all Image entries in the collection.
      */
      everyItem(): Image[]
    /**
    - Gets the first Image from the collection.
      */
      firstItem(): Image
    /**
    - Gets the last Image from the collection.
      */
      lastItem(): Image
    /**
    - Gets the middle Image from the collection.
      */
      middleItem(): Image
    /**
    - Gets the Image positioned after the specified Image in the collection.
    - @param obj Image preceding the requested Image.
      */
      nextItem(obj: Image): Image
    /**
    - Gets the Image at the index before the specified index.
    - @param obj Index of the Image after the requested Image.
      */
      previousItem(obj: Image): Image
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
