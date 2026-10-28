# GraphicLines collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class GraphicLines {
    /**
    - Gets any GraphicLine from the collection.
      */
      anyItem(): GraphicLine
    /**
    - Gets all GraphicLine entries in the collection.
      */
      everyItem(): GraphicLine[]
    /**
    - Gets the first GraphicLine from the collection.
      */
      firstItem(): GraphicLine
    /**
    - Gets the last GraphicLine from the collection.
      */
      lastItem(): GraphicLine
    /**
    - Gets the middle GraphicLine from the collection.
      */
      middleItem(): GraphicLine
    /**
    - Gets the GraphicLine positioned after the specified GraphicLine in the collection.
    - @param obj GraphicLine preceding the requested GraphicLine.
      */
      nextItem(obj: GraphicLine): GraphicLine
    /**
    - Gets the GraphicLine at the index before the specified index.
    - @param obj Index of the GraphicLine after the requested GraphicLine.
      */
      previousItem(obj: GraphicLine): GraphicLine
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
