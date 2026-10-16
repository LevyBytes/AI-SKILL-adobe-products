# HyphenationExceptions

Community declaration reference: InDesign/2023.

Collection wrapper for hyphenation exception lists.

```typescript
declare class HyphenationExceptions {
    /**
    - Object count in this collection.
      */
      readonly length: number
    /**

    - Looks up a HyphenationException by index.
    - @param index Index value.
      */
      [index: number]: HyphenationException
    /**

    - Selects an arbitrary HyphenationException from this collection.
      */
      anyItem(): HyphenationException
    /**

    - Counts elements on the HyphenationException collection.
      */
      count(): number
    /**

    - Gets all HyphenationException objects in this collection.
      */
      everyItem(): HyphenationException[]
    /**

    - Gets the initial HyphenationException in this collection.
      */
      firstItem(): HyphenationException
    /**

    - Finds a HyphenationException by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): HyphenationException
    /**

    - Finds a HyphenationException by name.
    - @param name Name value.
      */
      itemByName(name: string): HyphenationException
    /**

    - Gets HyphenationExceptions spanning the supplied range.
    - @param from HyphenationException, index, or name at the range start.
    - @param to HyphenationException, index, or name at the range end.
      */
      itemByRange(from: HyphenationException | number | string, to: HyphenationException | number | string): HyphenationException[]
    /**

    - Gets the final HyphenationException in this collection.
      */
      lastItem(): HyphenationException
    /**

    - Gets the central HyphenationException in this collection.
      */
      middleItem(): HyphenationException
    /**

    - Gets the HyphenationException positioned after the supplied HyphenationException.
    - @param obj HyphenationException that comes before the wanted HyphenationException.
      */
      nextItem(obj: HyphenationException): HyphenationException
    /**

    - Gets the HyphenationException positioned before the supplied index.
    - @param obj Index belonging to the HyphenationException after the wanted HyphenationException.
      */
      previousItem(obj: HyphenationException): HyphenationException
    /**

    - Builds source text that resolves back to the HyphenationException when run.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
