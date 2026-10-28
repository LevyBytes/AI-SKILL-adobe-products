# TextPaths collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class TextPaths {
    /**
    - Selects an arbitrary TextPath from this collection.
      */
      anyItem(): TextPath
    /**
    - Gets all TextPath objects in this collection.
      */
      everyItem(): TextPath[]
    /**
    - Gets the initial TextPath in this collection.
      */
      firstItem(): TextPath
    /**
    - Gets the final TextPath in this collection.
      */
      lastItem(): TextPath
    /**
    - Gets the central TextPath in this collection.
      */
      middleItem(): TextPath
    /**
    - Gets the TextPath positioned after the supplied TextPath.
    - @param obj TextPath that comes before the wanted TextPath.
      */
      nextItem(obj: TextPath): TextPath
    /**
    - Gets the TextPath positioned before the supplied index.
    - @param obj Index belonging to the TextPath after the wanted TextPath.
      */
      previousItem(obj: TextPath): TextPath
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
