# Words

Community declaration reference: InDesign/2023.

Word collection.

```typescript
declare class Words {
    /**
    - Object count for the collection.
      */
      readonly length: number
    /**

    - Gets the Word at the supplied index.
    - @param index Index value.
      */
      [index: number]: Word
    /**

    - Selects an arbitrary Word from the collection.
      */
      anyItem(): Word
    /**

    - Reports how many elements the Word collection contains.
      */
      count(): number
    /**

    - Gets all Word entries from the collection.
      */
      everyItem(): Word[]
    /**

    - Gets the initial Word in the collection.
      */
      firstItem(): Word
    /**

    - Gets the Word identified by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): Word
    /**

    - Gets Words over the supplied range.
    - @param from Starting Word, index, or name for the range.
    - @param to Ending Word, index, or name for the range.
      */
      itemByRange(from: Word | number | string, to: Word | number | string): Word[]
    /**

    - Gets the final Word in the collection.
      */
      lastItem(): Word
    /**

    - Gets the central Word in the collection.
      */
      middleItem(): Word
    /**

    - Gets the Word positioned after the supplied Word in the collection.
    - @param obj Word that precedes the wanted Word.
      */
      nextItem(obj: Word): Word
    /**

    - Gets the Word positioned immediately before the supplied index.
    - @param obj Index for the Word that comes after the wanted Word.
      */
      previousItem(obj: Word): Word
    /**

    - Builds executable source text that resolves back to the Word.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
