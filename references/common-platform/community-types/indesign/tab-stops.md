# TabStops

Community declaration reference: InDesign/2023.

TabStop collection.

```typescript
declare class TabStops {
    /**
    - Count of objects held by the collection.
      */
      readonly length: number
    /**

    - Gets the TabStop at the requested index.
    - @param index Index value to retrieve.
      */
      [index: number]: TabStop
    /**

    - Builds a TabStop instance.
    - @param withProperties Starting property values for the new TabStop.
      */
      add(withProperties: object): TabStop
    /**

    - Gets an arbitrary TabStop from the collection.
      */
      anyItem(): TabStop
    /**

    - Reports how many elements the TabStop collection contains.
      */
      count(): number
    /**

    - Gets all TabStop objects from the collection.
      */
      everyItem(): TabStop[]
    /**

    - Gets the first TabStop in collection order.
      */
      firstItem(): TabStop
    /**

    - Gets a TabStop by index or name.
    - @param index Index or name identifying the item.
      */
      item(index: number | string): TabStop
    /**

    - Gets the TabStops spanning the requested range.
    - @param from Starting TabStop, index, or name for the range.
    - @param to Ending TabStop, index, or name for the range.
      */
      itemByRange(from: TabStop | number | string, to: TabStop | number | string): TabStop[]
    /**

    - Gets the final TabStop in collection order.
      */
      lastItem(): TabStop
    /**

    - Gets the middle TabStop from the collection.
      */
      middleItem(): TabStop
    /**

    - Gets the TabStop immediately after the supplied TabStop in collection order.
    - @param obj TabStop positioned before the requested TabStop.
      */
      nextItem(obj: TabStop): TabStop
    /**

    - Gets the TabStop immediately before the supplied index.
    - @param obj Index of the TabStop positioned after the requested TabStop.
      */
      previousItem(obj: TabStop): TabStop
    /**

    - Creates executable source text that resolves back to the TabStop.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
