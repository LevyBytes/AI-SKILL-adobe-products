# XMLItems

Community declaration reference: InDesign/2023.

Collection wrapper for XMLItem objects.

```typescript
declare class XMLItems {
    /**
    - Object count held by this collection.
      */
      readonly length: number
    /**

    - Yields the XMLItem at the requested index.
    - @param index Index to retrieve.
      */
      [index: number]: XMLItem
    /**

    - Yields an arbitrary XMLItem from this collection.
      */
      anyItem(): XMLItem
    /**

    - Reports how many XMLItem elements are present.
      */
      count(): number
    /**

    - Yields all XMLItem entries in this collection.
      */
      everyItem(): XMLItem[]
    /**

    - Yields the leading XMLItem in this collection.
      */
      firstItem(): XMLItem
    /**

    - Yields the XMLItem identified by index or name.
    - @param index Index or name to look up.
      */
      item(index: number | string): XMLItem
    /**

    - Yields the XMLItem identified by ID.
    - @param id ID to look up.
      */
      itemByID(id: number): XMLItem
    /**

    - Yields XMLItems spanning the requested range.
    - @param from XMLItem, index, or name where the range starts.
    - @param to XMLItem, index, or name where the range ends.
      */
      itemByRange(from: XMLItem | number | string, to: XMLItem | number | string): XMLItem[]
    /**

    - Yields the final XMLItem in this collection.
      */
      lastItem(): XMLItem
    /**

    - Yields the central XMLItem in this collection.
      */
      middleItem(): XMLItem
    /**

    - Yields the XMLItem positioned after the supplied XMLItem.
    - @param obj XMLItem immediately before the requested XMLItem.
      */
      nextItem(obj: XMLItem): XMLItem
    /**

    - Yields the XMLItem positioned before the supplied index.
    - @param obj Index belonging to the XMLItem after the requested XMLItem.
      */
      previousItem(obj: XMLItem): XMLItem
    /**

    - Builds executable source text that resolves back to the XMLItem.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
