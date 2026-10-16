# ColorGroups collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class ColorGroups {
    /**
    - Chooses any ColorGroup from the collection.
      */
      anyItem(): ColorGroup
    /**
    - Provides all ColorGroup entries from the collection.
      */
      everyItem(): ColorGroup[]
    /**
    - Provides the first ColorGroup entry in this collection.
      */
      firstItem(): ColorGroup
    /**
    - Provides the final ColorGroup entry in this collection.
      */
      lastItem(): ColorGroup
    /**
    - Provides the central ColorGroup entry in this collection.
      */
      middleItem(): ColorGroup
    /**
    - Provides the ColorGroup positioned after the supplied ColorGroup.
    - @param obj ColorGroup placed before the target ColorGroup.
      */
      nextItem(obj: ColorGroup): ColorGroup
    /**
    - Provides the ColorGroup positioned before the supplied index.
    - @param obj Index of the ColorGroup placed after the target ColorGroup.
      */
      previousItem(obj: ColorGroup): ColorGroup
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
