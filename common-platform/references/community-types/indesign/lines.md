# Lines

Community declaration reference: InDesign/2023.

Line collection.

```typescript
declare class Lines {
    /**
    - Object count for the collection.
      */
      readonly length: number
    /**

    - Gets the Line at the supplied index.
    - @param index Index value.
      */
      [index: number]: Line
    /**

    - Selects an arbitrary Line from the collection.
      */
      anyItem(): Line
    /**

    - Reports how many elements the Line collection contains.
      */
      count(): number
    /**

    - Gets all Line entries from the collection.
      */
      everyItem(): Line[]
    /**

    - Gets the initial Line in the collection.
      */
      firstItem(): Line
    /**

    - Gets the Line identified by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): Line
    /**

    - Gets Lines over the supplied range.
    - @param from Starting Line, index, or name for the range.
    - @param to Ending Line, index, or name for the range.
      */
      itemByRange(from: Line | number | string, to: Line | number | string): Line[]
    /**

    - Gets the final Line in the collection.
      */
      lastItem(): Line
    /**

    - Gets the central Line in the collection.
      */
      middleItem(): Line
    /**

    - Gets the Line positioned after the supplied Line in the collection.
    - @param obj Line that precedes the wanted Line.
      */
      nextItem(obj: Line): Line
    /**

    - Gets the Line positioned immediately before the supplied index.
    - @param obj Index for the Line that comes after the wanted Line.
      */
      previousItem(obj: Line): Line
    /**

    - Builds executable source text that resolves back to the Line.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
