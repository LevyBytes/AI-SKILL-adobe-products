# PercentEditboxes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class PercentEditboxes {
    /**
    - Provides an arbitrary PercentEditbox from the collection.
      */
      anyItem(): PercentEditbox
    /**
    - Provides all PercentEditbox members held by the collection.
      */
      everyItem(): PercentEditbox[]
    /**
    - Provides the collection's initial PercentEditbox.
      */
      firstItem(): PercentEditbox
    /**
    - Provides the collection's final PercentEditbox.
      */
      lastItem(): PercentEditbox
    /**
    - Provides the collection's central PercentEditbox.
      */
      middleItem(): PercentEditbox
    /**
    - Provides the PercentEditbox positioned after the supplied PercentEditbox.
    - @param obj PercentEditbox positioned immediately before the one being requested.
      */
      nextItem(obj: PercentEditbox): PercentEditbox
    /**
    - Provides the PercentEditbox positioned before the supplied index.
    - @param obj Index of the PercentEditbox immediately after the one being requested.
      */
      previousItem(obj: PercentEditbox): PercentEditbox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
