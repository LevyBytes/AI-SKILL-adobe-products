# ColorGroupSwatches collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class ColorGroupSwatches {
    /**
    - Chooses any ColorGroupSwatch from the collection.
      */
      anyItem(): ColorGroupSwatch
    /**
    - Provides all ColorGroupSwatch entries from the collection.
      */
      everyItem(): ColorGroupSwatch[]
    /**
    - Provides the first ColorGroupSwatch entry in this collection.
      */
      firstItem(): ColorGroupSwatch
    /**
    - Provides the final ColorGroupSwatch entry in this collection.
      */
      lastItem(): ColorGroupSwatch
    /**
    - Provides the central ColorGroupSwatch entry in this collection.
      */
      middleItem(): ColorGroupSwatch
    /**
    - Provides the ColorGroupSwatch positioned after the supplied ColorGroupSwatch.
    - @param obj ColorGroupSwatch placed before the target ColorGroupSwatch.
      */
      nextItem(obj: ColorGroupSwatch): ColorGroupSwatch
    /**
    - Provides the ColorGroupSwatch positioned before the supplied index.
    - @param obj Index of the ColorGroupSwatch placed after the target ColorGroupSwatch.
      */
      previousItem(obj: ColorGroupSwatch): ColorGroupSwatch
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
