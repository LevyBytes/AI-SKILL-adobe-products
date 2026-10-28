# CompositeFontEntries collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class CompositeFontEntries {
    /**
    - Returns an arbitrary CompositeFontEntry from the collection.
      */
      anyItem(): CompositeFontEntry
    /**
    - Returns all CompositeFontEntry entries from the collection.
      */
      everyItem(): CompositeFontEntry[]
    /**
    - Gets the first CompositeFontEntry from the collection.
      */
      firstItem(): CompositeFontEntry
    /**
    - Gets the last CompositeFontEntry from the collection.
      */
      lastItem(): CompositeFontEntry
    /**
    - Gets the middle CompositeFontEntry from the collection.
      */
      middleItem(): CompositeFontEntry
    /**
    - Returns the CompositeFontEntry immediately after the supplied CompositeFontEntry in the collection.
    - @param obj CompositeFontEntry whose index precedes the desired CompositeFontEntry.
      */
      nextItem(obj: CompositeFontEntry): CompositeFontEntry
    /**
    - Returns the CompositeFontEntry immediately before the supplied index.
    - @param obj Index for the CompositeFontEntry immediately after the desired CompositeFontEntry.
      */
      previousItem(obj: CompositeFontEntry): CompositeFontEntry
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
