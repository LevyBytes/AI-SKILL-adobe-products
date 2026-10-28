# TextColumns

Community declaration reference: InDesign/2023.

TextColumn collection.

```typescript
declare class TextColumns {
    /**
    - Object count for the collection.
      */
      readonly length: number
    /**

    - Gets the TextColumn at the supplied index.
    - @param index Index value.
      */
      [index: number]: TextColumn
    /**

    - Selects an arbitrary TextColumn from the collection.
      */
      anyItem(): TextColumn
    /**

    - Reports how many elements the TextColumn collection contains.
      */
      count(): number
    /**

    - Gets all TextColumn entries from the collection.
      */
      everyItem(): TextColumn[]
    /**

    - Gets the initial TextColumn in the collection.
      */
      firstItem(): TextColumn
    /**

    - Gets the TextColumn identified by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): TextColumn
    /**

    - Gets TextColumns over the supplied range.
    - @param from Starting TextColumn, index, or name for the range.
    - @param to Ending TextColumn, index, or name for the range.
      */
      itemByRange(from: TextColumn | number | string, to: TextColumn | number | string): TextColumn[]
    /**

    - Gets the final TextColumn in the collection.
      */
      lastItem(): TextColumn
    /**

    - Gets the central TextColumn in the collection.
      */
      middleItem(): TextColumn
    /**

    - Gets the TextColumn positioned after the supplied TextColumn in the collection.
    - @param obj TextColumn that precedes the wanted TextColumn.
      */
      nextItem(obj: TextColumn): TextColumn
    /**

    - Gets the TextColumn positioned immediately before the supplied index.
    - @param obj Index for the TextColumn that comes after the wanted TextColumn.
      */
      previousItem(obj: TextColumn): TextColumn
    /**

    - Builds executable source text that resolves back to the TextColumn.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
