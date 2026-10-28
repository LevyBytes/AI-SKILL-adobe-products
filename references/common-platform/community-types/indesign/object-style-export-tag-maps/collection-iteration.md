# ObjectStyleExportTagMaps collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class ObjectStyleExportTagMaps {
    /**
    - Supplies any ObjectStyleExportTagMap from this collection.
      */
      anyItem(): ObjectStyleExportTagMap
    /**
    - Gets all ObjectStyleExportTagMap entries in this collection.
      */
      everyItem(): ObjectStyleExportTagMap[]
    /**
    - Gets the first ObjectStyleExportTagMap from this collection.
      */
      firstItem(): ObjectStyleExportTagMap
    /**
    - Gets the final ObjectStyleExportTagMap in this collection.
      */
      lastItem(): ObjectStyleExportTagMap
    /**
    - Gets the central ObjectStyleExportTagMap in this collection.
      */
      middleItem(): ObjectStyleExportTagMap
    /**
    - Gets the ObjectStyleExportTagMap positioned after the supplied ObjectStyleExportTagMap in this collection.
    - @param obj ObjectStyleExportTagMap positioned before the one being requested.
      */
      nextItem(obj: ObjectStyleExportTagMap): ObjectStyleExportTagMap
    /**
    - Gets the ObjectStyleExportTagMap positioned before the supplied index.
    - @param obj Index of the ObjectStyleExportTagMap positioned after the requested ObjectStyleExportTagMap.
      */
      previousItem(obj: ObjectStyleExportTagMap): ObjectStyleExportTagMap
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
