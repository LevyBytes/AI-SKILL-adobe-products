# ParagraphDestinations collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class ParagraphDestinations {
    /**
    - Retrieves an arbitrary ParagraphDestination from this collection.
      */
      anyItem(): ParagraphDestination
    /**
    - Retrieves all ParagraphDestination entries from this collection.
      */
      everyItem(): ParagraphDestination[]
    /**
    - Retrieves the initial ParagraphDestination from this collection.
      */
      firstItem(): ParagraphDestination
    /**
    - Retrieves the final ParagraphDestination from this collection.
      */
      lastItem(): ParagraphDestination
    /**
    - Retrieves the center ParagraphDestination from this collection.
      */
      middleItem(): ParagraphDestination
    /**
    - Retrieves the ParagraphDestination immediately after the supplied ParagraphDestination in this collection.
    - @param obj ParagraphDestination positioned immediately before the target ParagraphDestination.
      */
      nextItem(obj: ParagraphDestination): ParagraphDestination
    /**
    - Retrieves the ParagraphDestination immediately before the supplied index.
    - @param obj Index belonging to the ParagraphDestination immediately after the target ParagraphDestination.
      */
      previousItem(obj: ParagraphDestination): ParagraphDestination
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
