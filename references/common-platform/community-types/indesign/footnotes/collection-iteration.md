# Footnotes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Footnotes {
    /**
    - Chooses an arbitrary Footnote from this collection.
      */
      anyItem(): Footnote
    /**
    - Provides all Footnote objects from this collection.
      */
      everyItem(): Footnote[]
    /**
    - Provides the collection's initial Footnote.
      */
      firstItem(): Footnote
    /**
    - Provides the final Footnote in this collection.
      */
      lastItem(): Footnote
    /**
    - Provides the center Footnote from this collection.
      */
      middleItem(): Footnote
    /**
    - Provides the Footnote positioned immediately after the supplied Footnote.
    - @param obj Footnote that precedes the requested one.
      */
      nextItem(obj: Footnote): Footnote
    /**
    - Provides the Footnote positioned immediately before the supplied index.
    - @param obj Index belonging to the Footnote after the requested one.
      */
      previousItem(obj: Footnote): Footnote
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
