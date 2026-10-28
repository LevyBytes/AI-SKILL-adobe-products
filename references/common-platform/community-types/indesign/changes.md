# Changes

Community declaration reference: InDesign/2023.

Collection wrapper for changes.

```typescript
declare class Changes {
    /**
    - Object count in this collection.
      */
      readonly length: number
    /**

    - Looks up a Change by index.
    - @param index Index value.
      */
      [index: number]: Change
    /**

    - Selects an arbitrary Change from this collection.
      */
      anyItem(): Change
    /**

    - Counts elements on the Change collection.
      */
      count(): number
    /**

    - Gets all Change objects in this collection.
      */
      everyItem(): Change[]
    /**

    - Gets the initial Change in this collection.
      */
      firstItem(): Change
    /**

    - Finds a Change by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): Change
    /**

    - Gets Changes spanning the supplied range.
    - @param from Change, index, or name at the range start.
    - @param to Change, index, or name at the range end.
      */
      itemByRange(from: Change | number | string, to: Change | number | string): Change[]
    /**

    - Gets the final Change in this collection.
      */
      lastItem(): Change
    /**

    - Gets the central Change in this collection.
      */
      middleItem(): Change
    /**

    - Gets the Change positioned after the supplied Change.
    - @param obj Change that comes before the wanted Change.
      */
      nextItem(obj: Change): Change
    /**

    - Gets the Change positioned before the supplied index.
    - @param obj Index belonging to the Change after the wanted Change.
      */
      previousItem(obj: Change): Change
    /**

    - Builds source text that resolves back to the Change when run.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
