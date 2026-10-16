# AngleEditboxes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class AngleEditboxes {
    /**
    - Provides an arbitrary AngleEditbox from the collection.
      */
      anyItem(): AngleEditbox
    /**
    - Provides all AngleEditbox members held by the collection.
      */
      everyItem(): AngleEditbox[]
    /**
    - Provides the collection's initial AngleEditbox.
      */
      firstItem(): AngleEditbox
    /**
    - Provides the collection's final AngleEditbox.
      */
      lastItem(): AngleEditbox
    /**
    - Provides the collection's central AngleEditbox.
      */
      middleItem(): AngleEditbox
    /**
    - Provides the AngleEditbox positioned after the supplied AngleEditbox.
    - @param obj AngleEditbox positioned immediately before the one being requested.
      */
      nextItem(obj: AngleEditbox): AngleEditbox
    /**
    - Provides the AngleEditbox positioned before the supplied index.
    - @param obj Index of the AngleEditbox immediately after the one being requested.
      */
      previousItem(obj: AngleEditbox): AngleEditbox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
