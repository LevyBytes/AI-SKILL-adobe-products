# DTDs

Community declaration reference: InDesign/2023.

Collection wrapper for DTD objects.

```typescript
declare class DTDs {
    /**
    - Object count held by this collection.
      */
      readonly length: number
    /**

    - Yields the DTD at the requested index.
    - @param index Index to retrieve.
      */
      [index: number]: DTD
    /**

    - Yields an arbitrary DTD from this collection.
      */
      anyItem(): DTD
    /**

    - Reports how many DTD elements are present.
      */
      count(): number
    /**

    - Yields all DTD entries in this collection.
      */
      everyItem(): DTD[]
    /**

    - Yields the leading DTD in this collection.
      */
      firstItem(): DTD
    /**

    - Yields the DTD identified by index or name.
    - @param index Index or name to look up.
      */
      item(index: number | string): DTD
    /**

    - Yields the DTD identified by ID.
    - @param id ID to look up.
      */
      itemByID(id: number): DTD
    /**

    - Yields DTDs spanning the requested range.
    - @param from DTD, index, or name where the range starts.
    - @param to DTD, index, or name where the range ends.
      */
      itemByRange(from: DTD | number | string, to: DTD | number | string): DTD[]
    /**

    - Yields the final DTD in this collection.
      */
      lastItem(): DTD
    /**

    - Yields the central DTD in this collection.
      */
      middleItem(): DTD
    /**

    - Yields the DTD positioned after the supplied DTD.
    - @param obj DTD immediately before the requested DTD.
      */
      nextItem(obj: DTD): DTD
    /**

    - Yields the DTD positioned before the supplied index.
    - @param obj Index belonging to the DTD after the requested DTD.
      */
      previousItem(obj: DTD): DTD
    /**

    - Builds executable source text that resolves back to the DTD.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
