# MediaItems collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class MediaItems {
    /**
    - Supplies any MediaItem from this collection.
      */
      anyItem(): MediaItem
    /**
    - Supplies all MediaItem entries in this collection.
      */
      everyItem(): MediaItem[]
    /**
    - Supplies the first MediaItem in this collection.
      */
      firstItem(): MediaItem
    /**
    - Supplies the last MediaItem in this collection.
      */
      lastItem(): MediaItem
    /**
    - Supplies the middle MediaItem in this collection.
      */
      middleItem(): MediaItem
    /**
    - Retrieves the MediaItem positioned after the specified MediaItem in this collection.
    - @param obj MediaItem located before the target MediaItem.
      */
      nextItem(obj: MediaItem): MediaItem
    /**
    - Retrieves the MediaItem positioned before the specified index.
    - @param obj Index for the MediaItem located after the target MediaItem.
      */
      previousItem(obj: MediaItem): MediaItem
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
