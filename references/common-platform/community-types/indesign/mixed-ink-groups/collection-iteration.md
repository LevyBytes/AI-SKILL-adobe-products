# MixedInkGroups collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class MixedInkGroups {
    /**
    - Chooses any MixedInkGroup from the collection.
      */
      anyItem(): MixedInkGroup
    /**
    - Provides all MixedInkGroup entries from the collection.
      */
      everyItem(): MixedInkGroup[]
    /**
    - Provides the first MixedInkGroup entry in this collection.
      */
      firstItem(): MixedInkGroup
    /**
    - Provides the final MixedInkGroup entry in this collection.
      */
      lastItem(): MixedInkGroup
    /**
    - Provides the central MixedInkGroup entry in this collection.
      */
      middleItem(): MixedInkGroup
    /**
    - Provides the MixedInkGroup positioned after the supplied MixedInkGroup.
    - @param obj MixedInkGroup placed before the target MixedInkGroup.
      */
      nextItem(obj: MixedInkGroup): MixedInkGroup
    /**
    - Provides the MixedInkGroup positioned before the supplied index.
    - @param obj Index of the MixedInkGroup placed after the target MixedInkGroup.
      */
      previousItem(obj: MixedInkGroup): MixedInkGroup
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
