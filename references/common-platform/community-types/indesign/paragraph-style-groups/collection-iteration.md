# ParagraphStyleGroups collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class ParagraphStyleGroups {
    /**
    - Chooses an arbitrary ParagraphStyleGroup from this collection.
      */
      anyItem(): ParagraphStyleGroup
    /**
    - Provides all ParagraphStyleGroup objects from this collection.
      */
      everyItem(): ParagraphStyleGroup[]
    /**
    - Provides the collection's initial ParagraphStyleGroup.
      */
      firstItem(): ParagraphStyleGroup
    /**
    - Provides the final ParagraphStyleGroup in this collection.
      */
      lastItem(): ParagraphStyleGroup
    /**
    - Provides the center ParagraphStyleGroup from this collection.
      */
      middleItem(): ParagraphStyleGroup
    /**
    - Provides the ParagraphStyleGroup positioned immediately after the supplied ParagraphStyleGroup.
    - @param obj ParagraphStyleGroup that precedes the requested one.
      */
      nextItem(obj: ParagraphStyleGroup): ParagraphStyleGroup
    /**
    - Provides the ParagraphStyleGroup positioned immediately before the supplied index.
    - @param obj Index belonging to the ParagraphStyleGroup after the requested one.
      */
      previousItem(obj: ParagraphStyleGroup): ParagraphStyleGroup
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
