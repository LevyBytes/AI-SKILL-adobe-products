# TimingLists

Community declaration reference: InDesign/2023.

Collection wrapper for timing lists.

```typescript
declare class TimingLists {
    /**
    - Total objects held by the collection.
      */
      readonly length: number
    /**

    - Accesses the TimingList at the given index.
    - @param index Numeric position.
      */
      [index: number]: TimingList
    /**

    - Adds an event-triggered TimingList object.
    - @param triggerEvent Trigger Event selector.
    - @param withProperties Property values assigned to the new TimingList.
      */
      add(triggerEvent: DynamicTriggerEvents, withProperties: object): TimingList
    /**

    - Selects an arbitrary TimingList from the collection.
      */
      anyItem(): TimingList
    /**

    - Reports how many TimingList elements exist.
      */
      count(): number
    /**

    - Expands the collection to all TimingList entries.
      */
      everyItem(): TimingList[]
    /**

    - Gets the leading TimingList in the collection.
      */
      firstItem(): TimingList
    /**

    - Finds a TimingList by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): TimingList
    /**

    - Gets TimingLists spanning the from and to endpoints.
    - @param from Starting TimingList, index, or name.
    - @param to Ending TimingList, index, or name.
      */
      itemByRange(from: TimingList | number | string, to: TimingList | number | string): TimingList[]
    /**

    - Gets the final TimingList in the collection.
      */
      lastItem(): TimingList
    /**

    - Gets the central TimingList in the collection.
      */
      middleItem(): TimingList
    /**

    - Gets the TimingList whose index comes after the supplied TimingList.
    - @param obj TimingList before the desired entry.
      */
      nextItem(obj: TimingList): TimingList
    /**

    - Resolves the TimingList positioned just before the supplied index.
    - @param obj Index for the TimingList after the requested one.
      */
      previousItem(obj: TimingList): TimingList
    /**

    - Builds source text that evaluates back to this TimingList.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
