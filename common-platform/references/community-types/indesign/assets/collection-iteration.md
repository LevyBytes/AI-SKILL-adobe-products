# Assets collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Assets {
    /**
    - Supplies any Asset from this collection.
      */
      anyItem(): Asset
    /**
    - Supplies all Asset entries from the collection.
      */
      everyItem(): Asset[]
    /**
    - Supplies the collection's initial Asset.
      */
      firstItem(): Asset
    /**
    - Supplies the final Asset in the collection.
      */
      lastItem(): Asset
    /**
    - Supplies the central Asset in the collection.
      */
      middleItem(): Asset
    /**
    - Gets the Asset positioned after the given Asset.
    - @param obj Asset immediately before the desired one.
      */
      nextItem(obj: Asset): Asset
    /**
    - Gets the Asset positioned before the given index.
    - @param obj Index of the Asset that comes after the desired one.
      */
      previousItem(obj: Asset): Asset
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
