# MenuItems collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class MenuItems {
    /**
    - Retrieves an arbitrary MenuItem from the collection.
      */
      anyItem(): MenuItem
    /**
    - Retrieves all MenuItem objects in the collection.
      */
      everyItem(): MenuItem[]
    /**
    - Retrieves the first MenuItem from the collection.
      */
      firstItem(): MenuItem
    /**
    - Retrieves the last MenuItem from the collection.
      */
      lastItem(): MenuItem
    /**
    - Retrieves the middle MenuItem from the collection.
      */
      middleItem(): MenuItem
    /**
    - Retrieves the MenuItem positioned after the supplied MenuItem in the collection.
    - @param obj MenuItem immediately before the desired MenuItem.
      */
      nextItem(obj: MenuItem): MenuItem
    /**
    - Retrieves the MenuItem positioned before the supplied index.
    - @param obj Index after the desired MenuItem.
      */
      previousItem(obj: MenuItem): MenuItem
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
