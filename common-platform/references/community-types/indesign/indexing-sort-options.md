# IndexingSortOptions

Community declaration reference: InDesign/2023.

Collection containing indexing sort options.

```typescript
declare class IndexingSortOptions {
    /**
    - Object count for the collection.
      */
      readonly length: number
    /**

    - Returns the IndexingSortOption addressed by the specified index.
    - @param index Index value.
      */
      [index: number]: IndexingSortOption
    /**

    - Returns an arbitrary IndexingSortOption from the collection.
      */
      anyItem(): IndexingSortOption
    /**

    - Reports how many elements the IndexingSortOption contains.
      */
      count(): number
    /**

    - Returns all IndexingSortOption entries from the collection.
      */
      everyItem(): IndexingSortOption[]
    /**

    - Gets the first IndexingSortOption from the collection.
      */
      firstItem(): IndexingSortOption
    /**

    - Returns the IndexingSortOption addressed by index or name.
    - @param index Index or name.
      */
      item(index: number | string): IndexingSortOption
    /**

    - Returns the IndexingSortOption addressed by name.
    - @param name Name value.
      */
      itemByName(name: string): IndexingSortOption
    /**

    - Returns entries from the requested span of IndexingSortOptions.
    - @param from IndexingSortOption, index, or name used as range start.
    - @param to IndexingSortOption, index, or name used as range end.
      */
      itemByRange(from: IndexingSortOption | number | string, to: IndexingSortOption | number | string): IndexingSortOption[]
    /**

    - Gets the last IndexingSortOption from the collection.
      */
      lastItem(): IndexingSortOption
    /**

    - Gets the middle IndexingSortOption from the collection.
      */
      middleItem(): IndexingSortOption
    /**

    - Returns the IndexingSortOption immediately after the supplied IndexingSortOption in the collection.
    - @param obj IndexingSortOption whose index precedes the desired IndexingSortOption.
      */
      nextItem(obj: IndexingSortOption): IndexingSortOption
    /**

    - Returns the IndexingSortOption immediately before the supplied index.
    - @param obj Index for the IndexingSortOption immediately after the desired IndexingSortOption.
      */
      previousItem(obj: IndexingSortOption): IndexingSortOption
    /**

    - Produces executable source text that returns the IndexingSortOption.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
