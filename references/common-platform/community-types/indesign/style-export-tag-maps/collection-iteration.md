# StyleExportTagMaps collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class StyleExportTagMaps {
    /**
    - Chooses an arbitrary StyleExportTagMap from this collection.
      */
      anyItem(): StyleExportTagMap
    /**
    - Provides all StyleExportTagMap objects from this collection.
      */
      everyItem(): StyleExportTagMap[]
    /**
    - Provides the collection's initial StyleExportTagMap.
      */
      firstItem(): StyleExportTagMap
    /**
    - Provides the final StyleExportTagMap in this collection.
      */
      lastItem(): StyleExportTagMap
    /**
    - Provides the center StyleExportTagMap from this collection.
      */
      middleItem(): StyleExportTagMap
    /**
    - Provides the StyleExportTagMap positioned immediately after the supplied StyleExportTagMap.
    - @param obj StyleExportTagMap that precedes the requested one.
      */
      nextItem(obj: StyleExportTagMap): StyleExportTagMap
    /**
    - Provides the StyleExportTagMap positioned immediately before the supplied index.
    - @param obj Index belonging to the StyleExportTagMap after the requested one.
      */
      previousItem(obj: StyleExportTagMap): StyleExportTagMap
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
