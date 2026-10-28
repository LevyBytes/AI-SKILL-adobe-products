# TOCStyleEntries collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class TOCStyleEntries {
    /**
    - Provides any TOCStyleEntry from the collection.
      */
      anyItem(): TOCStyleEntry
    /**
    - Provides all TOCStyleEntry entries in the collection.
      */
      everyItem(): TOCStyleEntry[]
    /**
    - Provides the first TOCStyleEntry from the collection.
      */
      firstItem(): TOCStyleEntry
    /**
    - Provides the last TOCStyleEntry from the collection.
      */
      lastItem(): TOCStyleEntry
    /**
    - Provides the middle TOCStyleEntry from the collection.
      */
      middleItem(): TOCStyleEntry
    /**
    - Provides the TOCStyleEntry immediately after the supplied TOCStyleEntry in the collection.
    - @param obj TOCStyleEntry immediately before the desired TOCStyleEntry.
      */
      nextItem(obj: TOCStyleEntry): TOCStyleEntry
    /**
    - Provides the TOCStyleEntry immediately before the supplied index.
    - @param obj Index for the TOCStyleEntry immediately after the desired TOCStyleEntry.
      */
      previousItem(obj: TOCStyleEntry): TOCStyleEntry
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
