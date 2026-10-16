# Paths

Community declaration reference: InDesign/2023.

Path collection.

```typescript
declare class Paths {
    /**
    - Count of objects in the collection.
      */
      readonly length: number
    /**

    - Provides the Path at the specified index.
    - @param index Index to read.
      */
      [index: number]: Path
    /**

    - Creates a Path.
    - @param withProperties Initial property values for the new Path
      */
      add(withProperties: object): Path
    /**

    - Provides any Path from the collection.
      */
      anyItem(): Path
    /**

    - Shows how many elements are in the Path.
      */
      count(): number
    /**

    - Provides all Path entries in the collection.
      */
      everyItem(): Path[]
    /**

    - Provides the collection's first Path.
      */
      firstItem(): Path
    /**

    - Finds a Path by the supplied index or name.
    - @param index Index or name identifying the item.
      */
      item(index: number | string): Path
    /**

    - Provides the Paths covered by the requested range.
    - @param from Path, index, or name that starts the range.
    - @param to Path, index, or name that ends the range.
      */
      itemByRange(from: Path | number | string, to: Path | number | string): Path[]
    /**

    - Provides the collection's final Path.
      */
      lastItem(): Path
    /**

    - Provides the Path positioned in the middle of the collection.
      */
      middleItem(): Path
    /**

    - Provides the Path immediately after the specified Path in collection order.
    - @param obj Path that precedes the requested Path.
      */
      nextItem(obj: Path): Path
    /**

    - Provides the Path positioned before the specified index.
    - @param obj Index for the Path that follows the requested Path.
      */
      previousItem(obj: Path): Path
    /**

    - Creates source text that can be executed to obtain this Path.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
