# Notes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Notes {
    /**
    - Chooses an arbitrary Note from this collection.
      */
      anyItem(): Note
    /**
    - Provides all Note objects from this collection.
      */
      everyItem(): Note[]
    /**
    - Provides the collection's initial Note.
      */
      firstItem(): Note
    /**
    - Provides the final Note in this collection.
      */
      lastItem(): Note
    /**
    - Provides the center Note from this collection.
      */
      middleItem(): Note
    /**
    - Provides the Note positioned immediately after the supplied Note.
    - @param obj Note that precedes the requested one.
      */
      nextItem(obj: Note): Note
    /**
    - Provides the Note positioned immediately before the supplied index.
    - @param obj Index belonging to the Note after the requested one.
      */
      previousItem(obj: Note): Note
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
