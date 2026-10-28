# TimingGroups

Community declaration reference: InDesign/2023.

Collection wrapper for timing data objects.

```typescript
declare class TimingGroups {
    /**
    - Total objects held by the collection.
      */
      readonly length: number
    /**

    - Accesses the TimingGroup at the given index.
    - @param index Numeric position.
      */
      [index: number]: TimingGroup
    /**

    - Adds a TimingGroup.
    - @param dynamicTarget Page item target for an animation, media item, or mso.
    - @param delaySeconds Delay time in seconds for a target.
    - @param withProperties Property seed values for a TimingGroup being created.
      */
      add(dynamicTarget: PageItem | Graphic | Behavior | MediaItem, delaySeconds?: number, withProperties?: object): TimingGroup
    /**

    - Selects an arbitrary TimingGroup from the collection.
      */
      anyItem(): TimingGroup
    /**

    - Reports how many TimingGroup elements exist.
      */
      count(): number
    /**

    - Expands the collection to all TimingGroup entries.
      */
      everyItem(): TimingGroup[]
    /**

    - Gets the leading TimingGroup in the collection.
      */
      firstItem(): TimingGroup
    /**

    - Finds a TimingGroup by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): TimingGroup
    /**

    - Gets TimingGroups spanning the from and to endpoints.
    - @param from Starting TimingGroup, index, or name.
    - @param to Ending TimingGroup, index, or name.
      */
      itemByRange(from: TimingGroup | number | string, to: TimingGroup | number | string): TimingGroup[]
    /**

    - Gets the final TimingGroup in the collection.
      */
      lastItem(): TimingGroup
    /**

    - Gets the central TimingGroup in the collection.
      */
      middleItem(): TimingGroup
    /**

    - Gets the TimingGroup whose index comes after the supplied TimingGroup.
    - @param obj TimingGroup before the desired entry.
      */
      nextItem(obj: TimingGroup): TimingGroup
    /**

    - Resolves the TimingGroup positioned just before the supplied index.
    - @param obj Index for the TimingGroup after the requested one.
      */
      previousItem(obj: TimingGroup): TimingGroup
    /**

    - Builds source text that evaluates back to this TimingGroup.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
