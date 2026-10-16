# RealEditboxes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class RealEditboxes {
    /**
    - Provides an arbitrary RealEditbox from the collection.
      */
      anyItem(): RealEditbox
    /**
    - Provides all RealEditbox members held by the collection.
      */
      everyItem(): RealEditbox[]
    /**
    - Provides the collection's initial RealEditbox.
      */
      firstItem(): RealEditbox
    /**
    - Provides the collection's final RealEditbox.
      */
      lastItem(): RealEditbox
    /**
    - Provides the collection's central RealEditbox.
      */
      middleItem(): RealEditbox
    /**
    - Provides the RealEditbox positioned after the supplied RealEditbox.
    - @param obj RealEditbox positioned immediately before the one being requested.
      */
      nextItem(obj: RealEditbox): RealEditbox
    /**
    - Provides the RealEditbox positioned before the supplied index.
    - @param obj Index of the RealEditbox immediately after the one being requested.
      */
      previousItem(obj: RealEditbox): RealEditbox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
