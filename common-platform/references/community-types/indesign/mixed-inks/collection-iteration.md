# MixedInks collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class MixedInks {
    /**
    - Chooses any MixedInk from the collection.
      */
      anyItem(): MixedInk
    /**
    - Provides all MixedInk entries from the collection.
      */
      everyItem(): MixedInk[]
    /**
    - Provides the first MixedInk entry in this collection.
      */
      firstItem(): MixedInk
    /**
    - Provides the final MixedInk entry in this collection.
      */
      lastItem(): MixedInk
    /**
    - Provides the central MixedInk entry in this collection.
      */
      middleItem(): MixedInk
    /**
    - Provides the MixedInk positioned after the supplied MixedInk.
    - @param obj MixedInk placed before the target MixedInk.
      */
      nextItem(obj: MixedInk): MixedInk
    /**
    - Provides the MixedInk positioned before the supplied index.
    - @param obj Index of the MixedInk placed after the target MixedInk.
      */
      previousItem(obj: MixedInk): MixedInk
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
