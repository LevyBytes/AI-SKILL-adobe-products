# TextFrames collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class TextFrames {
    /**
    - Selects an arbitrary TextFrame from the collection.
      */
      anyItem(): TextFrame
    /**
    - Gets all TextFrame entries from the collection.
      */
      everyItem(): TextFrame[]
    /**
    - Gets the initial TextFrame in the collection.
      */
      firstItem(): TextFrame
    /**
    - Gets the final TextFrame in the collection.
      */
      lastItem(): TextFrame
    /**
    - Gets the central TextFrame in the collection.
      */
      middleItem(): TextFrame
    /**
    - Gets the TextFrame positioned after the supplied TextFrame in the collection.
    - @param obj TextFrame that precedes the wanted TextFrame.
      */
      nextItem(obj: TextFrame): TextFrame
    /**
    - Gets the TextFrame positioned immediately before the supplied index.
    - @param obj Index for the TextFrame that comes after the wanted TextFrame.
      */
      previousItem(obj: TextFrame): TextFrame
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
