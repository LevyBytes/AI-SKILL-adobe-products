# TextStyleRanges

Community declaration reference: InDesign/2023.

TextStyleRange collection.

```typescript
declare class TextStyleRanges {
    /**
    - Object count for the collection.
      */
      readonly length: number
    /**

    - Gets the TextStyleRange at the supplied index.
    - @param index Index value.
      */
      [index: number]: TextStyleRange
    /**

    - Selects an arbitrary TextStyleRange from the collection.
      */
      anyItem(): TextStyleRange
    /**

    - Reports how many elements the TextStyleRange collection contains.
      */
      count(): number
    /**

    - Gets all TextStyleRange entries from the collection.
      */
      everyItem(): TextStyleRange[]
    /**

    - Gets the initial TextStyleRange in the collection.
      */
      firstItem(): TextStyleRange
    /**

    - Gets the TextStyleRange identified by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): TextStyleRange
    /**

    - Gets TextStyleRanges over the supplied range.
    - @param from Starting TextStyleRange, index, or name for the range.
    - @param to Ending TextStyleRange, index, or name for the range.
      */
      itemByRange(from: TextStyleRange | number | string, to: TextStyleRange | number | string): TextStyleRange[]
    /**

    - Gets the final TextStyleRange in the collection.
      */
      lastItem(): TextStyleRange
    /**

    - Gets the central TextStyleRange in the collection.
      */
      middleItem(): TextStyleRange
    /**

    - Gets the TextStyleRange positioned after the supplied TextStyleRange in the collection.
    - @param obj TextStyleRange that precedes the wanted TextStyleRange.
      */
      nextItem(obj: TextStyleRange): TextStyleRange
    /**

    - Gets the TextStyleRange positioned immediately before the supplied index.
    - @param obj Index for the TextStyleRange that comes after the wanted TextStyleRange.
      */
      previousItem(obj: TextStyleRange): TextStyleRange
    /**

    - Builds executable source text that resolves back to the TextStyleRange.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
