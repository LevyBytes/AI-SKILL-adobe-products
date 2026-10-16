# Bookmarks collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Bookmarks {
    /**
    - Gets any Bookmark from the collection.
      */
      anyItem(): Bookmark
    /**
    - Gets every Bookmark in the collection.
      */
      everyItem(): Bookmark[]
    /**
    - Gets the first Bookmark in the collection.
      */
      firstItem(): Bookmark
    /**
    - Gets the last Bookmark in the collection.
      */
      lastItem(): Bookmark
    /**
    - Gets the middle Bookmark in the collection.
      */
      middleItem(): Bookmark
    /**
    - Gets the Bookmark whose index comes after the supplied Bookmark.
    - @param obj Bookmark immediately before the desired Bookmark.
      */
      nextItem(obj: Bookmark): Bookmark
    /**
    - Gets the Bookmark whose index comes before the supplied index.
    - @param obj Index of the Bookmark immediately after the desired Bookmark.
      */
      previousItem(obj: Bookmark): Bookmark
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
