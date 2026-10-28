# InsertionPoints

Community declaration reference: InDesign/2023.

InsertionPoint collection.

```typescript
declare class InsertionPoints {
    /**
    - Object count for the collection.
      */
      readonly length: number
    /**

    - Gets the InsertionPoint at the supplied index.
    - @param index Index value.
      */
      [index: number]: InsertionPoint
    /**

    - Selects an arbitrary InsertionPoint from the collection.
      */
      anyItem(): InsertionPoint
    /**

    - Reports how many elements the InsertionPoint collection contains.
      */
      count(): number
    /**

    - Gets all InsertionPoint entries from the collection.
      */
      everyItem(): InsertionPoint[]
    /**

    - Gets the initial InsertionPoint in the collection.
      */
      firstItem(): InsertionPoint
    /**

    - Gets the InsertionPoint identified by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): InsertionPoint
    /**

    - Gets InsertionPoints over the supplied range.
    - @param from Starting InsertionPoint, index, or name for the range.
    - @param to Ending InsertionPoint, index, or name for the range.
      */
      itemByRange(from: InsertionPoint | number | string, to: InsertionPoint | number | string): InsertionPoint[]
    /**

    - Gets the final InsertionPoint in the collection.
      */
      lastItem(): InsertionPoint
    /**

    - Gets the central InsertionPoint in the collection.
      */
      middleItem(): InsertionPoint
    /**

    - Gets the InsertionPoint positioned after the supplied InsertionPoint in the collection.
    - @param obj InsertionPoint that precedes the wanted InsertionPoint.
      */
      nextItem(obj: InsertionPoint): InsertionPoint
    /**

    - Gets the InsertionPoint positioned immediately before the supplied index.
    - @param obj Index for the InsertionPoint that comes after the wanted InsertionPoint.
      */
      previousItem(obj: InsertionPoint): InsertionPoint
    /**

    - Builds executable source text that resolves back to the InsertionPoint.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
