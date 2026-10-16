# TimingTargets

Community declaration reference: InDesign/2023.

Collection wrapper for timing targets.

```typescript
declare class TimingTargets {
    /**
    - Total objects held by the collection.
      */
      readonly length: number
    /**

    - Accesses the TimingTarget at the given index.
    - @param index Numeric position.
      */
      [index: number]: TimingTarget
    /**

    - Adds a target item.
    - @param dynamicTarget Page item target for an animation, media item, or mso.
    - @param delaySeconds Delay time in seconds for a target.
    - @param withProperties Property seed values for a TimingTarget being created.
      */
      add(dynamicTarget: PageItem | Graphic | Behavior | MediaItem, delaySeconds?: number, withProperties?: object): TimingTarget
    /**

    - Selects an arbitrary TimingTarget from the collection.
      */
      anyItem(): TimingTarget
    /**

    - Reports how many TimingTarget elements exist.
      */
      count(): number
    /**

    - Expands the collection to all TimingTarget entries.
      */
      everyItem(): TimingTarget[]
    /**

    - Gets the leading TimingTarget in the collection.
      */
      firstItem(): TimingTarget
    /**

    - Finds a TimingTarget by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): TimingTarget
    /**

    - Gets TimingTargets spanning the from and to endpoints.
    - @param from Starting TimingTarget, index, or name.
    - @param to Ending TimingTarget, index, or name.
      */
      itemByRange(from: TimingTarget | number | string, to: TimingTarget | number | string): TimingTarget[]
    /**

    - Gets the final TimingTarget in the collection.
      */
      lastItem(): TimingTarget
    /**

    - Gets the central TimingTarget in the collection.
      */
      middleItem(): TimingTarget
    /**

    - Gets the TimingTarget whose index comes after the supplied TimingTarget.
    - @param obj TimingTarget before the desired entry.
      */
      nextItem(obj: TimingTarget): TimingTarget
    /**

    - Resolves the TimingTarget positioned just before the supplied index.
    - @param obj Index for the TimingTarget after the requested one.
      */
      previousItem(obj: TimingTarget): TimingTarget
    /**

    - Builds source text that evaluates back to this TimingTarget.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
